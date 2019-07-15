var z = true;

while(z === true){
    alert('Bodoh!');
    alert('Sekali!');
    alert('Anda!');
    
    var x = prompt('Nama kamu?');
    
    alert('Hai ' + x);
    var y = confirm('Kamu OK');

    if(y){
        alert('Berarti si ' + x + ' sehat!');
    }else{
        alert('Berarti si ' + x + ' sakit');
    }

    z = confirm('Lagi?');
}


