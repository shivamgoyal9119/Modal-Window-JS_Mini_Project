'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const closeModal = function () {
  // we add hidden class
  // remember we not use (.) before hidden
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
//   console.log('Button Clicked');
  // we remove hidden class
  // remember we not use (.) before hidden
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// "Esc" Keypress event
// keypress, keyup, keydown
document.addEventListener('keydown', function (e) {
    // console.log(e);
    // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});







