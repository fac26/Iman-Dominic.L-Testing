test("Should add taskinput to list", () => { //works
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

//List contains new item - works
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

test('Inputting an empty string gives an error message',()=>{  
  const taskInput = document.querySelector("input[name='task']");
  taskInput.value = "";
  const button = document.getElementById('push');
  button.click();
  if(document.querySelector('#newtask input').value.length == 0){
    console.info('Pass');
  } else {
    console.error('Fail');
  }
});



test('done button adds a line through and marks the task as complete',()=>{ //works 
  const button = document.getElementById('push');
  button.click();
  const button2 = document.getElementById('done');
  button2.click();
  const listitem = document.getElementById('task');
  if (listitem.style.textDecoration == "line-through") {
    console.info(`Pass`);
  } else {
    console.error(`Fail`);
  }
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