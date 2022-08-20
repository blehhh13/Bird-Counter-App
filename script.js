let saveEl = document.getElementById("save-el"); // Gets "save-el" id from html and save it in saveEL variable
let countEL = document.getElementById("count-el"); // Gets "count-el" id from html and save it in countEL variable
let count = 0; //Initializes count to 0

// Function which increases the count when clicked
function increment() {
  count += 1;
  countEL.textContent = count; // Displays the count in the html > #count-el
}

// Function which saves the count when clicked and initialzes back to 0
function save() {
  let countStr = count + " - "; // Creates a variable to store the count
  saveEl.textContent += " " + countStr; // Displays the count in #save-el
  count = 0;
  countEL.innerText = count; // Initialzes the count back to 0 in #count-el
}
