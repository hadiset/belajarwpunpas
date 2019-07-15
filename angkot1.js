var x = 10;

for(var i=1; i <= x; i++){
    if(i <= 6){
        console.log("Angkot " + i + " Ok!");
        if(i == 5){
            console.log("Angkot " + i + " lembur!");
        }
    }else if(i == 8 || i == 10){
        console.log("Angkot " + i + " lembur!");
    }else{
        console.log("Angkot " + i + " gak Ok!");
    }
    
}