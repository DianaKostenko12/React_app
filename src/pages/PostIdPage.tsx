import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {Post} from "../components/PostItem";
import Loader from "../components/UI/Loader/Loader";

interface PostParams {
    id: string;
}

interface Comment {
    body: string;
    email: string;
}

const PostIdPage = () => {
    const params  = useParams<PostParams>();
    const id = Number(params.id);

    const [post, setPost] = useState<Post|null>(null);
    const [comments, setComments] = useState<Comment[]>([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(id)
        fetchComments(id)
    },[]);

    return (
        <div>
            <h1>Ви відкрили сторінку поста з ID = </h1>
            {isLoading
                ? <Loader/>
                :  <div>{post?.id}. {post?.title}</div>
            }
            <h1>
                Коментарії
            </h1>
            {isComLoading
                ? <Loader/>
                :<div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;