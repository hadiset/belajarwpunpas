const p2 = document.getElementsByClassName('p2');

function ubahWarna(){
    p2[0].style.backgroundColor = 'lightblue';
}

p2[0].onclick = ubahWarna;

const p4 = document.querySelector('section#b p');
const ul = document.querySelector('section#b ul');



p4.addEventListener('click', function(){
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('li baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});