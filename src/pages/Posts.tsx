import React, {useEffect, useState} from 'react';
import {Post} from "../components/PostItem";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/page";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";


export type SortOption = "body" | "title" | '';

export interface FilterOption {
    sort: SortOption;
    query: string;
}

function Posts() {
    const [posts, setPosts] = useState<Post[]>([])
    const [filter, setFilter] = useState<FilterOption>({sort:'', query:''})
    const [modal, setModal]= useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const sortedAndSearchedPosts = usePosts({
        query: filter.query,
        sortedPost: {
            posts,
            sort: filter.sort}
    });

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () =>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount({totalCount, limit}));
    })

    useEffect(() =>{
        fetchPosts()
    },[page])

    const createPost = (newPost:Post) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post:Post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

    const changePage = (page : number) => {
        setPage(page)
    }


    return (
        <div className="App">
            <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>
                Створити користувача
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Сталася помилка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display:'flex', justifyContent:'center', marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;