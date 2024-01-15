
// Menambah setaip kali item di click
const p4 = document.querySelector('section#b p')

p4.addEventListener("click", function(){
    var ul = document.querySelector('section#b ul');

    var liBaru = document.createElement('li');
    var textLiBaru = document.createTextNode('Item baru');

    liBaru.appendChild(textLiBaru);

    ul.appendChild(liBaru);
})