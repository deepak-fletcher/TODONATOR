import React, { useEffect, useState } from 'react'
import RenderTodos from './RenderTodos';

const FilterButtons = (props) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(false);
  const changeState1 = (e) => {
        props.changeState(e);
        console.log(e);
  }

  useEffect(() => {
    setItems(props.todos);
    console.log(items);
  },[props.todos]);

  
  return (
    <div>
        <div class="flex p-10 place-content-center">
            <div class="hover:cursor-pointer hover:bg-indigo-300 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg" onClick={()=>setValue(false)}>
                AllTodos
            </div>
            <div class="hover:cursor-pointer hover:bg-indigo-400 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg" onClick={()=>setValue(true)}>
                Incomplete
            </div>
        </div>
        <div class="overflow-auto max-h-96" >
            <RenderTodos todos={items} toShow={value} changeState={changeState1}></RenderTodos>
        </div>
        
    </div>
  )
}

export default FilterButtons