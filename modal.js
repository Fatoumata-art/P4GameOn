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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtn2.forEach((btn) => btn.addEventListener("change", launchModal2));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function launchModal2() {
  modalbg2.style.display = "block";
}


// emptyField

function emptyField(x){
  var field = document.getElementById(x);
  if( field.value !== ""){
    field.style.borderColor = "red";
   
  }
}

// form validalidation

function validateForm(){
  let x = document.forms["reserve"]["first-name"].value;
  if (x == ""){
    // alert("Merci de renseigner votre Prénom");
    document.getElementsByClassName("text-control");
    return false;
  }
}

