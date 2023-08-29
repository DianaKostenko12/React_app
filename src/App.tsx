import React, {useState} from 'react';
import {Post} from "./components/PostItem";
import './components/styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState<Post[]>([
        { id:1,  title: 'ygjn', body:'cgvb jkb'},
        { id:2,  title: 'ygjn', body:'cgvb jkb'},
        { id:3,  title:'ygjn', body:'cgvb jkb'},
    ])
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState('')

    const addNewPost = (e:React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
        const newPost: Post = {
                id: Date.now(),
                title,
                body
        }
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
        <form action="">
            <MyInput value = {title} onChange = {e => setTitle(e.target.value)} type="text" placeholder="Назва поста"/>
            <MyInput value = {body} onChange = {e => setBody(e.target.value)} type="text" placeholder="Опис поста"/>
            <MyButton onClick={addNewPost}>Створити пост</MyButton>
        </form>
        <PostList posts={posts} title="Список постів 1"/>
    </div>
  );
}

export default App;
