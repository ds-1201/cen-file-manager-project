import React from "react";
import styles from "./SearchForm.module.scss";
import SearchIcon from "./../../assets/SearchIcon";

const SearchForm = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search App");
  };
  return (
    <div className={styles["search-box"]}>
      <form onSubmit={handleSearch}>
        <SearchIcon />
        <input type="text" placeholder="Search for files and folders." />
        <button></button>
      </form>
    </div>
  );
};

export default SearchForm;
