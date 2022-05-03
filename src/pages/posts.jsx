import React, {useState, useEffect, useRef} from "react";
import "../Styles/App.css"
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {GetPageCount} from "../Utils/Pages";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../Components/UI/Button/MyButton";
import Pagination from "../Components/UI/Pagination/Pagination";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import MyModal from "../Components/UI/MyModal/MyModal";
import FormPost from "../Components/FormPost";
import Loader from "../Components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../Components/UI/Select/MySelect";

{/*if using pagination uncomment pagination and MySelect components and comment observer related functions
* app is using dynamic scroll loading by default*/}

const Posts = () => {
    const [programing_posts, setProgramingPost] = useState([
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setProgramingPost([...programing_posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(GetPageCount(totalCount, limit));
    });

    const sortedAndSearchedPosts = usePosts(programing_posts, filter.sort, filter.query)

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (NewPost) => {
        setProgramingPost([...programing_posts, NewPost])
        setModal(false)

    }

    const changePage = (page) => {
        setPage(page)
    }

    const removePost = (post) => {
        setProgramingPost(programing_posts.filter(p => p.id !== post.id))
    }

    return(
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: "15px"}}>
                Create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <FormPost create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            {/*<MySelect*/}
            {/*    value={limit}*/}
            {/*    onChange={value => setLimit(value)}*/}
            {/*    defaultValue='amount of elements on page'*/}
            {/*    options={[*/}
            {/*        {value: 5, name: '5'},*/}
            {/*        {value: 10, name: '10'},*/}
            {/*        {value: 25, name: '25'},*/}
            {/*        {value: -1, name: 'all'}*/}
            {/*    ]}/>*/}
            {postError &&
            <h1>Error: {postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Programing"}/>
            <div ref={lastElement}></div>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>}
            {/*<Pagination page={page}*/}
            {/*            changePage={changePage}*/}
            {/*            totalPages={totalPages}*/}
            {/*/>*/}
        </div>
    )
}


export default Posts;
