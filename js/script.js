const ul1 = document.querySelector('#first-list');
const ul2 = document.querySelector('#second-list');

let lis1 = ul1.querySelectorAll('li');
let lis2 = ul2.querySelectorAll('li');

let reset = document.querySelector('#reset');

lis1[0].addEventListener('click', function() {
    reset.style.display = 'block';
    reset.innerText = ' 1º Desligue o cabo fonte. \n';
    reset.innerText += '2º Aperte e segure os botões: power cancel por 5 segundos. \n';
    reset.innerText += '3º Re-ligue a impressora.'
})