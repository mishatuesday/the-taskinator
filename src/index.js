// grab stuff from the DOM
const theList = document.querySelector("#tasks");
const submitForm = document.querySelector("#create-task-form");
const theHeadline = document.getElementById("headline");
theHeadline.onclick = () => changeName();
// add listener for submit
submitForm.addEventListener("submit", dontSubmit, false);
// setup counter for task identifiers 
// let taskIdNumber = 0; // i don't think I ended up needing unique ids for the tasks

// function to change name in headline
function changeName() {
  const yourName = prompt("Enter Your Name")
  theHeadline.textContent = `You Have Shit To Do, ${yourName}`
}

//what to do when submit happens
function dontSubmit(event) {
  // don't allow form to actually submit
  event.preventDefault();

  // this can all go into another function
  // create child element with delete button
  const newItem = document.createElement("li");
  const newButton = document.createElement("button")
  newButton.textContent = "X";
  // identify textbox
  const theBox = document.querySelector("#new-task-description");
  // put text from box in new list item, add task id & clear the textbox
  newItem.textContent = `${theBox.value} `;
  // newItem.id = `task${++taskIdNumber}`;
  newItem.onclick = function () { this.style.textDecoration = "line-through" }; //the old way IS ACTUALLY THE NEW WAY EVERYTHING COMES BACK AROUND
  // newItem.addEventListener("click", () => newItem.remove()); //the long way
  newItem.onmouseover = function () { this.style.color = "gray" }; //the old/new way
  // newItem.addEventListener("mouseover", () => newItem.style.color = "red"); //the long way
  newItem.onmouseout = function () { this.style.color = "black" };
  // newItem.addEventListener("mouseout", () => newItem.style.color = "black"); 
  theBox.value = null;
  // place element in the list
  theList.appendChild(newItem);
  newItem.appendChild(newButton);
  newButton.onclick = () => newButton.parentElement.remove(); // works once, then form disappears

  // add listeners for mouseover and click?
  // newItem.addEventListener("mouseover", alert("hey")); // this doesn't work. it does the alert as soon as you submit the item!
}
