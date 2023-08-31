import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                placeholder="Пошук..."
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue = "Сортування"
                options={[
                    {value: 'title', name: 'За назвою'},
                    {value: 'body', name: 'За описом'}
                ]}
            />
        </div>
    );
};

export default PostFilter;