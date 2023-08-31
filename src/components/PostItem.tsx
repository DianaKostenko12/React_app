import React, {FC} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

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
    const { title, body} = post;

    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}.{title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(post)}>Видалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
