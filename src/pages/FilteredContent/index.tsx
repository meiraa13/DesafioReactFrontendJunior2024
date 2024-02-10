import { useParams } from "react-router-dom"
import { Form } from "../../components/Form"
import { Todos } from "../../components/Todos"
import { Filters } from "../../components/Filters"
import { useContext, useEffect } from "react"
import { TodoContext } from "../../providers/TodoContext"



export function FilteredContent(){
    const { filter } = useParams()
    const { setFilteredItems } = useContext(TodoContext)

    useEffect(()=>{
        setFilteredItems(filter)

    },[filter, setFilteredItems])

    return(
        <>
        <h1>todos</h1>
        <div className="div-main">
            <Form />
            <Todos />
            <Filters />
        </div>
    </>
    )
}