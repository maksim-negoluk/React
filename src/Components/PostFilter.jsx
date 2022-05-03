import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <hr style={{margin: "15px"}}/>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="search..."/>
            <MySelect value={filter.sort}
                      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                      defaultValue="Sort by"
                      options={[{value: "title", name: 'name'},
                          {value: "description", name: 'description'}]}/>
        </div>
    );
};

export default PostFilter;