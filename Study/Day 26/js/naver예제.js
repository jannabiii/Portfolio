$(document).ready(function(){
    $('.keyboard').click(function(){
        $('.keyboard-icon').toggleClass('green');
    })
})
$(document).ready(function(){
    $('.auto').click(function(){
        $('.auto-icon').toggleClass('active');
        $(".auto-box").toggle();
    })
})
$(document).ready(function(){
    $('.bar').click(function(){
        $('.more').toggleClass('fold');
    })
})
$(document).ready(function(){
    $('.more').click(function(){
        $('.fold').toggleClass('active');
        $(".addbox").toggle();
    })
})
$(document).ready(function(){
    $('.more').click(function(){
        $('.fold').toggleClass('active');
        $(".addbox2").toggle();
    })
})

$(document).ready(function(){
    $('.button').click(function(){
        var page = $('.page').text();
        page = parseInt(page);
        var max = $('.max').text();
        max = parseInt(max);
        if($(this).hasClass('prev')){
            page += 1;
            if(page > max){
                page=1;
            }
            }else{
                page -= 1;
                if(page == 0){
                page = max;
            }
        }
        $('.page').text(page);
    })
})