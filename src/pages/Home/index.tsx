import { Filters } from "../../components/Filters";
import { Form } from "../../components/Form";
import { Todos } from "../../components/Todos";


export function Home(){

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