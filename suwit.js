var m = true;

while(m){
    // menampilkan dan menangkap pilihan
    var p = prompt('batu, gunting, kertas').toLowerCase();

    // mengenerate nilai random
    var r = Math.random();
    console.log(r);

    // menentukan nilai suwit
    if(r < 0.3){
        var x = "batu";
    }else if(0.3 <= r <= 0.6){
        var x = "gunting";
    }else if(0.6 <= r <= 1){
        var x = "kertas";
    }

    // menentukan rules
    if(p == x){
        var h = 'seri';
    }else if(p == 'batu'){
        var h = (x == 'gunting') ? 'menang' : 'kalah';
    }else if(p == 'gunting'){
        var h = (x == 'batu') ? 'kalah' : 'menang';
    }else if(p == 'kertas'){
        var h = (x == 'batu') ? 'menang' : 'kalah';
    }

    // hasil
    if(p == 'batu' || p == 'gunting' || p == 'kertas'){

        alert("Komputer memilih " + x + "\n" +
        "Anda memilih " + p + "\n" +
        "Berarti anda " + h + "\n");
    }else{
        alert("Yang bener coy mainnya!");
    }

    //main lagi
    m = confirm('Main lagi gak?');
}

alert('Makasih udah main');






