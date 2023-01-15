//service1
document.getElementById("service-one").addEventListener("click", showDetailsServiceOne);
function showDetailsServiceOne() {
//   document.getElementById("service-one-picture").classList.add("toggle");
  document.getElementById("service-one-text").classList.remove("toggle");

  document
    .getElementById("service-one")
    .removeEventListener("click", showDetailsServiceOne);
  document
    .getElementById("service-one")
    .addEventListener("click", hideDetailsServiceOne);
}

function hideDetailsServiceOne() {
  document.getElementById("service-one-picture").classList.remove("toggle");
  document.getElementById("service-one-text").classList.add("toggle");
  document
  .getElementById("service-one")
  .removeEventListener("click", hideDetailsServiceOne);
document
  .getElementById("service-one")
  .addEventListener("click", showDetailsServiceOne);
}

//service2
document.getElementById("service-two").addEventListener("click", showDetailsServiceTwo);
function showDetailsServiceTwo() {
//   document.getElementById("service-two-picture").classList.add("toggle");
  document.getElementById("service-two-text").classList.remove("toggle");

  document
    .getElementById("service-two")
    .removeEventListener("click", showDetailsServiceTwo);
  document
    .getElementById("service-two")
    .addEventListener("click", hideDetailsServiceTwo);
}

function hideDetailsServiceTwo() {
  document.getElementById("service-two-picture").classList.remove("toggle");
  document.getElementById("service-two-text").classList.add("toggle");
  document
  .getElementById("service-two")
  .removeEventListener("click", hideDetailsServiceTwo);
document
  .getElementById("service-two")
  .addEventListener("click", showDetailsServiceTwo);
}

//service3
document.getElementById("service-three").addEventListener("click", showDetailsServiceThree);
function showDetailsServiceThree() {
//   document.getElementById("service-three-picture").classList.add("toggle");
  document.getElementById("service-three-text").classList.remove("toggle");

  document
    .getElementById("service-three")
    .removeEventListener("click", showDetailsServiceThree);
  document
    .getElementById("service-three")
    .addEventListener("click", hideDetailsServiceThree);
}

function hideDetailsServiceThree() {
  document.getElementById("service-three-picture").classList.remove("toggle");
  document.getElementById("service-three-text").classList.add("toggle");
  document
  .getElementById("service-three")
  .removeEventListener("click", hideDetailsServiceThree);
document
  .getElementById("service-three")
  .addEventListener("click", showDetailsServiceThree);
}

//service4
document.getElementById("service-four").addEventListener("click", showDetailsServiceFour);
function showDetailsServiceFour() {
//   document.getElementById("service-four-picture").classList.add("toggle");
  document.getElementById("service-four-text").classList.remove("toggle");

  document
    .getElementById("service-four")
    .removeEventListener("click", showDetailsServiceFour);
  document
    .getElementById("service-four")
    .addEventListener("click", hideDetailsServiceFour);
}

function hideDetailsServiceFour() {
  document.getElementById("service-four-picture").classList.remove("toggle");
  document.getElementById("service-four-text").classList.add("toggle");
  document
  .getElementById("service-four")
  .removeEventListener("click", hideDetailsServiceFour);
document
  .getElementById("service-four")
  .addEventListener("click", showDetailsServiceFour);
}

//service5
document.getElementById("service-five").addEventListener("click", showDetailsServiceFive);
function showDetailsServiceFive() {
//   document.getElementById("service-five-picture").classList.add("toggle");
  document.getElementById("service-five-text").classList.remove("toggle");

  document
    .getElementById("service-five")
    .removeEventListener("click", showDetailsServiceFive);
  document
    .getElementById("service-five")
    .addEventListener("click", hideDetailsServiceFive);
}

function hideDetailsServiceFive() {
  document.getElementById("service-five-picture").classList.remove("toggle");
  document.getElementById("service-five-text").classList.add("toggle");
  document
  .getElementById("service-five")
  .removeEventListener("click", hideDetailsServiceFive);
document
  .getElementById("service-five")
  .addEventListener("click", showDetailsServiceFive);
}