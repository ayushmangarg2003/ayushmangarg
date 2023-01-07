import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import './App.css'


function App() {
  return (
    <div className="app">
      <Router>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
