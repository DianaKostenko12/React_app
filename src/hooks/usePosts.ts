import {Post} from "../components/PostItem";
import {SortOption} from "../pages/Posts";
import {useMemo} from "react";

export interface useSortedPostsProps {
    posts: Post[];
    sort: SortOption;
}

export interface usePostsProps {
    sortedPost: useSortedPostsProps;
    query: string;
}

export const useSortedPosts = ({posts, sort}: useSortedPostsProps) => {
    const sortedPosts = useMemo(() =>{
        if(sort !== ''){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    },[sort, posts])

    return sortedPosts;
}

export const usePosts = ({query, sortedPost} : usePostsProps) => {
    const { posts, sort } = sortedPost;

    const sortedPosts = useSortedPosts({posts, sort});
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post=> post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}