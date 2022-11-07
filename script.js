//Create the functions here including a function for test

// Section covering the error message
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
// Extracting the input value and adding buttons
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task" id="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>               
                <button class="delete">
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
  