var todos = [];
var input = prompt("What would you like to do?");



while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    } else (input === "new"){
        // ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todo array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Ok, see you next time!")