import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const FormPost = ({create}) => {
    const [posts, setPost] = useState({title: '', data: ''})

    const AddNewPost = (event) => {
        event.preventDefault()
        const NewPost = {
            ...posts, id: Date.now()
        }
        create(NewPost)
        setPost({title: '', data: ''})

    }

    return (
        <form>
            <MyInput title={posts.title} onChange={event => setPost({...posts, title: event.target.value})} type="text" placeholder="title"/>
            <MyInput title={posts.data} onChange={event => setPost({...posts, data: event.target.value})} type="text" placeholder="description"/>
            <MyButton onClick={AddNewPost}>Add posts</MyButton>
        </form>
    );
};

export default FormPost;