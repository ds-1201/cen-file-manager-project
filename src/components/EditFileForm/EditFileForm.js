import React, { useState } from "react";

// import Editor from "cuvette-text-editor";
import styles from "./EditFileForm.module.scss";
import { useModalOpen } from "context/ModalOpen/ModalOpenContext";
import { useActiveFile } from "context/File/FileContext";
import { useData } from "context/Data/DataContext";
import { useMode } from "context/Mode/ModeContext";

export default function EditorFileForm() {
  const { modalDispatch } = useModalOpen();
  const { isDark } = useMode();
  const { activeFile, activeFileDispatch } = useActiveFile();
  const { listsDispatch } = useData();
  const [editorValue, setEditorValue] = useState(activeFile.content);
  const handleSubmit = (e) => {
    e.preventDefault();
    listsDispatch({ type: "EDIT", payload: editorValue, active: activeFile });
    activeFileDispatch({ type: "INACTIVE" });
    modalDispatch({ type: "CLOSE" });
  };

  return (
    <div className={styles["edit-form"]}>
      <h2 className={`${styles["title"]} ${!isDark && styles["dark__title"]}`}>
        Edit File Content: {`"${activeFile.label}"`}
      </h2>
      <textarea
        className={styles["edit-form__editor"]}
        value={editorValue}
        onChange={(e) => setEditorValue(e.target.value)}
      />
      <button
        type="submit"
        className={`${!isDark ? styles["dark__btn"] : styles["btn"]} ${
          !isDark ? styles["dark__btn-submit"] : styles["btn-submit"]
        }`}
        onClick={handleSubmit}
      >
        Save File.
      </button>
    </div>
  );
}
