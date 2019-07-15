// tanya sisi
var x = parseInt(prompt("Masukkan sisi Kubus1 : "));
var y = parseInt(prompt("Masukkan sisi Kubus2 : "));

//hitung volume kubus dan jumlahkan
function jumlahVolume(x,y){   
    return jumlah = x * x * x + y * y * y;    
}

alert('Hasilnya : ' + jumlahVolume(x,y) );