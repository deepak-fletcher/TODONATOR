import React from 'react';
import NavBar from './NavBar';
import NewTodo from './NewTodo';

const Body = () => {
  return (
    <div class="bg-black bg-cover">
        <NavBar></NavBar>
        <NewTodo></NewTodo>
    </div>
  )
}

export default Body

