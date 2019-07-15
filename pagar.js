var x = prompt('Masukkan angka');
var y = '';

for(var i=1; i <=x ; i++){
    if(i % 2 == 1){
        y += '# # # # #'
    }else{
        y += ' # # # # #'
    }
    y += '\n';
}


console.log(y);