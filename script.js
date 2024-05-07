function addTodo() {
    // Get the input element and its value
    const input = document.getElementById(todo-input);
    // Get value and trim white space from start/end
    const inputValue = input.value.trim();

    //check to see if the input value isnt empty
    if (inputValue !== "") {
        // Create new list item
        // Get the unordered list
        const todoList = document.getElementById("todo-list");
        // Create a list item using createElement:
        const li = document.createElement("li");
        // create a checkbox using createElemnt:
        const checkbox = document.createElement("input");
        // Set checkbox input to a checkbox:
        checkbox.type = "checkbox";
        // Create a textNode that uses the inputValue
        const textNode = document.createTextNode(inputValue);

        //Append checkbox and text to the list item:
        li.appendChild(checkbox);
        li.appendChild(textNode);
        // Append the list item to the ul of todo list:
        todoList.appendChild(li);
    } else {
        // Alert user if value is empty
        alert("Please enter a valid todo item")
    }
}