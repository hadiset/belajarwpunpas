function Angkot(sopir, trayek, kas, penumpang){
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;

    this.penumpangNaik = function(nama){
        if(this.penumpang.length == 0){
            this.penumpang.push(nama);

            return this.penumpang;
        }else{
            for(var i=0; i < this.penumpang.length; i++){
                if(this.penumpang.indexOf(nama) > -1){
                    console.log(nama + ' sudah naik angkot ini');

                    return this.penumpang;                        
                }else if(this.penumpang[i] == undefined){
                    this.penumpang[i] = nama;

                    return this.penumpang;
                }else if(i == this.penumpang.length-1){                    
                    this.penumpang.push(nama);

                    return this.penumpang;
                }
            }            
        }
    }

    this.penumpangTurun = function(nama, bayar){
        if(this.penumpang.length == 0){
            console.log('Angkot kosong');

            return this.penumpang;
        }else{
            for(var i=0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == nama){
                    this.penumpang[i] = undefined;                   
                    console.log(nama + ' turun dari angkot');
                    this.kas += bayar;

                    return this.penumpang;
                }else if(i == this.penumpang.length-1){
                    console.log(nama + ' tidak naik di angkot ini');

                    return this.penumpang;
                }
            }
        }
    }
}

var angkot1 = new Angkot('Hadi', ['Pasar', 'Bendo'], 0, []);

var angkot2 = new Angkot('Didi', ['Selecta', 'Junggo'], 0, []);