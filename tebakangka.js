var j = true;

while(j){    
    //Komputer mengenerate angka
    var x = Math.round(Math.random()*10);
    x = (x == 0) ? (x + 1) : (x + 0);

    //Memasukkan angka tebakan
    var p = parseInt(prompt('Masukkan angka tebakan anda(1-10)' + '\n' + 'Kesempatan anda 3 lagi'));
    var h;
    var c = 1;
    var d = 2;

    //Mengecek nilai angka  
    //Bila salah ada 3 kesempatan sampai gagal
    while(c <= 2){
        if(p == x){            
            c = 4;
        }else if(p != x){
            if(p < x){
                h = 'Tebakan anda '+ p +'\nTerlalu Kecil';
            }else if(p > x){
                h = 'Tebakan anda '+ p +'\nTerlalu Besar';
            }else{
                h = 'Bukan angka';                
            }
            alert(h);
            p = parseInt(prompt('Masukkan angka tebakan anda(1-10)' + '\n' + 'Kesempatan anda '+ d +' lagi'));                             
            
            d--;
            c++;            
        }
    }
    
    // menampilkan hasil
    h = (p == x) ? ('Tebakan anda benar!!!\nAngka PC : ' + x + '\nAngka Anda : ' + p) : (c = 3 ? ('Kesempatan habis\nAnda gagal!!!\nAngka PC : ' + x + '\nAngka Anda : ' + p):'');
    alert(h);
   // konfirm main lagi
    j = confirm('Main lagi ?');
}

alert('Makasih dah main');

