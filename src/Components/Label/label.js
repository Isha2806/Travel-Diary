import React from "react";
import { useState } from "react";
import { useDiary } from "../../Contexts/Diary/DiaryContext";

export default function Label(){
    const [label, setLabel] =  useState("");
    const {diary,setDiary} = useDiary();
    return(
        <>
        <div className="labelSelector">
            <input
                type="text"
                className="labelInput"
                onChange={(e)=>setLabel(e.target.value) }
                value={label}
                placeholder = "NEW LABEL"
            />
            <button
            onClick={()=>{
                setDiary({...diary, label:[label]});
                setLabel("");
            }}> + </button>
        </div>
        </>
    );
 
}