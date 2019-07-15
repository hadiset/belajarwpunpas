const x = document.getElementById('judul');
x.innerHTML = 'Ini JS';
x.style.color = 'blue';

const y = document.getElementsByTagName('section');
y[0].style.backgroundColor = 'lightblue';

const z = document.getElementsByClassName('p1');
z[0].style.fontWeight = 'bold';

const p4 = document.querySelector('#b p');
p4.style.fontWeight = 'bold';
p4.style.color = 'red';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'blue';
li2.style.color = 'white';

const p = document.querySelectorAll('p');
p[1].style.fontWeight = 'bold';

const i = document.getElementById('b');
const secb = i.querySelector('p');

//buat element
const a = document.createElement('p');
//buat text
const s = document.createTextNode('Paragraf baru coy');
//masukkan text ke elemen
a.appendChild(s);
//ambil parent element
const seca = document.getElementById('a');
//taruh element ke tempat yg diinginkan
seca.appendChild(a);
a.style.backgroundColor = ('lightgreen');

//buat element
const libaru = document.createElement('li');
//buat text
const textli = document.createTextNode('ini li baru');
//masukkan text ke elemen
libaru.appendChild(textli);
//ambil parent element
const b = document.querySelector('#b ul');
const b2 = b.querySelector('li:nth-child(2)');
//taruh element
b.insertBefore(libaru, b2);
libaru.style.backgroundColor='lightgreen';