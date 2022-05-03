import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostID(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>You opened post number {params.id} page</h1>
            {isLoading
                ?<Loader />
                :<div>{post.id}. {post.title}</div>}
            <h1>Comments</h1>
            {isCommentLoading
                ?<Loader />
                :<div>
                    {comments.map(comment =>
                        <div key={comment.id} style={{marginTop: 15}}>
                            <h4>{comment.email}</h4>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;