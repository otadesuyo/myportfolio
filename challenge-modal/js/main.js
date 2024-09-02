'use strict';

const modal = document.querySelector(".modal");
const showbutton = document.getElementById('showbutton');
const closebutton = document.querySelector(".closebutton");

showbutton.onclick = function () {
  modal.style.visibility = 'visible';
  closemodal();
};

// modalをクリックしたときに閉じる
closebutton.onclick = function closemodal() {
  modal.style.visibility = 'hidden';
}