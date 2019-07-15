//mengambil berapa kubus yg mau dijumlah
var b = prompt('Berapa kubus yang akan di jumlah ?')
var c = 1;
var x = [];
var hsl = 0;
var angka = '';

// mengambil nilai sisi kubus dan ditampung dalam array
while(c <= b){
    var d = parseInt(prompt('Sisi kubus ' + c));
    x.push(d);
    c++;    
}

//menghitung volume setiap nilai
//console.log(x.join());
function volumeKubus(x){
    return vol = x * x * x;    
}

//console.log(volumeKubus(x[0]) + volumeKubus(x[1]))
for(var i=0; i < x.length; i++){
    hsl += volumeKubus(x[i]);
    angka += 'Angka ke ' + (i+1) + ' adalah ' + x[i] + '\n';
}

alert(angka + '\nHasil akhirnya adalah ' + hsl);
//menampilkan hasilnya


