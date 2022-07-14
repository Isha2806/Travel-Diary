import React from "react";
import { Link } from "react-router-dom";

import "./diary.css";
export default function Diary({diary}){
    const { heading, note } = diary;
    return (<>
    <div className= "diary">
      <div className= "diary-content">
        <h3>{heading}</h3>
        <p>{note}</p>
      </div> 
      <div className= "diary-footer">
        <Link to="/">
          <span>pin</span>
        </Link>
        <Link to="/">
          <span>archive</span>
        </Link>
        <Link to="/">
          <span>delete</span>
        </Link>
        <Link to="/">
          <span>edit</span>
        </Link>
      </div>
    </div>
  
    </>);
}