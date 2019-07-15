const conta = document.querySelector('.imgGal');
const panah = document.querySelectorAll('.panah')
const thumb = document.querySelector('.thumb')
document.querySelector('.imgGal img').style.opacity = 0.5;


conta.addEventListener('click', function(e){
    // menyimpan elemen gambar yg diklik pada suatu variabe;
    const elementGambar = e.srcElement;
    // mengambil attribute src dari gambar yang diklik
    const srcGambar = elementGambar.getAttribute('src');    
    // menset attribute src thumbnail dengan src yg sudah diambil
    thumb.setAttribute('src',srcGambar);
    // thumb.src = e.srcElement.src;
    const srcThumb = thumb.getAttribute('src');
    gambarActive(srcThumb);
});

function panahNext(t){
    // mengambil element gambar dengan class gallery dalam bentuk node array
    const coba = document.querySelectorAll('.gallery');
    // looping setiap elemen gambar
    coba.forEach(function(e){
        // mengambil nilai atribute dari elemen gambar dan disimpan di variabel a
        const a = e.getAttribute('src');
        // jika nama src elemen gambar pada variabel a sama dengan src pada thumbnail yang aktif
        if(a == t){
            // maka simpan elemen gambar selanjutnya pada variable ini
            const nextGambar = e.nextElementSibling;
            // jika variabel elemen gambar ini tidak bernilai null
            if(nextGambar != null){
                // maka ambil attribute src dari elemen gambar ini dan simpan pada variabel src
                const srcGambar = nextGambar.getAttribute('src');       
                // lalu ubah nilai attribute src dari thumbnail dengan attribute srcGambar
                thumb.setAttribute('src',srcGambar);
                gambarActive(srcGambar);
                console.log(nextGambar);
            }else{
                // Jika variabel elemen berisi null tampilkan pesan ini
                alert('Gambar sudah mentok\nGeser kekiri untuk lihat gambar lainnya!');
            }            
        }
    });
}

function panahPrevious(t){
    const coba = document.querySelectorAll('.gallery');
    coba.forEach(function(e){
        const a = e.getAttribute('src');        
        if(a == t){
            const x = e.previousElementSibling;
            if(x != null){
                const src = x.getAttribute('src');            
                thumb.setAttribute('src',src);
                gambarActive(src);
            }else{
                alert('Gambar sudah mentok\nGeser kekanan untuk lihat gambar lainnya!');
            }                        
        }        
    });
}

function gambarActive(t){
    const gal = document.querySelectorAll('.gallery');
    gal.forEach(function(r){
        const x = r.getAttribute('src');
        r.removeAttribute('style');
        if(x == t){r.style.opacity = 0.5};
    });
}

panah.forEach(function(e){
    e.addEventListener('click', function(){
        // mengambil atribute src pada thumbnail yang sedang aktif
        const srcGambar = thumb.getAttribute('src');
        // mengambil nilai ID untuk menentukan mana panah yg diklik
        const cekArah = e.getAttribute('id');
        // menjalankan fungsi sesuai panah yg diklik
        (cekArah == 'kanan') ? panahNext(srcGambar) : panahPrevious(srcGambar);
    });
});





