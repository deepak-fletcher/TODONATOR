import React, { useEffect } from 'react'
import { MdAdd, MdClose, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const RenderTodos = (props) => {
    useEffect(() => {
        console.log(props.toShow);
        console.log(props.todos);
      },[props.toShow, props.todos, props.todos.state]);
    return (
        <div class="text-indigo-400">
        {!props.toShow && props.todos.map((e)=>(
            <div class="flex place-content-center">
                <div class="m-2 h-10 place-content-center flex-auto flex border-2 border-indigo-400 max-w-2xl">
                    <div class="ml-4 m-auto mr-4 flex-initial" onClick={(d)=>{props.changeState(d.target.id); console.log(d.target.id)}}>{!e.state?<MdCheckBoxOutlineBlank id={e.id}></MdCheckBoxOutlineBlank>:<MdCheckBox id={e.id}></MdCheckBox>}</div>
                    <p class="flex-1 m-auto">{e.description}</p>
                </div>
            </div>
        ))}
        {props.toShow && props.todos.filter((e)=> e.state==false).map((e)=>(
            <div class="flex place-content-center">
                <div class="m-2 h-10 flex-auto place-content-center flex border-2  border-indigo-400  max-w-2xl">
                    <div class="m-auto ml-4 mr-4 flex-initial" onClick={(d)=>props.changeState(d.target.id)}>{!e.state&&<MdCheckBoxOutlineBlank id={e.id}></MdCheckBoxOutlineBlank>}{e.state&&<MdCheckBox id={e.id}></MdCheckBox>}</div>
                    <p class="m-auto flex-1">{e.description}</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default RenderTodos