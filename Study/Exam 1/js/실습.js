//여행지 클릭시 사진 확대
$(document).ready(function(){
    $('.travelbox').hover(function(){
        $(this).find('img').toggleClass('pic-hover');
    })
})
$(document).ready(function(){
    $('.travelbox').hover(function(){
        $(this).find('.h3').toggleClass('h3-a');
    })
})
$(document).ready(function(){
    $('.travelbox').hover(function(){
        $(this).find('.h4').toggleClass('h4-a');
    })
})

//클라이언트 네임 클릭시 확대.색 진해지기
$(document).ready(function(){
    $('.info-item').hover(function(){
        $(this).find('.info-item1').toggleClass('info-item1-1');
    })
})
$(document).ready(function(){
    $('.infobox').hover(function(){
        $(this).find('.info-item').toggleClass('info-item-box');
    })
})
$(document).ready(function(){
    $('.info-item').hover(function(){
        $(this).toggleClass('info-item-box');
    })
})