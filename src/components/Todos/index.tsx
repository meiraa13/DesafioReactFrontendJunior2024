import { useContext, useState } from "react"
import "./styles.scss"
import { ITodo, TodoContext } from "../../providers/TodoContext"

export function Todos(){
    const { todos, setTodos } = useContext(TodoContext)
    const [editId, setEditId] = useState<null | string>(null)
    const [editData, setEditData] = useState("")

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

    function deleteTask(id:string){
        const newArray = todos.filter((todo)=> todo.id !== id)
        setTodos(newArray)

    }
        
    function handleDoubleClick(id:string){
        setEditId(id)
    }

    function editField(e:any){
        e.preventDefault()
        const currentField:ITodo[] = todos.filter((todo)=>todo.id === editId)
        currentField[0].title = editData
        setEditId(null)
    }

    return (
        <ul>
            {
                todos.map((todo, index)=>(
                    <li key={todo.id}>
                        <div>
                            <input type="checkbox" checked={todo.isDone} onChange={()=> updateStatus(index)} />
                            {
                                editId === todo.id?
                                <form onSubmit={editField}>
                                    <input onChange={(e)=>setEditData(e.target.value)} />
                                </form>

                                :<p onDoubleClick={()=>handleDoubleClick(todo.id)} className={todo.isDone?"checked":""}>{todo.title}</p>
                            }
                        </div>
                        <button onClick={()=>deleteTask(todo.id)}>X</button>

                    </li>
                ))
            }
        </ul>

    )
}