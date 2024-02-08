import { useContext } from "react"
import "./styles.scss"
import { TodoContext } from "../../providers/TodoContext"

export function Todos(){
    const { todos, setTodos } = useContext(TodoContext)

    function updateStatus(index:number){
        const newTodos = todos.map((todo,currentIndex)=>{
            if(currentIndex === index){
                return {...todo, isDone:!todo.isDone}
            }else {
                return todo
            }
        })
        setTodos(newTodos)
        

    }
    console.log(todos)

    return (
        <ul>
            {
                todos.map((todo, index)=>(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.isDone} onChange={()=> updateStatus(index)} />
                        <p className={todo.isDone?"checked":""}>{todo.title}</p>
                    </li>
                ))
            }
        </ul>

    )
}