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
    setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>

}

export const TodoContext = createContext({} as ITodoContext)

export function TodoProvider({children}:IChildren){
    const [todos, setTodos] = useState<ITodo[]>([])


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
        <TodoContext.Provider value={{setTodos, todos}}>
            {children}
        </TodoContext.Provider>
    )

}