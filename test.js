test("Should add taskinput to list", () => { //why is this failing?
  // get task input
  const taskInput = document.querySelector("input[name='task']");

  // enter test data into inputs
  taskInput.value = "drink";

  // submit the form
  const submitButton = document.querySelector("button[id='push']");
  submitButton.click();

  // verify that the page contains the expected result
  let result = document.querySelector("#tasks");
  
  equal(result.textContent.slice(51, 56), taskInput.value);

 
});

//List contains new item
test('when add button is clicked, display task in the div id=tasks',()=>{
  const button = document.getElementById('push');
  button.click();
  const mytask = document.getElementById('tasks');
  if (document.body.contains(mytask)) {
    console.info(`Pass`);
  } else {
    
    console.error(`Fail`);
  }
});

test("if input field is empty, display error", () => {
  document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
        console.info(`Pass`)
    }
      //it goes to the bottom?
      // ask about catch and try and assert
  }});


// don't know why this one isn't working-goes to the bottom?
test("Checking an entry marks it as complete", () => {
  var current_tasks = document.querySelectorAll(".done");
  for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
          this.parentNode.style.textDecoration ="line-through";
          console.info(`Pass`);
      }
  }});

test("Checking an entry marks it as complete", () => {
  var listitem = document.getElementById(taskname);
  if (listitem.style.textDecoration == "line-through") {
    console.info(`Pass`);
  }
  else {
    console.error(`Error`);
  }
  }); //Uncaught TypeError: Cannot read properties of null (reading 'style')

test("Deleting an entry removes it from the list", () => {
  var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                console.info(`Pass`);
            }
        }

})






























//Add tasks to a list so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
    
  });

//Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
    // test goes here
  });

//Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
  // test goes here
});