import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./scribble.css";
export default function ScribblePad(){
    const write = {
        toolbar: [
          ["bold", "italic", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          
        ],
      };
    return (<>
    <ReactQuill modules={write} placeholder="Scribe Your Journey..." />
    </>);
}



