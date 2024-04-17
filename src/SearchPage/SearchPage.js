import React, { useRef } from "react";
import { useHistory } from "react-router";
import Nav from "../Nav/Nav";
import SearchBar from "./SearchBar";
import SearchTiles from "./SearchTiles";
import catDetails from "../data";

const SearchPage = () => {

  const search = useRef(null);
  const history = useHistory();
  const searchQuery = () => {
    if (search.current.value !== '') {
      history.push(`/result/everything/q=${search.current.value}`);
    }
  }
  window.scrollTo(0,0);
  return (
    <div>
      <Nav />
      <div style={{ position: 'absolute', top: '120px', marginLeft: '30px', width: '1450px' }}>
        <SearchBar search={search} clickSearch={searchQuery} />
        <div style={{ marginBottom: '40px' }}>
          <SearchTiles category={catDetails} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
