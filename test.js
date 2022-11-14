test("Should add taskinput to list", () => { //works
  // get task input
  const taskInput = document.getElementById("mytask");

  // enter test data into inputs
  taskInput.value = "drink";

  // submit the form
  const submitButton = document.querySelector("button[id='push']");
  submitButton.click();

  // verify that the page contains the expected result
  let result = document.querySelector("#tasks");
  
  equal(result.textContent.slice(51, 56), taskInput.value);
  
  // reset test data would allow for error message to work for empty input
  taskInput.value = "";
});

//List contains new item - works
test('when add button is clicked, display task in the div id=tasks',()=>{
  const button = document.getElementById('push');
  button.click();
  const mytask = document.getElementById('tasks');
  if (document.body.contains(mytask)) {
    console.info(`Pass: Clicking add button displays task in the to do list`);
  } else {
    console.error(`Fail: Clicking add button does not display task in the to do list`);
  }
});


test('Inputting an empty string gives an error message',()=>{  //works
  window.alert = function() {}; 
  const taskInput = document.getElementById("mytask").value;
  const button = document.getElementById('push');
  button.click();
  const compare = "";
  equal(taskInput, compare, "Error message raised when empty string detected");
 }); 
  

test('The add button does not add an empty string to list',()=>{ //works
  window.alert = function() {}; 
  const taskInput2 = document.querySelector("input[name='task']");
  taskInput2.value = "";
  const button = document.getElementById('push');
  button.click();
  let result = document.querySelector("#tasks");
  if (taskInput2.value == result.textContent.slice(51,56)) {
    console.error(`Fail: List contains empty input`);
  } else {
    console.info(`Pass: List does not contain empty input`);
  }
});

test("Clicking delete will remove a task from the list", () => {
  const trashBtns = document.querySelectorAll(".delete");
  trashBtns[0].click();
  equal(trashBtns[0].offsetParent, null, "Task deleted from the list");
});

test('The done button adds a line through and marks the task as complete',()=>{ //works 
  // get task input
  const taskInput = document.getElementById("mytask");

  // enter test data into inputs
  taskInput.value = "drink";

  // submit the form
  const submitButton = document.querySelector("button[id='push']");
  submitButton.click();
  const button2 = document.getElementById('done');
  button2.click();
  const listitem = document.getElementById('task');
  if (listitem.style.textDecoration == "line-through") {
    console.info(`Pass: Task marked as complete.`);
  } else {
    console.error(`Fail: Task not marked as complete.`);
  }
});

test("Leaves to do list empty", () => {
  const taskInput = document.getElementById("mytask");
  taskInput.value = "";
  const trashBtns = document.querySelectorAll(".delete");
  trashBtns[0].click();
  equal(trashBtns[0].offsetParent, null, "The list is empty");
});


























// test("Deleting an entry removes it from the list", () => {
//   const button = document.getElementById('push');
//   button.click();
//   const delbutton = document.getElementById("delete");
//   delbutton.click();
//   if (current_tasks.length - 1) {}
//   var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//               if(this.parentNode.remove()) {
//                 console.info(`Pass`);
//             }
//           }
//         }});