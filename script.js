//selektovanje elementa po id i brisanje iz html


let recenica = document.querySelector('#recenica');
 recenica.remove();

// kreiranje novog div elementa
let novi_element = document.createElement('div');
novi_element.classList = 'novi-element';

novi_element.innerHTML =  'pozdrav!!! <hr>';

let body = document.querySelector('body')
body.appendChild(novi_element);


