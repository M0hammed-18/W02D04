
////// append h1
const body = document.querySelector("body");
const TodoList = document.createElement("h1");
TodoList.innerHTML = "Todo List";
body.append(TodoList);

///////apend the list
const list = document.createElement("ul");
list.id = "Moh";
list.style.display.fontcolor="red"
body.append(list);
const toDos = ["wake up ", " eat breakfast ", " code"];


////////delete
const deleteList = (event) => {
    const target = event.target;
    console.log(target);
  const parent = target.parentElement;
    console.log(parent);
    parent.remove()

};
////////update
const updateListItem = () => {
  const valueOfbox = prompt("Enter Value");
const target = event.target;
    console.log(target);
  const parent = target.parentElement;
    console.log(parent);
    parent.innerHTML=valueOfbox
   
};
////////delete button
const bount = () => {
  const newbutton = document.querySelectorAll("li");
  newbutton.forEach((element) => {
    const newbut = document.createElement("button");
    newbut.innerHTML = "Delete";
    newbut.className="delbut"
    element.append(newbut);
  });
const dee=document.querySelectorAll(".delbut")
dee.forEach(element => {
    element.addEventListener("click", deleteList);
    
});
/////////update button
newbutton.forEach((element) => {
    const newbut = document.createElement("button");
    newbut.innerHTML = "Update";
    element.append(newbut);
    newbut.addEventListener("click", updateListItem);
  });
};


const renderList = () => {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  toDos.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.append(li);
  });
  bount();
};
renderList();
//////////////////////////////////////////////////////////////////////////
const text = document.createElement("input");
text.innerHTML = "Welcome";
body.append(text);
text.style.color="blue";

const addToList = () => {
  const newlist = document.querySelector("input");
  toDos.push(newlist.value);
  renderList();
};


const boutin = document.createElement("button");
boutin.innerHTML = "Enter";
body.append(boutin);
boutin.addEventListener("click", addToList);


/////////////////////////////////////////////////BootStrap/////////////////////////////////////////
TodoList.style.color="red"

