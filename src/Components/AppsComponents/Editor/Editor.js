import React from "react";
import { TextEditor, getInnerHtml, addContentTo } from "text-editor-react";

//CSS
import styles from './Editor.module.css'

const style = {
    toolbarStyle: {
        display: "flex",
        alignItems: "center",
        justifycontent: "center",
        padding: '0 10px'
    },
    toolItemStyle: {
        color: "#2CA1BC",
    },
    editorStyle: {
        border: "2px solid #727789",
        borderRadius: "10px",
        color: "#727789",
        height: "25vh",
        margin: "1rem",
        padding: "1rem",
    },
};

const Editor = () => {
    const id = "text-editor-demo-id";
    const targetDivId = "target-div-id";

    const handleClick = () => {
        const content = getInnerHtml(id);
        addContentTo(content, targetDivId);
    };

    return (
        <div className={`section ${styles.editor}`}>
            <TextEditor
                id={id}
                toolbarStyle={style.toolbarStyle}
                toolItemStyle={style.toolItemStyle}
                editorStyle={style.editorStyle}
            />
            <div className={styles.target_header}>
                <h2 className={styles.target_heading}>Target Div</h2>
                <button className={styles.button} onClick={handleClick}>Add Content</button>
            </div>
            <div className={styles.target_div} id={targetDivId}></div>
        </div>
    );
}

export default Editor;