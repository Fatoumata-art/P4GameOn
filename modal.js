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

const validalidation = document.forms["reserve"];
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
var msgError = document.getElementById('msgError')
var fname = document.getElementById("fname");
var l_name = document.getElementById("last");
var email = document.getElementById("email");
var birthdate = document.getElementById("birthdate");

// Ticket #2 Finaliser le formulaire //
// Les champs autres que radio et checkbox sont contrôlés par HTML5
// Déclaration des éleménts DOM utilisés
const BtnRadio = document.getElementsByName('location');
const CheckCondition = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => {btn.addEventListener("click", launchModal)});

//Ticket #1 - Evénement 'click' sur bouton fermeture
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
validalidation.addEventListener("submit", e => {
  e.preventDefault();

  validateForm();
});
  

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Ticket #1 - Evénement 'click' sur bouton fermeture
function closeModal(){
  modalbg.style.display = "none";
 
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.msgError');

  errorDisplay.innerHTML  = message;
  errorDisplay.classList.add("text-danger")
  errorDisplay.classList.remove("text-success")
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.msgError');

  errorDisplay.innerHTML  = '';
  errorDisplay.classList.add("text-danger")
  errorDisplay.classList.remove("text-success")

  
}

function validateForm(){
  const fnameValue = fname.value.trim();
  const l_nameValue = l_name.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();

  if(fnameValue === ''){
    setError(fname, 'Veiller renseigner le Prénom');
  }else{
    setSuccess(fname);
  }

  if(l_nameValue === ''){
    setError(l_name, 'Veiller renseigner le nom');
}
else if(!validerEmail(l_nameValue)){
  setError(l_name, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
}else{
    setSuccess(l_name);
  }

  if(emailValue === ''){
    setError(email, 'Veiller renseigner le email');
  }else if(!validerEmail(emailValue)){
    setError(email, 'Veuillez entrer une adresse e-mail valide')
  }
  else{
    setSuccess(email);
  }

  if(birthdateValue === ''){
    setError(birthdate, 'Veiller renseigner le ddn');
  }else{
    setSuccess(birthdate);
  }
}

// Ticket #3 Validation des champs <input> via l'API de validation JS pour utiliser les contraintes HTML
// par ajout d'un attribut (utilisation du CSS fourni)
// Sauf pour les champs Prénom, Nom et E-mail pas suffisemment fiables (utilisation de REGEX)

function validerName(l_name) {
  let regexName = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  return regexName.test(l_name);
};

// Validation adresse mail par RegEx, plus fiable que le contrôle HTML
function validerEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// function ControleBithdate() {
//   if (birthdate.validity.valid) {
//     setError(birthdate, 'Veuillez entrer une date valide');
    
//   };
// };
