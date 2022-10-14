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
const errorMessage = document.createElement("small");
const reserve = document.getElementById("reserve");

reserve.addEventListener("submit", (e) => {
  e.preventDefault();
});

//error message function
function errMssg(sentance, formDataNumber) {
  errorMessage.innerHTML = "</br>" + sentance;
  errorMessage.style.color = "red";
  formData[formDataNumber].appendChild(errorMessage);
}

// input verification ----------------------------------------------------------

//fonction pour verifier le prenom
function firstVerification() {
  if (firstName.value.length < 2) {
    errMssg("Veuillez entrer 2 caractères ou plus pour le champ du nom.", 0);
  } else {
    return true;
  }
}

//fonction pour verifier le nom de famille
function lastVerification() {
  if (lastName.value.length < 2) {
    errMssg("Veuillez entrer 2 caractères ou plus pour le champ du nom.", 1);
  } else {
    return true;
  }
}

//fonction pour verifier le mail.
function emailVerification() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  } else {
    errMssg("Veuillez entrer un mail valide.", 2);
  }
}

//fonction pour verifier la date de naissance
function dateVerification() {
  if (date.value == "") {
    errMssg("Veuillez entrer votre date de naissance.", 3);
  } else {
    return true;
  }
}

//fonction pour verifier le nombre d'evenement
function quantityVerification() {
  if (/^[0-9]$|^[1-9][0-9]$|^(99)$/.test(quantity.value)) {
    return true;
  } else {
    errMssg("Veuillez entrer un nombre.", 4);
  }
}

//fonction pour verifier la ville
function radioVerification() {
  for (let i in radio) {
    if (!radio[i].checked) {
      errMssg("Vous devez choisir une option.", 5);
    } else {
      return true;
    }
  }
}

//fonction pour verifier les conditions d'utilisation
function conditionVerification() {
  if (!conditionBox.checked) {
    errMssg(
      "Vous devez vérifier que vous acceptez les termes et conditions.",
      6
    );
  } else {
    return true;
  }
}

//fonction pour verification des champs et affichier l'ecran de finalisation
function displayMessage(event) {
  if (
    firstVerification() &&
    lastVerification() &&
    emailVerification() &&
    dateVerification() &&
    quantityVerification() &&
    radioVerification() &&
    conditionVerification() === true
  ) {
    document.getElementById("box-hidder").style.display = "none";
    document.getElementById("form-success-message-box").style.display = "block";
    return true;
  }
}

// Fonction pour valider le formulaire
function validate(event) {
  if (displayMessage() == true) {
    event.currentTarget.submit();
  }
}
