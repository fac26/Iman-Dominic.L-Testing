//Create the functions here including a function for test

// Section covering the error message
const addBtn = document.getElementById("push");
addBtn.addEventListener("click", raiseError);

function raiseError() {
    if(document.querySelector('#newtask input').value.length == 0){
        window.alert("Please Enter a Task")
        return false
    }
// Extracting the input value and adding buttons
    else{
        entertask();
    }

function entertask() {
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


//Defining the 'done' function        
      var current_tasks = document.querySelectorAll(".done");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.style.textDecoration ="line-through";
            }
        }
//Defining the 'delete' function        

      var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

 
    }
}

function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }
  