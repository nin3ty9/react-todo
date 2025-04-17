function ShowTodo(props) {
    
    return (
        <div>{props.todo.todo}<input type="checkbox" onClick={() => props.doneTodo(props.todo.id)} /></div>
        //"() =>" för att se till att funktionen inte körs förrän vid klick (eftersom vi har "()" efter
        //funktionens namn vilket kör funktionen direkt när vi kommer dit i koden. Vi kan ju inte ta bort
        //parenteserna eftersom vi måste skicka tillbaka id:t till doneTodo.
    )
}

export default ShowTodo;