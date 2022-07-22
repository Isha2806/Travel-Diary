import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDiary } from "../../Contexts/Diary/DiaryContext";
import "./scribble.css";
export default function ScribblePad({value, func}){
    const {diary, setDiary} =useDiary();
    const write = {
        toolbar: [
          ["bold", "italic"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ align: [] }],
        
        ],
      };
    return (<>
    <ReactQuill modules={write} value = {value} onChange={func}
     placeholder="Scribe Your Journey..." />
    </>);
}



