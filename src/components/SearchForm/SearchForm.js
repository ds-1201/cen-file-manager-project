import React from "react";
import styles from "./SearchForm.module.scss";
import Search_logo from "./../../assets/search_logo.png";

const SearchForm = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search App");
  };
  return (
    <div className={styles["search-box"]}>
      <form onSubmit={handleSearch}>
        <i>
          <img src={Search_logo} alt="Search-logo" />
        </i>
        <input type="text" placeholder="Search for files and folders." />
        <button></button>
      </form>
    </div>
  );
};

export default SearchForm;
