$(function(){
    
    //--------------------------------------------------------스와이퍼
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    //햄버거 메뉴 애니메이션 준 부분
    document.querySelectorAll('.menu-css').forEach(btn => {
        btn.addEventListener('click', e => {
            btn.classList.toggle('active');
        });
    });
    //---------------------------------------------------------------
    var deg = 10;
    var ms = 1000;
    //
    setInterval(function(){
        $('.moving').each(function(){
            var angle = calculateDeg(this);
            //console.log(angle)
            rotate(this, angle,deg,ms)
            angle = calculateDeg(this);
            rotate(this, angle,0,ms)
            //console.log(angle)
        })
    },ms*Infinity)
})

//이미지 로테이션을 위한 함수 
function calculateDeg(selector){
    var tr = $(selector).css('transform');
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var scale = Math.sqrt(a*a + b*b);
    var sin = b/scale;
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    return angle
}
function rotate(selector, angle, deg, ms){
    $(selector).animate({a: deg},{
        duration:ms,
        step: function(now,fx) {
            $(this).css('transform','rotate('+(angle+now)+'deg)'); 
        }
    });
}

//이벤트 요일 클릭시 슬라이드로 애니메이션 되어 사진 내려오게하기
$(document).ready(function(){
    $('.event-date').click(function(){
        $(this).siblings(".event-photo").slideToggle(500)
    })
})

$(document).ready(function(){
    $('.event-date').click(function(){
        $(this).toggleClass("event-date2")
    })
})
//햄버거 메뉴 클릭시 메뉴 팝업 슬라이드로 나오게 하기
$(document).ready(function(){
    $('.menu-css').click(function(){
        if($(this).hasClass('active')){
            $(".Menu-popup").animate({left:'-8px'});
        }else{
            $(".Menu-popup").animate({left:'-1800px'});
        }
        
    })
})


//해당메뉴란에 마우스를 올리면 이미지가 바뀌도록 하기
$(document).ready(function(){
    $('.menu-typobox2').hover(function(){
        $(".imgbox-list2").animate({left:'-8px'});     
    })
})

//강습렌탈페이지_슬라이드 