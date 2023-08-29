import React, {FC} from 'react';
import PostItem, {Post} from "./PostItem";

interface PostListProps{
    posts: Post[];
    title: string;
}

const PostList:FC<PostListProps> = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post,index) =>
                <PostItem post={post} number={index + 1}  key={post.id}/>)}
        </div>
    );
};

export default PostList;