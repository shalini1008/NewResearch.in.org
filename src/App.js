import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Office from "./Pages/Office";
import Project from "./Pages/Project";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Office" element={<Office/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Our Team" element={<Team/>}/>
        <Route path="/Contact us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
