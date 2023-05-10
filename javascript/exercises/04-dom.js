// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
let copy = document.querySelector("#copy");
let input = document.querySelector("#userInput1");
let output = document.querySelector("#output");

copy.addEventListener("click", copyHandler);
function copyHandler(event) {
  output.textContent = input.value;
}

// OR

// copy.onclick = (event) => {
//   let text = input.value;
//   output.textContent = text;
// };

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input2 = document.querySelector("#userInput2");

let element = document.createElement("div");
element.setAttribute("class", "output");
document.querySelector("#inputEventExample").append(element);

input2.addEventListener("input", inputHandler);

function inputHandler() {
  element.textContent = input2.value;
}
