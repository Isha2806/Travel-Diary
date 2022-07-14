import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
export default function HomePage(){
    return (<>
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