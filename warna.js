const merah = document.getElementById('merah');
merah.addEventListener('click', function(){
    document.body.classList.toggle('merah');
});

const tblBaru = document.createElement('button');
const txtTblBaru = document.createTextNode('Random');
tblBaru.appendChild(txtTblBaru);
tblBaru.setAttribute('type', 'button');
merah.after(tblBaru);

tblBaru.addEventListener('click', function(){
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const redSlider = document.getElementById('myRedRange');
let redSliderValue = document.getElementById('red');
const greenSlider = document.getElementById('myGreenRange');
let greenSliderValue = document.getElementById('green');
const blueSlider = document.getElementById('myBlueRange');
let blueSliderValue = document.getElementById('blue');


// redSliderValue.innerHTML = redSlider.value;
// redSlider.oninput = function(){
//     redSliderValue.innerHTML = redSlider.value;
//     var r = redSlider.value;
//     var g = greenSlider.value;
//     var b = blueSlider.value;
//     console.log(r);
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// }

// greenSliderValue.innerHTML = greenSlider.value;
// greenSlider.oninput = function(){
//     greenSliderValue.innerHTML = this.value;
//     var r = redSlider.value;
//     var g = greenSlider.value;
//     var b = blueSlider.value;
//     console.log(g);
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// }

// blueSliderValue.innerHTML = blueSlider.value;
// blueSlider.oninput = function(){
//     blueSliderValue.innerHTML = this.value;
//     var r = redSlider.value;
//     var g = greenSlider.value;
//     var b = blueSlider.value;
//     console.log(b);
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// }

// document.body.addEventListener('mousemove', function(e){
//     const xMouse =  Math.round((e.clientX / window.innerWidth) * 255);
//     const yMouse =  Math.round((e.clientY / window.innerHeight) * 255);
//     var b = blueSlider.value;
//     document.body.style.backgroundColor = 'rgb('+ xMouse +','+ yMouse +','+ b +')';
// });

const warna = document.querySelectorAll('.slider');

warna.forEach(function(e){
    e.addEventListener('input', function(){
        const r = document.getElementById('myRedRange').value;
        const g = document.getElementById('myGreenRange').value;
        const b = document.getElementById('myBlueRange').value;

        console.log(r,g,b);
        document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    })
})
