import React from "react";
import { useDiary } from "../../Contexts/Diary/DiaryContext";
import "./colors.css";
export default function Colors(){
    const {diary, setDiary} = useDiary();
    const colorPallete = [
        `var(--white-color)`,
        `var(--primary-color)`,
        `var(--secondary-color)`,
        `var(--grey-color)`,
        `var(--light-grey-color)`,
    ];
    console.log(diary);
    return(
        <>
        <div class= "colourBox">
        <h1>Color Selector</h1>
            <div class = "colourSelector">
          
        {colorPallete.map((colour) => {
            return(
                <div className = "color" key = {colour} 
              
                style={{
                    backgroundColor:colour,
                    border:
                        `1px solid black` 
                }}
               
                onClick = {()=>{
                    setDiary({...diary, color:colour})
                }}
                ></div>
            );
        })}
        </div>
        </div>
        </>
    );
}