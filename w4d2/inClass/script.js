console.log("I have access to the max number", MAX_NUMBER_OF_ITEMS_IN_LIST);

var myHistory = window.history;

const myList = document.getElementById("my-list");
const myNewItem = document.createElement("li");
const node = document.createTextNode("14");

myNewItem.appendChild(node);
myNewItem.classList.add("number");
myList.appendChild(myNewItem);
