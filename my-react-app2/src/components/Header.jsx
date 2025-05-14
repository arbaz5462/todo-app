export function Header(props){
    const {todos}= props
    const todoLength= todos.length
    const istaskPlural=todos.length != 1
    const taskOrtasks=  istaskPlural ? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient">you have {todos.length} open {taskOrtasks}</h1>
        </header>
    )
}