let todoList = [
    {
        item: "ColdDrink",
        duedate: "12/4/2134",

    },
    {
        item: "rose",
        duedate: "12/09/2009",
    },
];
displayItems();


function addTodo () {
    let inputElement = document.querySelector('.todo-input');
    let dateElement = document.querySelector('.todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, duedate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
     displayItems();
}


function displayItems() {
    let cantainerElement = document.querySelector('.todo-cantainer');
    let newHtml = '';
    for(let i =0; i<todoList.length; i++){
        let {item, duedate} = todoList[i];
        newHtml+=`
        <div>
        <span>${item}</span>
        <span>${duedate}</span>
        <button class= 'btn-delete' onclick = "todoList.splice(${i}, 1);
        displayItems();
        ">Delete</button>
        </div>`;
        cantainerElement.innerHTML = newHtml;

    }
}