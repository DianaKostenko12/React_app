import React, {FC} from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

export interface Post {
    id?: number;
    title: string;
    body: string;
}

export interface PostItemProps {
    number: number;
    post: Post;
    remove(post:Post): void;
}

const PostItem: FC<PostItemProps> = ({ number, post, remove}) => {
    const {id, title, body} = post;
    const router = useHistory()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}.{title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${id}`)}>
                    Відкрити
                </MyButton>
                <MyButton onClick={() => remove(post)}>
                    Видалити
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
