import React from "react";
import "./globalStyles.scss"
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { Filters } from "./components/Filters";

export default function App() {
  return (
    <section>
      <h1>todos</h1>
      <div className="div-main">
        <Form />
        <Todos />
        <Filters />
      </div>


    </section>
  );
}
