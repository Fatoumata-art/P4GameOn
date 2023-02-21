function editNav() {
  let x = document.getElementById("myHeader");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const validalidation = document.forms["reserve"];
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
let msgError = document.getElementById('msgError')
let fname = document.getElementById("fname");
let l_name = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let nberQuantity = document.getElementById("quantity");
let BtnRadio = document.getElementsByName('location');
let CheckCondition = document.getElementById('checkbox1');
let checkNewsLetter = document.getElementById('checkbox2');
let fnameValid = false;
let l_nameValid = false;
let emailValid = false;
let birthdateValid = false;
let nberQuantityValid = false;
let BtnRadioValid = false;
let CheckConditionValid = false;


// launch modal event
modalBtn.forEach((btn) => {btn.addEventListener("click", launchModal)});
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Task #1 - Evénement 'click' sur bouton fermeture
closeBtn.forEach((btn) => {btn.addEventListener("click", closeModal)});
//Task #1 - Evénement 'click' sur bouton fermeture
function closeModal(){
  modalbg.style.display = "none";
 
}

// function display msg error
const setError = (element, message) => {
  const formData =  element.parentElement
  const errorDisplay = formData.querySelector('.msgError');
  errorDisplay.innerHTML  = message;
  formData.classList.add("error")
  formData.classList.remove("success")
}
// function input success
const setSuccess = element => {
  const formData =  element.parentElement
  const errorDisplay = formData.querySelector('.msgError');
  errorDisplay.innerHTML  = '';
  formData.classList.add("success")
  formData.classList.remove("error")
}

// control entre de prénom
fname.addEventListener("change", (e) => {
  console.log(fname.value);
  if(fname.value == ''){
    setError(fname, 'Veuillez renseigner le Prénom');
    e.preventDefault();
}
else if(fname.value.length <= 2){
  setError(fname, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
  e.preventDefault();
}else{
    setSuccess(fname);
    fnameValid = true;
}
})

// control entre du nom
l_name.addEventListener("change", (e) => {
  console.log(l_name.value);
  if(l_name.value == ''){
    setError(l_name, 'Veuillez renseigner le Nom');
    e.preventDefault();
}else{
    setSuccess(l_name);
    l_nameValid = true;
}
})

// control entre de prénom
function validEmail(email) {
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexEmail.test(String(email).toLowerCase());
};
email.addEventListener("change", (e) => {
  console.log(email.value);
  if(email.value == ''){
    setError(email, 'Veuillez renseigner votre email');
    e.preventDefault();
  }
 else if (!validEmail(email.value) ){
    setError(email, 'Veuillez entrer une adresse e-mail valide.')
    e.preventDefault();
  }else{
      setSuccess(email);
      emailValid = true;
  }
  })

  // control entre de date de naissance
  function validBirthday(birthdate) {
    let dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    return dateRegex.test(birthdate);
  }
  birthdate.addEventListener("change", (e) => {
    console.log(birthdate.value);
     if(!validBirthday(birthdate.value)) // (!dateRegex.test(birthdate)) 
    {
      setError(birthdate, 'Veuillez entrer une date valide');
      e.preventDefault;
    }else{
      setSuccess(birthdate);
      birthdateValid = true;
    }
    })

    // control entre du nombre de participation
    nberQuantity.addEventListener("change", (e) => {
      console.log(nberQuantity.value);
  if(nberQuantity.value == ''){
    setError(nberQuantity, 'Veuillez entrer une valeur entre 0 et 99');
    e.preventDefault();
}else{
    setSuccess(nberQuantity);
    nberQuantityValid = true;
}
})

// control ville coché
// let j = 0;
// for (var i = 0; i < BtnRadio.length; i++) {
//   BtnRadio[i].addEventListener('change', function() {


//   if (BtnRadio[i].checked){
//     j++
//   }
//   if(j > 0){
//    BtnRadioValid = true;
// }
// else{
//   setError(BtnRadio, 'Veuillez sélectionner une ville.')
// } 
// })
// };



//condition d'utilisation
function Conditions() {
  if (CheckCondition.checked = false) {
    setError(CheckCondition, 'Veuillez accepter les conditions d\'utilisation.');
   
  }else{

    CheckConditionValid = true;
  } 
}

//Abonnement newsletter
function NewsLetter() {
  if (checkNewsLetter.checked) {
   // checkNewsLetterValid = true;
  } 
  }

  //submit form event if valide
validalidation.addEventListener("submit", function(event) {

    event.preventDefault();
 
if(fnameValid === true && l_nameValid === true && emailValid === true && birthdateValid === true && 
  nberQuantityValid === true &&  CheckConditionValid === true) {
  alert('Formulaire VALIDE');
}else{
  alert('Formulaire pas VALIDE');
}

})

  
