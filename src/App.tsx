import React, {useMemo, useState} from 'react';
import {Post} from "./components/PostItem";
import './components/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

export type SortOption = "body" | "title"|'';

interface FilterOption{
    sort: SortOption;
    query: string;
}

function App() {
    const [posts, setPosts] = useState<Post[]>([
        { id:1,  title: 'ygjn', body:'cgvb jkb' },
        { id:2,  title: 'agjn', body:'agvb jkb' },
        { id:3,  title:'bgjn', body:'cvgvb jkb' },
    ])

   const [filter, setFilter] = useState<FilterOption>({sort:'title', query:''})

    const sortedPosts = useMemo(() =>{
        if(filter.sort !== ''){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post=> post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost:Post) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post:Post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {sortedAndSearchedPosts.length
            ?
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів 1"/>
            :
            <h1 style={{textAlign:'center'}}>
                Пости не були знайдені!
            </h1>
        }
    </div>
  );
}

export default App;
