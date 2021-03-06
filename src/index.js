import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthenticationProvider } from "./Contexts/Authentication/AuthContext";
import { DiaryProvider } from "./Contexts/Diary/DiaryContext";

// Call make Server
makeServer();

ReactDOM.render(
  
  <React.StrictMode>
  <Router>
    
    <AuthenticationProvider>
      <DiaryProvider>
    <App />
    </DiaryProvider>
    </AuthenticationProvider>
  </Router>
</React.StrictMode>,
  document.getElementById("root")
);
