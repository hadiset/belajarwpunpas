function next(pre){    
    const x = $('#thumbnail').find('img');
    $.each(x, function(index, value){
        if($(value).attr('src') == pre){
            if($(value.nextElementSibling).attr('src') != undefined){
                // $('#imgPre').attr('src', $(value.nextElementSibling).attr('src'));            
                $('#imgPre').attr('src', $(value).next().attr('src'));            
                selected($(value.nextElementSibling).attr('src'));
                animated();
            }else{
                alert('Gambar sudah mentok')};
        }        
    });    
}

function back(pre){    
    const x = $('#thumbnail').find('img');
    $.each(x, function(index, value){
        if($(value).attr('src') == pre){
            if($(value.previousElementSibling).attr('src') != undefined){
                // $('#imgPre').attr('src', $(value.previousElementSibling).attr('src'));
                $('#imgPre').attr('src', $(value).prev().attr('src'));
                selected($(value.previousElementSibling).attr('src'));
                animated();
            }else{
                alert('Gambar sudah mentok')};
        }      
    });    
}

function selected(pre){
    const x = $('#thumbnail').find('img');
    $('.imgThumb').removeAttr('style');
    $.each(x, function(index, value){
        if($(value).attr('src') == pre){
            $(value).css('opacity', '0.5');
        }
    });
}

function animated(){    
    $('#imgPre').addClass('anima');
    setTimeout(function(){
        $('#imgPre').removeClass('anima');
    }, 1000);
}


$(document).ready(function(){
    $('#imgPre').attr('src', $('.imgThumb:first').attr('src'));
    const x = $('#imgPre').attr('src');
    const t = $("#thumbnail").find('img');
    $.each(t, function(index, value){
        if(x == $(value).attr('src')){selected($(value).attr('src'));animated()}
    });
    $('.imgThumb').click(function(x){
    //    console.log($(this).attr('src'));
       $('#imgPre').attr('src', $(this).attr('src'));
       animated();
       selected($(this).attr('src'));
    // console.log(x);
    });

    $('.panah').click(function(x){
        const pre = $('#imgPre').attr('src');
        if($(this).get(0).id == 'kanan'){            
            next(pre);                        
        }else{            
            back(pre);             
        }                
    });
});


