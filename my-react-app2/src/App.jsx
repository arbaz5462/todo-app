import { Header } from "./components/Header"
import { Tabs } from "./components/tabs"
import { TodoList } from "./components/TodoList"
import {TodoInput} from  "./components/TodoInput"
import './index.css'
import './fanta.css'
import { useState } from "react"
import { useEffect } from "react"

function App(){
//  const todos = [
// //    { input: 'Hello! Add your first todo!', complete: true },
// //    { input: 'Get the groceries!', complete: false },
// //    { input: 'Learn how to web design', complete: false },
// //   { input: 'Say hi to gran gran', complete: true },
//    ]
   const [todos,setTodos]=useState(
   [ { input: 'Hello! Add your first todo!', complete: true } ]
   )
   const [selectedTab,setSelectedTab] =useState('open')
  function HandleAddTodo(newTodo){
    const newTodoList=[...todos,{input: newTodo ,complete: false}]
    setTodos(newTodoList)
    HandleSaveData(newTodoList)
  }
  function HandleCompleteTodo(index){
    let newTodoList=[...todos]
    let completedTodo=todos[index]
    completedTodo['complete']=true
    newTodoList[index]=completedTodo
    setTodos(newTodoList)
    HandleSaveData(newTodoList)
  }
  function HandleDelete(index){
    const newTodoList=todos.filter((val,valIndex)=>{
      return valIndex!=index
    })
    setTodos(newTodoList)
    HandleSaveData(newTodoList)
  }
function HandleSaveData(currTodos){
  localStorage.setItem('todo-app',JSON.stringify({todos:currTodos}))
}
  useEffect(() =>{
    if (!localStorage|| !localStorage.getItem('todo-app'))
      {return}
    console.log('here')
    let db=JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)

  },[])

  
    return(
        <>
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab}  setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoList  HandleCompleteTodo={HandleCompleteTodo}
          HandleDelete={HandleDelete} todos={todos} selectedTab={selectedTab}/>
        <TodoInput HandleAddTodo={HandleAddTodo} />
        
        
        
        </>
       
    )
}
export default App
