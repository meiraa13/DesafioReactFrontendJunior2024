import { useContext, useEffect, useState } from "react"
import "./styles.scss"
import { TodoContext } from "../../providers/TodoContext"

export function Filters(){
    const { setTodos, todos } = useContext(TodoContext)
    const [leftItem, setLeftItem] = useState<number>(0)

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
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <button onClick={clearCompletedTasks}>Clear Completed</button>
                </div>
            }
        </>
    )
}
            
        
        
        