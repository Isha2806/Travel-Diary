import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import {ScribblePad,Diary} from "../index";
export default function HomePage(){
  const diary= {
    heading: "isha",
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatum ipsam",
    };
    return (<>
      <div className="home">
        <form className="newDiary">
          <input 
            type = "text"
            placeholder="Idhar likhne ka "
            className="headingText"
          />
          <ScribblePad/>
          <button className="pin">
            pin me
          </button>
          <button className="add">
            Add new
          </button>
        </form>
        <div className="listOfDiary">
          <Diary diary={diary}/>
          <Diary diary={diary}/>

        </div>
      </div>
     <footer class="footer">
        <div class="footer-list">
        <Link to = "/" class="footer-link">Home</Link>
        <Link to = "/" class="footer-link">Archive</Link>
        <Link to = "/" class="footer-link">Trash</Link>
        <Link to = "/" class="footer-link">Goals</Link>
        <Link to = "/login" class="footer-link">Login</Link>
        </div>
        <p class="footer-paragraph">
          Copyright &copy;ShaviTheUI All Rights Reserved
        </p>
      </footer>
    </>);
}