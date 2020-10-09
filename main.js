const button = document.querySelector('.submit');
const toDoList = document.querySelector('.to-do-list');
const toDoNum = document.querySelector('.todo-nr span');

const items = toDoList.children;


button.addEventListener('click', addItem);

function addItem() {
    const item = document.createElement('li');
    item.classList.add('item');
    toDoList.appendChild(item);
    item.innerHTML = `item ${items.length}`;
    toDoNum.innerText = items.length;
};

