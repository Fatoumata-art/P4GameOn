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
const closeBtn = document.querySelectorAll("[data-close-modal]");

var validalidation = document.getElementById('send_button');
var fname = document.getElementById('first-name');
var m_fname = document.getElementById('missing_fname');
var l_name = document.getElementById('last-name');
var m_l_name = document.getElementById('missing_last-name');
var email = document.getElementById('email');
var m_email = document.getElementById('missing_email');
var ddn = document.getElementById('birthdate');
var m_ddn = document.getElementById('missing_birthdate');

var nameRGEX = 

// launch modal event
validalidation.addEventListener("submit", validateForm);
modalBtn.forEach((btn) => {btn.addEventListener("click", launchModal)});
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = "none";
  resetModal();
}


// form validalidation

function validateForm(e){
  if (fname.value === ''|| fname.value == false){
    // bloquer l'envoi du form
    e.preventDefault();
    m_fname.push("Prénom manquant");
    m_fname.style.color = "red";
  //  field.style.borderColor = "red";
  }
}

