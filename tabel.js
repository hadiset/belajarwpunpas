const data={
    "data1": {
        firstName: "Hadi",
        lastName: "Setiawan",
        age: 23
    },
    "data2": {
        firstName: "Sandhika",
        lastName: "Galih",
        age: 30
    },    
    "data3": {
        firstName: "Angga",
        lastName: "Risky",
        age: 22
    }  
};

console.log(data);

function tambahTabel(x,y,z){
    return "<tr><td>"+x+"</td><td>"+y+"</td><td>"+z+"</td></tr>";
}


$("#data").append(tambahTabel('Data1','Data1','Data1'));