// $('button').click(()=>{
//     // $('div').toggle('*').css({'color':'blue',})
//     // $('p').siblings().css({'color':'green','font-size':'25px'})
//     // $('p').siblings('h1).css({'color':'green','font-size':'25px'})
//     // $('p').next().css({'color':'green','border':'4px solid blue'})
//     // $('p').nextAll().css({'color':'green','border':'4px solid gray'})
//     // $('small').nextUntil().css({'color':'green','border':'4px solid gray'})
//     // $('h2').prevUntil().css({'color':'green','border':'4px solid gray'})
//     // $('h2').prevAll().css({'color':'green','border':'4px solid gray'})
//     // $('h2').prevUntil().css({'color':'green','border':'4px solid gray'})
//     // $('div').toggle().css({'color':'green','border':'4px solid gray'})
//     // $('div').toglle().css({'color':'orangered','border':'4px solid orange'})
//     $('p').not('.class').css({'color':'orangered','border':'4px solid orange'})




// })

// =======================================================================================


// function insert(num){
//     // console.log(num)
//     $('#cal').val($('#cal').val() + num)

// }
// function eql(){
//     $('#cal').val(eval($('#cal').val()))
// }
// function theclear(){
//     $('#cal').val('');

// }

// function del(){
//     var value = $('#cal').val();
//     $('#cal').val(value.substring(0,value.length -1))
// }
$('button').click(()=>{


// $('#output').load('try.html',function(response,statusTXT,xhr){
//     // alert('dewqfwefcywefhcuewuc')
//     console.log(xhr)
//     if(statusTXT == "success"){
//         alert('successfult ssj' + xhr.statustext)

//     }
//     else if(statusTXT== 'error'){
//         alert('somethon' + xhr.status)
//     }


// })

$.get('try,html',function(data){
    $('#output').html(data)
})
})
