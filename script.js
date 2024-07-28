const btn = document.querySelector(".button");
const inputBox = document.querySelector(".form__input");
const list = document.querySelector(".toDoList");

btn.addEventListener("click", () => {
  addTask();
});
function addTask() {
  if( inputBox.value == ""){
    alert( "Please enter task" );
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
    span.classList.add('delete-btn');
    li.appendChild(span);
    storage();
    span.querySelector("i").addEventListener("click", () => {
      li.remove();
      // storage();
      });
  }
  inputBox.value = "";

 
}
list.addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("checked");
    storage();
  }
});
const storage=()=>{
  localStorage.setItem("data",list.innerHTML);
}
const show=()=>{
  list.innerHTML=localStorage.getItem("data");
  let children = list.children;
  for (let i = 0; i < children.length; i++) {
    child = children[i];
    child.querySelector(".delete-btn").addEventListener('click', (e)=>{
      e.target.parentNode.parentNode.remove();
      storage();
    });
  }
}

show();