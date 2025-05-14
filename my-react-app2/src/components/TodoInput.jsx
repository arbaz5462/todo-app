import { useState } from "react"

export function TodoInput(props){
   const {HandleAddTodo} =props
    const [input,setInput]=useState('')
    
   
    
    
    return(
        <div className="input-container">
        <input 
              value={input}
         onChange={(e)=>{setInput(e.target.value)}}
        placeholder="Add Task"/>
        <button  onClick={() => {
      if (!input) return
      HandleAddTodo(input)
      setInput('')
        }}>ADD</button>
        </div>
    )

    
}