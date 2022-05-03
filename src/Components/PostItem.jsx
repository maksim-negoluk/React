import React from 'react';
import MyButton from "./UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className="post__button">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
            </div>
            <div className="post__button">
                <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;