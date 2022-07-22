import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import {ScribblePad,Diary,Colors} from "../index";
import { useDiary } from "../../Contexts/Diary/DiaryContext";

export default function HomePage(){
  const initialData = {
    heading:"",
    diary:"",
    color:"white",
    isEdited:false,
    isPinned:false,
    label:"TO-DO",
    timestamp: new Date().toLocaleDateString(),
   
    };
    const {
      diaryState, diaryDispatch, addDiary, diary,setDiary
    }=useDiary();
    const {diaries} = diaryState;
    const {colour} = diary;
    const inputHandler= (e) =>{
      const {name,value} = e.target;
      setDiary({...diary,[name]:value});
    };
    console.log(diary);
    const submitHandler = (e) => {
      e.preventDefault();
     addDiary(diary, diaryDispatch);
    }
    return (<>
      <div className="home">
        <form className="newDiary">
          <input 
            type = "text"
            name="heading"
            value={diary.heading}
            onChange= {(e)=>inputHandler(e)}
            placeholder="Idhar likhne ka...."
            className="headingText"
            required
            />
           
          <div class= "editor">
          <ScribblePad value={diary.diaries}
          func={(e) => setDiary({ ...diary, diaries: e })}/>  

          <button className="pin">
          📌
          </button>
          <button className="add">
           ➕
          </button>
          <Colors/>
          </div>
         
        </form>
        </div>
        <p className="heading-2">My Travel Notes!</p>
        <div className="listOfDiary">
         
         
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