// const x = document.getElementById('close');

// x.addEventListener('click',function(){
//     const id = document.getElementById('kontak');
//     id.style.visibility = 'hidden';
// })

// x = document.querySelectorAll('#close');

// x.forEach(function(e){
//     e.addEventListener('click',function(){
//         e.parentElement.style.visibility = 'hidden';
//         // console.log(f);
//     });
// });

x = document.querySelector('#container');

x.addEventListener('click', function(e){
    // console.log(e.target.id);
    if(e.target.id == 'close') {e.target.parentElement.style.visibility = 'hidden';} 
    
    e.preventDefault;
});