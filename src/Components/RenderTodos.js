import React, { useEffect } from 'react'
import {MdClose, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const RenderTodos = (props) => {
    useEffect(() => {
        console.log(props.toShow);
        console.log(props.todos);
      },[props.toShow, props.todos, props.todos.state]);
      
    return (
        <div  class="text-indigo-400 min-h-fit">
        {!props.toShow && props.todos.map((e)=>(
            <div data-aos="zoom-in" data-aos-offset="0" class="flex place-content-center">
                <div class="m-2 h-10 place-content-center flex-auto flex border-2 rounded-2xl border-indigo-400 max-w-2xl">                    
                    <div class="ml-4 m-auto mr-4 flex-initial" id={e.id} onClick={(d)=>props.changeState(d.currentTarget.id)}>{e.state&&<MdCheckBox></MdCheckBox>}{!e.state&&<MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>}</div>
                    <p class="flex-1 m-auto">{e.description}</p>
                    <div class="m-auto ml-4 mr-4 flex-initial" id={e.id} onClick={(d)=>props.delElement(d.currentTarget.id)}><MdClose></MdClose></div>
                </div>
            </div>
        ))}
        {!props.toShow && props.todos.length==0 &&
            <div data-aos="zoom-in"  class="flex place-content-center">
                All tasks Completed and Removed
            </div>
        }
        {props.toShow && props.todos.filter((e)=> e.state==false).map((e)=>(
            <div data-aos="zoom-in" data-aos-offset="0" class="flex place-content-center">
                <div class="m-2 h-10 flex-auto place-content-center flex border-2 rounded-2xl  border-indigo-400  max-w-2xl">
                    <div class="m-auto ml-4 mr-4 flex-initial" id={e.id} onClick={(d)=>props.changeState(d.currentTarget.id)}>{!e.state&&<MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>}</div>
                    <p class="m-auto flex-1">{e.description}</p>
                    <div class="m-auto ml-4 mr-4 flex-initial" id={e.id} onClick={(d)=>props.delElement(d.currentTarget.id)}>{!e.state&&<MdClose></MdClose>}</div>
                </div>
            </div>
        ))}
        {props.toShow && props.todos.filter((e)=> e.state==false).length==0 &&
            <div data-aos="zoom-in" class="flex place-content-center">
                No Incomplete tasks
            </div>
        }
        </div>
    )
}

export default RenderTodos