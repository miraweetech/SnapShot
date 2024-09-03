import React from "react";
import "./css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/reducer/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const items = useSelector((state) => state.search.items);

  const handleInputChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const filteredItems = items.filter(
    (item) => item.toLowerCase() === searchQuery.toLowerCase()
  );
  return (
    <>
      <h1 className="snapshot">SnapShot</h1>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search..."
          className="input-field"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <button className="search-btn">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <ul>
        {filteredItems.length > 0 && (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>

      <div class="allbutton">
        <button class="btn">Mountain</button>
        <button class="btn">Beaches</button>
        <button class="btn">Birds</button>
        <button class="btn">Food</button>
      </div>
    </>
  );
};
export default Header;
