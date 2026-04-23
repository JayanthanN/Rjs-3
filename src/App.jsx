
// import ConditionalRendering from './Components/ConditionalRendering'
// import Listrendering from './Components/Listrendering'
// import Combinerendering from './Components/Combinerendering'
// import SignInandOut from './Components/SignInandOut'
// import RegForm from './Components/RegForm'
// import Stopwatch from './Components/Stopwatch'
// import ProfileImageUpdate from './Components/Profileimage'
// import Parent from './Component/Parent'
// import React, { useState } from "react";
// import { FormContext } from "./Components/FormContext";
// import Form from "./Components/Form";
// import "./App.css";
// import Home from './Router/Home'
// import About from './Router/About'
// import Contact from './Router/Contact'
// import Profile from './Router/Profile'
// import Services from './Router/Services'
// import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import UserList from './User/UserList';
// import UserDetails from './User/UserDetails';
// import './App.css';
// import ChatApp from './Components/ChatApp';
import React from 'react';  
import UserList from './User/UsersList';


  function App() {
  return (

    <div >
      
      {/* <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} >
          <Route path="web-development" element={<h3>Web Development Service</h3>} />
          <Route path="app-development" element={<h3>App Development Service</h3>} />
          <Route path="ui-ux-design" element={<h3>UI/UX Design Service</h3>} /> 
        </Route>

      </Routes>

      </BrowserRouter> */}
   {/* <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router> */}
    {/* <ChatApp /> */}
    <UserList />
    </div>
  );
}

export default App;
