const checkBoxPrice = document.getElementById('checkboxprice');

const cardsSection = document.getElementById('cardsSection');

console.log(checkBoxPrice);

checkBoxPrice.addEventListener('change', (e) => {
  cardsSection.classList.toggle('show-monthly');
});
