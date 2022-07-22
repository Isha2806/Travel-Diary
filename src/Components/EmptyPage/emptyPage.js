import React from "react";
import {Link} from "react-router-dom";
export default function Empty(){
    return(<>
        <div className="emptyState" >
            <h4>NO DIARIES HERE!</h4>
            <Link to = "/">
            <button>Go BACK</button>
            </Link>
        </div>
    </>)
}