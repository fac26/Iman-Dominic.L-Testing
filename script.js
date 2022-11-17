// Section covering the error message
const addBtn = document.getElementById("push");
addBtn.addEventListener("click", raiseError);

function raiseError() {
    if(document.querySelector('#newtask input').value.length == 0){
        window.alert("Please Enter a Task");
    }
// Extracting the input value and adding buttons
    else{
        entertask();
    }


function entertask() { //question to ask the floor - why did arrow function cause errors?
    document.querySelector('#tasks').innerHTML += `
            <div class="task" id="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                    </span>               
                <button class="delete" id="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <button class="done" id="done">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    let newtaskInput = document.querySelector('#newtask input').value;
    console.log(newtaskInput); //to show what that item exists and was affected
    
    let mysavedtasks = [];
    mysavedtasks.push(newtaskInput);
    console.log(mysavedtasks);
    localStorage.setItem("mystuff", JSON.stringify(mysavedtasks));
    //why is not adding the rest? I know the array is always reset so how
    //localStorage.getItem("mystuff", JSON.parse(mysavedtasks));


//Defining the 'done' function        
      var current_tasks = document.querySelectorAll(".done");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.style.textDecoration ="line-through";
            }
        }
        // const listitem = document.getElementById('task');
        // if (listitem.style.textDecoration == "line-through") {


        
//Defining the 'delete' function        

      var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    }
}

const todoList = document.querySelector("#tasks");
const filterOption = document.querySelector(".filter_todo");

//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for (let i = 1; i < todos.length; i++) {
      switch (e.target.value) {
        case "all":
          todos[i].style.display = "flex";
          break;
        case "completed":
          if (todos[i].classList.contains("completedItem")) {
            todos[i].style.display = "flex";
          } else {
            todos[i].style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todos[i].classList.contains("completedItem")) {
            todos[i].style.display = "flex";
          } else {
            todos[i].style.display = "none";
          }
          break;
      }
    }
  }
function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }
  