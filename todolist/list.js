var todos = [];
var input = prompt("What would you like to do?");

// = = = = = = = = = =  
// LOGIC
// = = = = = = = = = =  
while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
      
    } else (input === "new"){
        addTodos();
    } else if (input ==="delete"){
        deleteTodos();
}
console.log("Ok, see you next time!");

// = = = = = = = = = =  
// FUNCTIONS
// = = = = = = = = = =  

function listTodos(){
    console.log("***********");
    todos.forEach(function(todo, i){
            console.log(i + ":" + todos);  
        });
    console.log("***********");

}

function addTodos(){
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todo array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodos(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice() -- Remove at index enter/ only 1 item
    todos.splice(index, 1); 
    console.log("Deleted Todo");
    //ask again for new input
    input = prompt("What would you like to do?");
}