// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.body.classList.add("menuToggle");
  });

  document.querySelector(".close-icon").addEventListener("click", function () {
    document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// AOS JS Start
AOS.init();
// AOS JS Start


//Cookies JS Start
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener('load', executeCodes);
// //Cookies JS End


// Form Validations Start

function validateForm() {
  let isValid = true;

  // Get form inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous error messages
  document.getElementById("name-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("message-error").innerHTML = "";

  if (name.length < 8) {
      document.getElementById("name-error").innerHTML = "Navnet skal være mindst 3 tegn langt.";
      isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      document.getElementById("name-error").innerHTML = "Navnet må kun indeholde bogstaver og mellemrum.";
      isValid = false;
  }

  // Email Validation
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
      document.getElementById("email-error").innerHTML = "Indtast en gyldig e-mail adresse.";
      isValid = false;
  }

  // Message Validation
  if (message.length < 40) {
      document.getElementById("message-error").innerHTML = "Beskeden skal være mindst 10 tegn lang.";
      isValid = false;
  }

  // Return false to prevent form submission if there are errors
  return isValid;
}


// Form Validations End
