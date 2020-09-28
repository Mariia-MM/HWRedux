import React from 'react';
import './App.css';
import Posts from "./components/Posts/Posts";
import Header from "./Header/Header";
import {HashRouter as Router} from "react-router-dom"

export const MENU=[
    {
    title:"Posts",
    path:"/posts",
    component: Posts,
    exact:true
  },
]

function App() {
  return (
    <Router>
    <div >
      < Header />
      < Posts />
    </div>
    </Router>
  );
}

export default App;
