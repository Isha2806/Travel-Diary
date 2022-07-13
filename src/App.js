import "./App.css";
import logo from "./logo.png";
import Router from "./Utilities/reactRouter";
import {Header} from "./Components";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
