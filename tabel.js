const data=[
    {"nim" : "14201202", "firstName" : "Hadi", "lastName" : "Setiawan", "age" : "23"},
    {"nim" : "14201203", "firstName" : "Shandika", "lastName" : "Galih", "age" : "30"},
    {"nim" : "14201204", "firstName" : "Angga", "lastName" : "Risky", "age" : "22"}
];

$.each(data, function(i,value){
    $("#tblData").append(tambahTabel(value));
})

$("#addButton").click(function(){
    $(".modal").css("display","block");
})

$(".modal-close").click(function(){
    $(".modal").css("display","none");
})

$(document).click(function(e){
    if($(e.target).attr("class") == "modal"){
        $(".modal").css("display","none");
    }
})

function tambahTabel(w){
    return "<tr id=\"" + w.nim + "\"><td>" + w.nim + "</td><td>"+ w.firstName +"</td><td>"+ w.lastName +"</td><td>"+ w.age +"</td><td width=64px>Edit</td><td width=64px onClick=\"hapusTabel(" + w.nim + ")\">Hapus</td></tr>"
}

function hapusTabel(w){
    const x = confirm("Yakin ingin anda hapus ?")
    if(x){
        $("#" + w).remove();
    }
}






























// function tambahTabel(w,x,y,z){
//     return "<tr><td>"+w+"</td><td>"+x+"</td><td>"+y+"</td><td>"+z+"</td></tr>";
// }



// function tambahData(nim, namaDepan, namaBelakang, umur){
//     data.push({nim : nim, firstName : namaDepan, lastName : namaBelakang, age : umur});
// }

// tambahData("14201205","Isa", "Ardiansyah", "16");



// // Fungsi tombol add
// $("#addButton").click(function(){
//     $(".modal").css("display","block");
// });

// // Fungsi tombol close modal
// $(".modal-close").click(function(){
//     $(".modal").css("display","none");
// });

// //Fungsi close saat ditekan dimana saja
// $(document).click(function(event){
//    if($(event.target).attr('class') == "modal"){
//         $(".modal").css("display","none");
//    }
// });

// //Fungsi input
// $("#addData").click(function(){
//     event.preventDefault();
//     tambahData($("#nim").val(), $("#fname").val(), $("#lname").val(), $("#age").val());        
//     $("#data").append(tambahTabel($("#nim").val(), $("#fname").val(), $("#lname").val(), $("#age").val()));           
// });

// $.each(data, function(i, value){
//     const w = value.nim;
//     const x = value.firstName;
//     const y = value.lastName;
//     const z = value.age;    
//     $("#data").append(tambahTabel(w,x,y,z));    
// });
