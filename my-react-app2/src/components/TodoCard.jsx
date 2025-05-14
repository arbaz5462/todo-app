export function TodoCard(props){
   const {todo,todoIndex,HandleDelete,HandleCompleteTodo} = props
    const tab= 'All'
     const filtertodoList= tab === 'All'
     ? todo :
     tab === 'Complete'?
      todo.filter(val=> val.complete):
      todo.filter(val=> !val.complete)
    return(
        <div className="card todo-item">
          <p>{todo.input}</p>
          <div className="todo-buttons">
          <button onClick={()=>{HandleCompleteTodo(todoIndex)}}
            disabled={todo.complete}>
            <h6>DONE</h6>
            </button>
          <button onClick={()=>{HandleDelete(todoIndex)}}>
            <h6>DELETE</h6>
             </button>
          </div>
          
        </div>
    )
}