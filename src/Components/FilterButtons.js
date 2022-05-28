import React, { useEffect, useState } from 'react'
import RenderTodos from './RenderTodos';
import "../Stylesheet/FilterButton.css";


const FilterButtons = (props) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(false);
  const changeState1 = (e) => {
        props.changeState(e);
        console.log(e);
  }
  const delItem1 = (e) => {
        props.delElement(e);
        console.log(e);
  }

  useEffect(() => {
    setItems(props.todos);
    console.log(items);
  },[props.todos]);

  const [allTodos, setAllTodos] = useState("hover:cursor-pointer border-2 border-zinc-100 rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-300 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg")
  const [incomplele, setIncomplele] = useState("hover:cursor-pointer rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg")
  const AllTodoClick = () =>{
    setValue(false);
    setIncomplele("hover:cursor-pointer rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg");
    setAllTodos("hover:cursor-pointer border-2 border-zinc-100 rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-300 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg");
  }
  const IncompleteTodoClick = () =>{
    setValue(true);
    setIncomplele("hover:cursor-pointer border-2 border-zinc-100 rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-300 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg");
    setAllTodos("hover:cursor-pointer rounded-3xl hover:bg-indigo-300 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg");
  }
  
  return (
    <div>
        <div className='render1'>
        <div data-aos="zoom-in" class="flex pt-10 place-content-center">
            <div class={allTodos}  onClick={AllTodoClick}>
                AllTodos
            </div>
            <div class={incomplele}  onClick={IncompleteTodoClick}>
                Incomplete
            </div>
        </div>
        </div>
        <div>
            <RenderTodos todos={items} toShow={value} changeState={changeState1} delElement={delItem1}></RenderTodos>
        </div>
        
    </div>
  )
}

export default FilterButtons