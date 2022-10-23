$(function() {
    $("#todo").change(function(){
        if($(this).val()!=''){
            $("ul").append('<li>'+$(this).val()+'<i class="fa-solid fa-trash"></i>'+'<i class="fa-solid fa-check"></i>'+'</li>')
        }
    })
    $('ul').on('click', '.fa-trash', function () {
        $(this).parent().fadeOut(200)
     })
     $('ul').on('click', '.fa-check', function () {
        $(this).parent().toggleClass('checked')
     })
});