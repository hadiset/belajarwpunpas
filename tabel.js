const data=[
    {"id" : "1", "firstName" : "Hadi", "lastName" : "Setiawan", "age" : "23"},
    {"id" : "2", "firstName" : "Shandika", "lastName" : "Galih", "age" : "30"},
    {"id" : "3", "firstName" : "Angga", "lastName" : "Risky", "age" : "22"}
];

function tambahTabel(x,y,z){
    return "<tr><td>"+x+"</td><td>"+y+"</td><td>"+z+"</td></tr>";
}



function tambahData(namaDepan, namaBelakang, umur){
    data.push({id : (data.length+1), firstName : namaDepan, lastName : namaBelakang, age : umur});
}

// tambahData("Isa", "Ardiansyah", "16");



// Fungsi tombol add
$("#addButton").click(function(){
    $(".modal").css("display","block");
});

// Fungsi tombol close modal
$(".modal-close").click(function(){
    $(".modal").css("display","none");
});

//Fungsi close saat ditekan dimana saja
$(document).click(function(event){
   if($(event.target).attr('class') == "modal"){
        $(".modal").css("display","none");
   }
});

//Fungsi input
$("#addData").click(function(){
    event.preventDefault();
    tambahData($("#fname").val(), $("#lname").val(), $("#age").val());    
    $.each(data, function(i, value){
        const x = value.firstName;
        const y = value.lastName;
        const z = value.age;
        
        $("#data").append(tambahTabel(x,y,z));    
    });
});

$.each(data, function(i, value){
    const x = value.firstName;
    const y = value.lastName;
    const z = value.age;
    
    $("#data").append(tambahTabel(x,y,z));    
});