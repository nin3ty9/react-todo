import { useState } from 'react'

function AddTodoForm(props) {

    const [inputNewTodo, setInputNewTodo] = useState("");

    const handleChange = (e) => {
        console.log("Ändring i formulär");
        setInputNewTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Stoppa omladdning av sidan
        console.log("Spara formulär");
        props.updateTodos(inputNewTodo);
        setInputNewTodo("");
    } 

    return (
        <form onSubmit={handleSubmit}>
            {inputNewTodo} <br/>
            <input type="text" value={inputNewTodo} onChange={handleChange} />
            <button>Spara</button>
        </form>
    )
}

export default AddTodoForm;