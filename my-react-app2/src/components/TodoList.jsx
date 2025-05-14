import { TodoCard } from "./TodoCard";

export function TodoList(props){
     const {todos ,selectedTab,HandleDelete,HandleCompleteTodo} = props
     const tab= 'All'
     const filtertodoList= selectedTab === 'All'
     ? todos :
     selectedTab=== 'Complete'?
      todos.filter(val=> val.complete):
      todos.filter(val=> !val.complete)
    return(
        <>
        {filtertodoList.map((todo,todoIndex) => {
            return(
                <TodoCard key={todoIndex}
                todoIndex={todos.findIndex(val=>val.input==todo.input)}
                HandleDelete={HandleDelete}
                HandleCompleteTodo={HandleCompleteTodo}
                 todo={todo} />
                 
            )
        }
        )
    }   
           
        </>
    )

}