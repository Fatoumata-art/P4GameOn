function editNav() {
  var x = document.getElementById("myHeader");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg2 = document.getElementById("modalbg2")
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtn2 = document.querySelectorAll(".modal-btn2");
const formData = document.querySelectorAll(".formData");

var validalidation = document.getElementById('send_button');
var fname = document.getElementById('first-name');
var m_fname = document.getElementById('missing_fname');

// launch modal event
validalidation.addEventListener("submit", validateForm);
modalBtn.forEach((btn) => {btn.addEventListener("click", launchModal)});
// modalBtn2.forEach((btn) => btn.addEventListener("click", launchModal2));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// function launchModal2() {
//   modalbg2.style.display = "block";
// }

// form validalidation

function validateForm(e){
  console.log('JJJJJJJJJJJJJJJJJJJJJJJJJJJ')
  e.preventDefault();
  
  if (fname.value === ''|| fname.value == false){
    // bloquer l'envoi du form
    e.preventDefault();
    m_fname.push("Prénom manquant");
    m_fname.style.color = "red";
  //  field.style.borderColor = "red";
  }
}

