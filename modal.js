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
console.log("BABABABABABAAB ", BtnRadio)
let CheckCondition = document.getElementById('checkbox1');
let checkNewsLetter = document.getElementById('checkbox2');
let fnameValid = false;
let l_nameValid = false;
let emailValid = false;
let birthdateValid = false;
let nberQuantityValid = false;
let BtnRadioValid = false;
let CheckConditionValid = false;

const thankMsg = document.getElementById('thankMsg');
const thankBtn = document.getElementById('thankBtn');


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
fname.addEventListener("input", (e) => {
  const regexFname = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  console.log(fname.value);
  if(fname.value == ''){
    setError(fname, 'Veuillez renseigner le Prénom');
    e.preventDefault();
}
else if(regexFname.test(fname.value)){
  setError(fname, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
  e.preventDefault();
}else{
    setSuccess(fname);
    fnameValid = true;
}
})

// control entre du nom
l_name.addEventListener("input", (e) => {
  const regexLast = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  l_name.value = l_name.value.toUpperCase();
  if(l_name.value == ''){
    setError(l_name, 'Veuillez renseigner le Nom');
    e.preventDefault();
  }else if(regexLast.test(l_name.value)){
      setError(l_name, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
      e.preventDefault();
}else{
    setSuccess(l_name);
    l_nameValid = true;
}
})

// control entre de prénom
function validEmail(email) {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexEmail.test(String(email).toLowerCase());
};
email.addEventListener("input", (e) => {
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
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    return dateRegex.test(birthdate);
  }
  birthdate.addEventListener("input", (e) => {
    console.log(birthdate.value);
     if(!validBirthday(birthdate.value)) 
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

let city = null;

for (var i = 0; i < BtnRadio.length; i++) {
  BtnRadio[i].addEventListener('change', function() {
    console.log("ZZZZZ ", this.value)
    city = this.value;
    if(city == ""){
      setError(cityCheck, 'Veuillez choisir une ville.')
    }else{
      BtnRadioValid =true
    }
})
};



//condition d'utilisation
CheckCondition.addEventListener('change', function() {
  if (this.checked) {

    CheckConditionValid = true;
  } 
})

//Abonnement newsletter
function NewsLetter() {
  if (checkNewsLetter.checked) {
   // checkNewsLetterValid = true;
  } 
  }

  //submit form event if valide
validalidation.addEventListener("submit", function(event) {
    event.preventDefault();

   setError(cityCheck, 'Veuillez choisir une ville.')
    console.log("Je suis passe ici location = ", city )

 if(fnameValid == "" && l_nameValid == "" && emailValid == "" && birthdateValid == "" && 
   nberQuantityValid == "" &&  CheckConditionValid == "") {
    
   //alert('Formulaire pas VALIDEEEEEEEEEEEEEEEEEEEE');
   setError(fname, 'Veuillez renseigner le Prénom');
   setError(l_name, 'Veuillez renseigner le Nom');
   setError(email, 'Veuillez renseigner votre email');
   setError(birthdate, 'Veuillez entrer une date valide');
   setError(nberQuantity, 'Veuillez entrer une valeur entre 0 et 99');
   
 }else{
   //alert('Formulaire VALIDE');
   message();
}

})

function message() {
  //Masquer le formulaire d'origine
  validalidation.className = 'hiddenModal';
  //Afficher le message et le bouton de fermeture
  thankMsg.className = 'showMoale';
};

thankBtn.addEventListener('click', function event() {
  //Réactiver le formulaire d'origine
  validalidation.className = 'showMoale';
  //Masquer le message
  thankMsg.className = 'hiddenModal';
  // forcer la fermuture de la modale
  closeModal();
  //Réinitialiser le formulaire
  validalidation.reset();
  
  
});
// end : task #4 Message de remerciement

  
