import React, {FC} from 'react';
import PostItem, {Post} from "./PostItem";

interface PostListProps{
    posts: Post[];
    title: string;
    remove(post:Post): void;
}

const PostList:FC<PostListProps> = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post,index) =>
                <PostItem remove={remove} post={post} number={index + 1} key={post.id}/>)}
        </div>
    );
};

export default PostList;