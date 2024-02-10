import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"


export interface ITodo{
    id:string,
    isDone:boolean,
    title:string
}

interface IChildren{
    children:React.ReactNode
}

interface ITodoContext {
    todos:ITodo[],
    setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>,
    currentFilter:ITodo[],
    setFilteredItems:React.Dispatch<any>

}

export const TodoContext = createContext({} as ITodoContext)

export function TodoProvider({children}:IChildren){
    const [todos, setTodos] = useState<ITodo[]>([])
    const [filteredItems, setFilteredItems] = useState<string>("")

    const currentFilter = todos.filter((todo)=>{
        if(filteredItems === "all" || filteredItems === ""){
          
            return true
        }else if(filteredItems === "active"){
        
            return todo.isDone === false
        }else {
            return todo.isDone === true
        }

    })


    useEffect(()=>{
        async function getTodos() {
            try {
                const response = await api.get("")
                setTodos(response.data)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getTodos()

    },[])

   

    return (
        <TodoContext.Provider value={{setTodos, todos, currentFilter, setFilteredItems}}>
            {children}
        </TodoContext.Provider>
    )

}