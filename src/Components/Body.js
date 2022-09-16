import React, { useEffect } from 'react';
import NavBar from './NavBar';
import NewTodo from './NewTodo';
import AOS from "aos";
import "aos/dist/aos.css";

const Body = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div class="bg-black bg-cover">
        <NavBar></NavBar>
        <NewTodo></NewTodo>
    </div>
  )
}

export default Body

