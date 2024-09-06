import React, { useState } from "react";
import Navigation from "./Navigation";
import Container from "./Container";
import Context from "./Context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchEntry } from "../redux/reducer/SearchSlice";

const Header = () => {
  const [searchTriggered, setSearchTriggered] = useState(false);
  const dispatch = useDispatch();
  const searchEntry = useSelector((state) => state.search.searchEntry);
  const navigate = useNavigate();

  const updateSearchInput = (e) => {
    dispatch(setSearchEntry(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchEntry.trim()) {
      navigate(`/search/${searchEntry}`);
    }
  };
  return (
    <>
      <h1>SnapShot</h1>
      <div className="search-form" onClick={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="search..."
          value={searchEntry}
          onChange={updateSearchInput}
        />
        {searchEntry && (
          <button className="search-btn" 
                  onClick={(e) => {
                    e.preventDefault()
                    setSearchTriggered(true);
                  }}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <Navigation />
      <Container />
      <Context />
    </>
  );
};

export default Header;
