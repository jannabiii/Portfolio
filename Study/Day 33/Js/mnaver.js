$(document).ready(function(){
    $('.search-intext').click(function(){
        $('.search-box').toggleClass('active');
        $(".search-box").toggle();
    })
})

$(document).ready(function(){
    $('.search-intext').click(function(){ 
        $(".naver").toggleClass("naver2")
    })
})

$(document).ready(function(){
    $('.search-intext').click(function(){
        $('.search-box').toggleClass('active');
        $(".search-footer").toggle();
    })
})

$(document).ready(function(){
    $('.search-intext').click(function(){
        $('.bgcolor').toggleClass('active');
        $(".bgcolor").toggle();
    })
})
//인터넷.IT지 구독 눌렀을시 테두리 생기게 하기
$(document).ready(function(){
    $('.card-item').click(function(){
        $(this).toggleClass('card-item-select');
    })
})
//구독눌렀을시 화살표 체크모양으로 바뀌게 하기
$(document).ready(function(){
    $('.card-subs').click(function(){
        $(this).toggleClass('card-subs-select');
    }) 
})
//네비게이션바(menu-list의 왼쪽목록을 눌렀을시 배경색 변경)
$(document).ready(function(){
    $('.L').click(function(){
        $('.menu-list').css('background-image','linear-gradient(to right,#f09dba,#b781d6 50%,#8981e6)');
    })
})
$(document).ready(function(){
    $('.R').click(function(){
        $('.menu-list').css('background-image','linear-gradient(to right,#0eca68,#00bf5f');
    })
})
//네비 스와이프 효과
/*$(document).ready(function(){
var tabMenu = new Swiper('.menu-list-container', {
    centeredSlides:true,
    centerdSlidesBounds:true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    hashNavigation: true,
});
    var tabContents = new Swiper('.tabContents', {
        spaceBetween: 10,
        hashNavigation: true,
        });
})*/
//드라마 예능 클릭(cell-menu)
$(document).ready(function(){
    $('.cell-list>li>a').click(function(){
        $('.cell-list>li>a').removeClass('a');
        $(this).addClass('a');
    })
})

