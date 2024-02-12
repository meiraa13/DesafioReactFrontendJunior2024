import { useContext, useEffect, useState } from "react"
import "./styles.scss"
import { TodoContext } from "../../providers/TodoContext"
import { Link, useParams } from "react-router-dom"

export function Filters(){
    const { setTodos, todos } = useContext(TodoContext)
    const [leftItem, setLeftItem] = useState<number>(0)
    const { filter } = useParams()

    useEffect(()=>{
        const remainingItems = todos.filter((todo)=> todo.isDone === false)
        setLeftItem(remainingItems.length)

    },[todos])

    function clearCompletedTasks(){
        const uncompletedTasks = todos.filter((todo)=> todo.isDone === false)
        setTodos(uncompletedTasks)
    }

  


    return (
        <>
            {todos.length > 0 &&
                
                <div className="div-filters">
                    <p>{leftItem} item left!</p>
                    <div className="div-buttons">
                        <Link 
                        className={filter === "all"?"link-btn actv-border":"link-btn"} 
                        to="/all"
                        >All
                        </Link>
                        <Link 
                        className={filter === "active"?"link-btn actv-border":"link-btn"}
                        to="/active"
                        >Active
                        </Link>
                        <Link 
                        className={filter === "completed"?"link-btn actv-border":"link-btn"} 
                        to="/completed"
                        >Completed
                        </Link>
                 
                    </div>
                    <button onClick={clearCompletedTasks}>Clear Completed</button>
                </div>
            }
        </>
    )
}
            
        
        
        