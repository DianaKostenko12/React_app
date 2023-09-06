import React, {FC} from 'react';
import PostItem, {Post} from "./PostItem";
import {TransitionGroup, CSSTransition,} from "react-transition-group";

interface PostListProps{
    posts: Post[];
    title: string;
    remove(post:Post): void;
}

const PostList:FC<PostListProps> = ({posts, title, remove}) => {

    if(!posts.length)
    {
        return(
            <h1 style={{textAlign:'center'}}>
                Пости не були знайдені!
            </h1>

        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={post} number={index + 1} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;