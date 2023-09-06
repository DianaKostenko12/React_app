import React from 'react';
import {useParams} from "react-router-dom";

const PostIdPage = () => {
    const params = useParams()
    return (
        <div>
            <h1>Ви відкрили сторінку поста з ID = {params.id}</h1>
        </div>
    );
};

export default PostIdPage;