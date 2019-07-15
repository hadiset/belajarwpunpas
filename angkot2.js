var p = [];

function hapusPenumpang(x,y){
    if(y.length == 0){
        console.log('Angkot kosong');
    }else{
        for(var i=0; i<y.length; i++){
            if(x == y[i]){
                y[i] = undefined;

                return y;
            }else if(i == y.length-1){
                console.log(x + ' tidak ada didalam angkot.');

                return y;
            }
        }
    }
};

function tambahPenumpang(x,y){
    if(y.length == 0){
        y.push(x);

        return y;     
    }else{
        for(var i=0; i<y.length; i++){
            if(x == y[i]){
                console.log(x + ' sudah ada didalam angkot.');

                return y;
            }else if(y[i] == undefined){
                if(y.indexOf(x) > -1){
                    console.log(x + ' sudah ada didalam angkot.');

                    return y;
                }else{
                    y[i] = x;

                    return y;
                }                
            }else if(i == y.length -1){
                y.push(x);

                return y;
            }
        }
    }
};