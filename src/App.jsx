import { useState } from 'react'
import './App.css'
import ShowTodo from './ShowTodo'
import AddTodoForm from './AddTodoForm'

function App() {
//Skapar ett state att jobba med, det består av en lista (todos) och en callback-funktion
// (setTodos) för att skriva över listan med en ny. Fyller listan med lite mockdata:
  const [todos, setTodos] = useState([
    {id: 1, todo: "Loopa listan"},
    {id: 2, todo: "Lägg till nytt i listan"},
    {id: 3, todo: "Ta bort från listan"}
  ])
//Funktion för att uppdatera/skriva över listan. Den tar emot en ny todo, skapar en
// ny lista med det som fanns i ursprungliga listan (görs med "...todos") och lägger
// till en ny todo (objektet inom måsvingar):
  const updateTodos = (getTodo) => {
    console.log("Callback updateTodos", getTodo);
    setTodos([...todos, {id: todos.length + 1, todo: getTodo}]);
  }
//Funktion för att ta bort todo. Tar emot todo:ts id och filtrerar ut alla todo med matchande id från listan.
// Detta: "(todo => todo.id !== getId)" läses som: "för varje todo", jämför dess id med getId, returnera
// listan med alla som INTE matchar.
  const doneTodo = (getId) => {
    setTimeout(() =>{
      setTodos(todos.filter(todo => todo.id !== getId));
    }, 500);
    
  }

  return (
    <div>
      <h1>To do:</h1>
      {/* Skickar props (metoden för att lägga till todo) till formuläret i AddTodoForm: */}
      <AddTodoForm updateTodos={updateTodos} /> 
      {/* Varje todo skickas till funktionen för att visa todos. Funktionen för att ta
      bort skickas med så att den kan bindas till varje todo vid rendering: */}
      {todos.map(todo => (
        <ShowTodo key={todo.id} todo={todo} doneTodo={doneTodo} />
      ))}
    </div>
  )
}

export default App;
