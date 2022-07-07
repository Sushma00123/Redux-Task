// import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import User from "./components/User";
import UserDetails from "./components/UserDetails";


function App() {
  return (
    <div className="App">
      <Nav />
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/users' element={<User />}></Route>
        <Route path="/user/details/:id" element={<UserDetails/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
