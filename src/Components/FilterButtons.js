import React, { useEffect, useState } from 'react'
import RenderTodos from './RenderTodos';

const FilterButtons = (props) => {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(props.todos);
    console.log(items);
  },[props.todos]);
  
  return (
    <div>
        <div class="flex p-10 place-content-center">
            <div class="hover:cursor-pointer hover:bg-indigo-400 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg">
                All Todos
            </div>
            <div class="hover:cursor-pointer hover:bg-indigo-400 text-white flex-auto bg-indigo-500 pl-5 pr-5 pt-3 pb-3  m-9 max-w-lg">
                Incomplete
            </div>
        </div>
        <RenderTodos></RenderTodos>
    </div>
  )
}

export default FilterButtons