import React, { useEffect } from 'react'

const RenderTodos = (props) => {
    useEffect(() => {
        console.log(props.toShow);
        console.log(props.todos);
      },[props.toShow, props.todos]);
    return (
        <div class="text-indigo-400">
        {!props.toShow && props.todos.map((e)=>(
            <div>{e.description}</div>
        ))}
        {props.toShow && props.todos.filter((e)=> e.state==false).map((e)=>(
            <div>{e.description}</div>
        ))}
        </div>
    )
}

export default RenderTodos