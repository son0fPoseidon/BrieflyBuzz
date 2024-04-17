import React from 'react'
import './SearchBar.css';

const SearchBar = ({ search, clickSearch }) => {
    return (
        <div className="searchBar">
            <input ref={search} className="searchBar_input" type="text" placeholder={'Enter keywords to search...'}/>
            <button className="searchBar_button" onClick={clickSearch}><i className="fas fa-search"></i></button>
        </div>
    )
}

export default SearchBar
