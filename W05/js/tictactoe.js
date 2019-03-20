$(document).ready(function(){
    let turn=0; //even for player'o', odd for player'x'
    $('#board li').on('click', function(){
        if($(this).hasClass('disable')){
            alert('Already filled.');
        }else if(turn%2==0){
            $(this).text('O');
            $(this).addClass('disable O');
        }else if(turn%2==1){
            $(this).text('X');
            $(this).addClass('disable X');
        }
        turn++;
    })

    $.fn.reset = function(){
        $('#board li').text('+');
        $('#board li').removeClass('O');
        $('#board li').removeClass('X');
        $('#board li').removeClass('disable');
    }

    $('#reset').on('click', function(){
      $.fn.reset();  
    })
})