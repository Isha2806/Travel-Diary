import React from "react";
import headImg from "../../images/air-balloon.png";
import "./header.css";
export default function Header(){
    return (<>
    <header class="header center">
        <div class="header-text">
          <h1 class="heading">Travel Diaries</h1>
          <p class="header-paragraph">
            "Connect the Dots!"
          </p>
        </div>
        <img
          src={headImg}
          alt="Header Image"
          class="header-image"
        />
        <div class="logo">
          <h1>
            <span class="center">D</span>
            <span class="center">I</span>
            <span class="center">A</span>
            <span class="center">R</span>
            <span class="center">Y</span> 
          
           
          </h1>
        </div>
      </header> 
    </>);
}