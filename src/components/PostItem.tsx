import React, {FC} from 'react';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostItemProps {
    number: number;
    post: Post;
}

const PostItem: FC<PostItemProps> = ({ number,post}) => {
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
                <button>Видалить</button>
            </div>
        </div>
    );
};

export default PostItem;
