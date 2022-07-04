// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import User from "./components/User";


function App() {
  return (
    <div className="App">
      <Nav />
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>

      </Routes>

    </div>
  );
}

export default App;
