var x = prompt('Masukkan angka');
var y = '';

for(var i=1; i <=x ; i++){
    for(var j=1; j<=i; j++){
        y += '*';
    }
    y += '\n';
}

for(var i=1; i <=x ; i++){
    for(var j=x; j>i; j--){
        y += '*';
    }
    y += '\n';
}


console.log(y);