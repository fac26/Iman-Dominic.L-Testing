// Section covering the error message
const addBtn = document.getElementById("push");
addBtn.addEventListener("click", raiseError);

function raiseError() {
    if(document.querySelector('#newtask input').value.length == 0){
        window.alert("Please Enter a Task");
    }
// Extracting the input value and addisng buttons
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

function showtask() {
    document.querySelector('#tasks').innerHTML += `
    <div class="task" id="task">
        <span id="taskname">
            You needed to: ${document.querySelector('#newtask input').value}
            </span>               
        <button class="delete" id="delete">
            <i class="far fa-trash-alt"></i>
        </button>
        <button class="done" id="done">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`;
}

function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd(name);
  }
  