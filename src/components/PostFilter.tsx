import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import {FilterOption} from "../pages/Posts";


interface PostFilterProps {
    filter: FilterOption;
    setFilter(filterProps: FilterOption): void;
}

const PostFilter = ({filter, setFilter}:PostFilterProps) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query:event.target.value})}
                placeholder="Пошук..."
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => {
                    if (selectedSort === "body" || selectedSort === "title") {
                        setFilter({ ...filter, sort: selectedSort });
                    }
                }}
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