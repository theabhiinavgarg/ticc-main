//button1
document.getElementById("button-one").addEventListener("click", showDetialsOne);
function showDetialsOne() {
  document.getElementById("picture-one").classList.add("toggle");
  document.getElementById("text-one").classList.remove("toggle");

  document
    .getElementById("button-one")
    .removeEventListener("click", showDetialsOne);
  document
    .getElementById("button-one")
    .addEventListener("click", hideDetialsOne);
}

function hideDetialsOne() {
  document.getElementById("picture-one").classList.remove("toggle");
  document.getElementById("text-one").classList.add("toggle");
  document
  .getElementById("button-one")
  .removeEventListener("click", hideDetialsOne);
document
  .getElementById("button-one")
  .addEventListener("click", showDetialsOne);
}


// button2
document.getElementById("button-two").addEventListener("click", showDetialsTwo);
function showDetialsTwo() {
  document.getElementById("picture-two").classList.add("toggle");
  document.getElementById("text-two").classList.remove("toggle");

  document
    .getElementById("button-two")
    .removeEventListener("click", showDetialsTwo);
  document
    .getElementById("button-two")
    .addEventListener("click", hideDetialsTwo);
}

function hideDetialsTwo() {
  document.getElementById("picture-two").classList.remove("toggle");
  document.getElementById("text-two").classList.add("toggle");
  document
  .getElementById("button-two")
  .removeEventListener("click", hideDetialsTwo);
document
  .getElementById("button-two")
  .addEventListener("click", showDetialsTwo);
}

//button3
document.getElementById("button-three").addEventListener("click", showDetialsthree);
function showDetialsthree() {
  document.getElementById("picture-three").classList.add("toggle");
  document.getElementById("text-three").classList.remove("toggle");

  document
    .getElementById("button-three")
    .removeEventListener("click", showDetialsthree);
  document
    .getElementById("button-three")
    .addEventListener("click", hideDetialsthree);
}

function hideDetialsthree() {
  document.getElementById("picture-three").classList.remove("toggle");
  document.getElementById("text-three").classList.add("toggle");
  document
  .getElementById("button-three")
  .removeEventListener("click", hideDetialsthree);
document
  .getElementById("button-three")
  .addEventListener("click", showDetialsthree);
}