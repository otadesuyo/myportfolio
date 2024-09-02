'use strict';


const okbutton = document.getElementById('ok');
const dialog = document.getElementById('alert');
document.getElementById('form').onsubmit = function (event) {
  event.preventDefault();
  const answer = document.getElementById('form').number.value;
  document.getElementById('result').innerText = getAnswer(answer);
  // 関数によって表示させる
  showalert();
  // 
  okbutton.addEventListener('click', function () {
    dialog.style.visibility = 'hidden';
  });
};
// submitとbutton使い分け
// 送信する際はsubmitをかならず
// jsでクリックしたら画像を表示するのか否かは、どちらでも可。



function getAnswer(num) {
  if (num >= 1 && num <= 10) {
    return `成功!\nあなたが入力した数値は${num}です。`;
  } else {
    return `入力エラー\n1ー10の範囲で数値を入力してください。`;
  }
}


// submitを押したら、ダイアログが開くようにしたい関数
function showalert() {
  dialog.style.visibility = 'visible';
}