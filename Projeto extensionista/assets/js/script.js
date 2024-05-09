var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    cards.forEach(function(card) {
      card.classList.remove('is-activated');
    });
    this.classList.add('is-activated');
  });
});

const inputRange = document.getElementById("tempo");
const mesesTag = document.getElementById("meses");

  inputRange.addEventListener("input", function() {
    const valorRange = parseInt(inputRange.value, 10);
    const meses = valorRange * 1;
    mesesTag.textContent = `${meses} meses`;
  });