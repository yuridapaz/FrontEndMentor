const form = document.querySelector('.form');
const email = document.querySelector('.email');
const small = document.querySelector('.small');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var emailValue = email.value.trim();

  if (emailValue == '') {
    small.classList.add('error');
    email.classList.add('error');
    console.log('adicionando .error');
  } else {
    validateEmail(emailValue);
    small.classList.add('success');
    email.classList.add('success');
    console.log('object');
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
