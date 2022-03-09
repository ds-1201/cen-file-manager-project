import React, { useState, useEffect } from "react";
import styles from "./SearchForm.module.scss";
// import SearchIcon from "./../../assets/SearchIcon";
import { useData } from "./../../context/Data/DataContext";
import { Autocomplete, TextField } from "@mui/material";
import { useFolderList } from "context/FolderList/FolderListContext";
import { useActiveFile } from "context/File/FileContext";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";

const SearchForm = () => {
  const { lists } = useData();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { fListDispatch } = useFolderList();
  const { activeFileDispatch } = useActiveFile();
  const { modalDispatch } = useModalOpen();

  const findSuggestion = (regex, parent) => {
    if (parent?.length === 0) {
      return [];
    }
    let ans = [];
    for (let i = 0; i < parent?.length; i++) {
      if (parent[i].label.match(regex)) {
        ans.push(parent[i]);
      }
      if (parent[i].type === "Folder") {
        const small = findSuggestion(regex, parent[i].children);
        ans = [...ans, ...small];
      }
    }
    return ans;
  };

  useEffect(() => {
    const regex = new RegExp(`^${input}`, "gi");
    const suggestion = findSuggestion(regex, lists);
    setSuggestions(suggestion);
  }, [input]);

  return (
    <div className={styles["search-box"]}>
      {/* <SearchIcon /> */}
      <Autocomplete
        id="explorer-search"
        freeSolo
        disableClearable
        size="small"
        options={suggestions}
        getOptionLabel={(option) => `${option.type} - ${option.label}`}
        onChange={(e, active) => {
          if (active?.type === "Folder") {
            fListDispatch({ type: "ACTIVE", payload: active });
            setInput("");
          }
          if (active?.type === "File") {
            activeFileDispatch({ type: "ACTIVE", payload: active });
            setInput("");
            modalDispatch({ type: "OPEN", payload: "Edit" });
          }
        }}
        inputValue={input}
        onInputChange={(e, newInput) => setInput(newInput)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search files and folders ..."
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchForm;

{
  /* <input
  type="text"
  placeholder="Search..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>;

{
  suggestions?.length > 0 && (
    <div className={styles["search-suggestion"]}>
      {suggestions?.map((item) => {
        return (
          <p key={item.id}>
            {item.type} - {item.label}
          </p>
        );
      })}
    </div>
  );
} */
}
