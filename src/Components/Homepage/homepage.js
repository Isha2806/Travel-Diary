import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import {ScribblePad,Diary} from "../index";
export default function HomePage(){
  const diary= {
    heading: "Isha: My best Friend",
      note: "you are the best isha",
    };
    return (<>
      <div className="home">
        <form className="newDiary">
          <input 
            type = "text"
            placeholder="Idhar likhne ka...."
            className="headingText"/>
           
          <div class= "editor">
          <ScribblePad/>  
          <button className="pin">
          📌
          </button>
          <button className="add">
           ➕
          </button>
          </div>
          
        </form>
        </div>
        <p className="heading-2">My Travel Notes!</p>
        <div className="listOfDiary">
         
          <Diary diary={diary}/>
          <Diary diary={diary}/>
          <Diary diary={diary}/>
          <Diary diary={diary}/>
          <Diary diary={diary}/>
          <Diary diary={diary}/>
          <Diary diary={diary}/>


        
      </div>
      
     <footer class="footer">
        <div class="footer-list">
        <Link to = "/" class="footer-link">PIN</Link>
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