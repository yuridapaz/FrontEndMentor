const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorEl = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue == '') {
    // mostrar error
    // mostrar classe error
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    // adicionar classe success
    setSucessFor(firstName);
  }

  if (lastNameValue == '') {
    // mostrar error
    // mostrar classe error
    setErrorFor(lastName, 'First Name cannot be empty');
  } else {
    // adicionar classe success
    setSucessFor(lastName);
  }

  if (emailValue == '') {
    // mostrar error
    // mostrar classe error
    setErrorFor(email, 'First Name cannot be empty');
  } else {
    // adicionar classe success
    setSucessFor(email);
  }

  if (passwordValue == '') {
    // mostrar error
    // mostrar classe error
    setErrorFor(password, 'First Name cannot be empty');
  } else {
    // adicionar classe success
    setSucessFor(password);
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
  }

  function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
}
