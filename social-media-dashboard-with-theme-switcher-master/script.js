const html = document.querySelector('html');

const darkBtn = document.getElementById('dark-checkbox');

darkBtn.addEventListener('change', function () {
  html.classList.toggle('dark-mode');
});
