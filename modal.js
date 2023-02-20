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
const modalbg2 = document.getElementById("modalbg2")
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
let valid = false;


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
  if(fname.value == ''){
    setError(fname, 'Veuillez renseigner le Prénom');
    e.preventDefault();
}
else if(fname.value.length <=2){
  setError(fname, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
  e.preventDefault();
}else{
    setSuccess(fname);
    valid = true;
}
})

// control entre du nom
l_name.addEventListener("change", (e) => {
  if(l_name.value == ''){
    setError(l_name, 'Veuillez renseigner le Nom');
    e.preventDefault();
}else{
    setSuccess(l_name);
    valid = true;
}
})

// control entre de prénom
function validEmail(email) {
  let regexName = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexName.test(email);
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
      valid = true;
  }
  })

  // control entre de date de naissance
  birthdate.addEventListener("change", (e) => {
    if (!birthdate.validity.valid) {
      setError(birthdate, 'Veuillez entrer une date valide');
    }else{
      setSuccess(birthdate);
      valid = true;
    }
    })

    // control entre du nombre de participation
    nberQuantity.addEventListener("change", (e) => {
  if(nberQuantity.value == ''){
    setError(nberQuantity, 'Veuillez entrer une valeur entre 0 et 99');
    e.preventDefault();
}else{
    setSuccess(nberQuantity);
    valid = true;
}
})


//function form validation
function validateForm(){
 
  if(l_nameValue === ''){
    setError(l_name, 'Veuillez renseigner le Prénom');
  }else{
    setSuccess(l_name);
  };
  

  if(birthdateValue === ''){
    setError(birthdate, 'Veillez renseigner le ddn');
  }else{
    setSuccess(birthdate);
  }

  if(nberQuantityValue === ''){
    setError(nberQuantity, 'Veuillez entrer une valeur entre 0 et 99');
  }else{
    setSuccess(nberQuantity);
  }
}


  

