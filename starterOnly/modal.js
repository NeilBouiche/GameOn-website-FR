function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalCross.addEventListener("click", closeModal);

//Close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// Form Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radio = document.querySelectorAll("input[type=radio]");
const conditionBox = document.getElementById("checkbox1");

// input verification ----------------------------------------------------------

//name input
function firstVerification() {
  if (firstName.value.length < 2) {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML =
      "</br> Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorMessage.style.color = "red";
    formData[0].appendChild(errorMessage);
  } else {
    return true;
  }
}

function lastVerification() {
  if (lastName.value.length < 2) {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML =
      "</br> Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorMessage.style.color = "red";
    formData[1].appendChild(errorMessage);
  } else {
    return true;
  }
}

function emailVerification() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  } else {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML = "Veuillez entrer un email valide.";
    errorMessage.style.color = "red";
    formData[2].appendChild(errorMessage);
  }
}

function dateVerification() {
  if (date.value == "") {
    console.log(date.value);
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML = "</br> Vous devez entrer votre date de naissance.";
    errorMessage.style.color = "red";
    formData[3].appendChild(errorMessage);
  } else {
    return true;
  }
}

function quantityVerification() {
  if (/^[0-9]$|^[1-9][0-9]$|^(99)$/.test(quantity.value)) {
    return true;
  } else {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML = "</br> Veuillez entrer un nombre.";
    errorMessage.style.color = "red";
    formData[4].appendChild(errorMessage);
  }
}

function radioVerification() {
  if (
    !radio[0].checked &&
    !radio[1].checked &&
    !radio[2].checked &&
    !radio[3].checked &&
    !radio[4].checked &&
    !radio[5].checked
  ) {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML = "</br>Vous devez choisir une option.";
    errorMessage.style.color = "red";
    formData[5].appendChild(errorMessage);
  } else {
    return true;
  }
}

function conditionVerification() {
  if (!conditionBox.checked) {
    const errorMessage = document.createElement("small");
    errorMessage.innerHTML =
      "</br> Vous devez vérifier que vous acceptez les termes et conditions.";
    errorMessage.style.color = "red";
    formData[6].appendChild(errorMessage);
  } else {
    return true;
  }
}

function validate(event) {
  if (
    firstVerification() &&
    lastVerification() &&
    emailVerification() &&
    dateVerification() &&
    quantityVerification() &&
    radioVerification() &&
    conditionVerification() === true
  ) {
    event.currentTarget.submit();
  } else {
    event.preventDefault();
  }
}
