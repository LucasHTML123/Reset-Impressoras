const ul = document.querySelector('#first-list');

let lis1 = ul.querySelectorAll('li');

let reset = document.querySelector('#reset');

lis1[0].addEventListener('click', function() {
    reset.style.display = 'block';
    reset.innerText = ' 1º Desligue a impressora.\n';
    reset.innerText += '2º Aperte Cancelar + Wireless e ligue a impressora. \n';
    reset.innerText += '3º Após a luz laranja piscar solte os botões.';
})
lis1[1].addEventListener('click', function() {
    reset.style.display = 'block';
    reset.innerText = '1º Desconecte o USB. \n';
    reset.innerText += '2º Pressione Cancelar + Cópia colorido. \n';
    reset.innerText += '3º Retire o cabo fonte ainda pressionando os botões. \n';
    reset.innerText += '4º Aguarde 30 segundos e reconecte o cabo fonte. \n';
    reset.innerText += '5º Quando os leds da impressora piscarem solte os botões.'; 
})
lis1[2].addEventListener('click', function() {
    reset.style.display = 'block';
    reset.innerText = '1º Desconecte o USB. \n';
    reset.innerText += '2º Pressione Cancelar + Cópia colorido. \n';
    reset.innerText += '3º Retire o cabo fonte ainda pressionando os botões. \n';
    reset.innerText += '4º Aguarde 30 segundos e reconecte o cabo fonte. \n';
    reset.innerText += '5º Quando os leds da impressora piscarem solte os botões.';
})
lis1[3].addEventListener('click', function() {
    reset.style.display = 'block';
    reset.innerText = '1º Com a impressora ligada aperte Power + Cancel por 5 segundos.\n';
    reset.innerText += '2º Aperte o botão tamanho por +/- 5 segundos.';
})