import { useContext, useState } from "react"
import "./styles.scss"
import {v4 as uuid  } from "uuid"
import { TodoContext } from "../../providers/TodoContext"



export function Form(){
    const [formData, setFormData] = useState("")
    const { setTodos, todos } = useContext(TodoContext)

    function handleSubmit(e:any){
        e.preventDefault()

        const newData = {
            id:uuid(),
            title:formData,
            isDone:false

        }
        setTodos([...todos, newData])
        setFormData("")
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="button">+</button>
            <input type="text" value={formData} onChange={(e)=> setFormData(e.target.value)} placeholder="What needs to be done?" />
        </form>
    )
}