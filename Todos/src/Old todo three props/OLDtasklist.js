import React, { useState } from 'react'

function OLDtasklist({hendeltodo,hendelchenges,hendeldel}) {
    // console.log(hendeltodo)
  return (
    <div>
        {
            hendeltodo.map((f)=>(
                <ul key={f.id}>
                    <Task todo={f} chen={hendelchenges} del={hendeldel}></Task>
                </ul>
            ))  
        }
      
    </div>
  )
}

function Task({todo,chen,del}){

    var [edit,setedit] = useState(false)

    if(edit)
    {
        var content = 
        <>
        <input type="text" name="" value={todo.name} onChange={(e)=>{chen({
            ...todo,
            name:e.target.value})}}/>
        <button onClick={()=>{setedit(false)}}>Save</button>
        </>
    }

    else 
    {
        var content = 
        <>
        {todo.name} 
        <button onClick={()=>{setedit(true)}}>Edit</button>
        </>
    }

    return(
        <>
            {content}
            <button onClick={()=>{del(todo.id)}}>Delete</button>

        </>
    )
}

export default OLDtasklist
