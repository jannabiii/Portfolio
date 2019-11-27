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
/*더보기 눌렀을시 나오는 서비스전체보기.메뉴설정.닫기버튼*/
$(document).ready(function(){
    $('.more').click(function(){
        //접기를 누른 상황
        if($(this).hasClass('fold')){
            $(".sv").hide();    
            $(".sv2").hide();
        }
        else{
            $(".sv").show();
        }
    })
})
$(document).ready(function(){
    $('.close-menubox').click(function(){
        $('.more').toggleClass('fold');
        $(".addbox").toggle();
        $(".addbox2").toggle();
        $(".sv").hide();
        $(".sv2").hide();
    })
})
/*메뉴설정 클릭시 박스모양이 바뀌도록 하는부분*/
$(document).ready(function(){
    $('.service-menu').click(function(){ 
        $(".sv").show();
        $(".sv2").show();
    })
})
$(document).ready(function(){
    $('.cancel').click(function(){ 
        $(".sv2").hide();
        $(".sv").show();
    })
})
//메뉴설정 클릭시 네비게이션 부분이 naviempty(빈박스)로 바뀌도록하는 부분
/*$(document).ready(function(){
    $('.service-menu').click(function(){ 
        $(".naviempty").toggle();
    })*/
$(document).ready(function(){
    $('.more').click(function(){ 

        $('.sv').removeClass('display-none');
        $('.sv2').addClass('display-none');
    })
})
//체크박스 누를시 녹색으로 변하면서 체크되도록
//체크를 해제해야 하는 상황은 신경쓸 필요가없다.
//체크를 해야하는 상황은 신경써야한다.최대 갯수지정: 5
$(document).ready(function(){
    $('.sv-item').click(function(){
        if(!$(this).find('.checkboximg').hasClass('radio-checked'))
            if($('.radio-checked').length == 5){
                alert('최대 5개까지 선택 가능합니다.');
                return ;
            }
        $(this).find('.checkboximg').toggleClass('radio-checked')
        // $(".checkboximg").hide();
        // $(".radio-checked").show();
    })
})
$(document).ready(function(){
    $('.service-menu').click(function(){ 
        $('.checkboximg').removeClass('display-none');
    })
})
$(document).ready(function(){
    $('.checkboximg').addClass('display-none');
    $('.cancel').click(function(){ 
        var value=$(this).find('.checkboximg').val();
        $('.checkboximg').addClass('display-none');
            if($(this).hasClass('checkboximg')){
            $(this).find('.checkboximg').prop('checked',true);
        }
            else{
            $(this).find('.checkboximg').prop('checked',false);
            }
            var pos = selMenuTmp.indexOf(value);
//선택한 메뉴가 체크가 된 경우
            if(pos == -1){
                $('.box-menu').eq(selMenuTmp.length).addClass('bg3');
                $('.box-menu').eq(selMenuTmp.length).addClass('black-box');
                $('.box-menu').eq(selMenuTmp.length).addClass('value');
                selMenuTmp.push(value);
                $('.box-menu').eq(selMenuTmp.length).addClass('select');
            }
//선택된 메뉴가 체크 해제된 경우
            else{
                selMenuTmp.splice(pos,1);
                //selMenuTmp에 있는 배열에 맞춰 배치하기
                //??

                selMenuTmp.push(value);
                $('.box-menu').eq(selMenuTmp.length).addClass('select');
            }
    })
})
//메뉴설정 클릭시 사전.뉴스.증권...이 사라지고 네모칸이 생기도록
$(document).ready(function(){
    $('.service-menu').click(function(){ 
        $('.black-container').hide();
        $('.naviempty').show();
    })
/*setInterval(함수,시간) : 일정시간마다 함수를 동작시키는 함수*/
    var cnt = 1;
    setInterval(function(){
        var height = '-18px';    
        ticker(height)
        ticker2(height)
    },1500);

})//document.ready() 끝부분

var oriMenu = ["dic","news","stock","deal","map"
			,"movie",	"music","book","comic"];
var selMenu = [];//확인 버튼을 눌러 확정된 메뉴들
var selMenuTmp = [];//메뉴설정에서 선택된 메뉴들

/* 검은색 메뉴를 초기화 하는 함수
    메뉴 설정 클릭 후 확인 버튼을 눌렀을 때,
    메뉴설정 클릭 후 초기화 버튼을 눌렀을 때,
    메뉴 설정 클릭 후 취소 버튼을 눌렀을 때,
    X버튼을 눌렀을때,접기버튼을 눌렀을 때. */
function initBlackMenu(){
	var i = 0;
	//메뉴설정에서 선택된 메뉴가 있는 경우
	if(selMenu.length != 0){
		$('.black-container>a').each(function(){
			$(this).prop('class','');
			if(i<selMenu.length){
				$(this).addClass('black-box');
				$(this).addClass('bg3');
				$(this).addClass(selMenu[i]);
			}else{
				$(this).addClass('display-none');
			}
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
	//초기화해야하는 경우
	else{
		$('.black-container>a').each(function(){
			//요소의 모든 클래스 제거
			$(this).prop('class','');
			$(this).addClass('black-box');
			$(this).addClass('bg3');
			$(this).addClass(oriMenu[i]);
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
}
//white-box가 닫히면서 해야할 작업들
function closeWhiteBox(){
	//검은 메뉴를 초기화할지 아니면 선택된 메뉴로 보여줄지 결정
	if(selMenu.length == 0){
		initBlackMenu();
	}else{

	}
}
//arr를 기준으로 검은색 메뉴들을 빈 박스 또는 선택된 메뉴로 배치
/*메뉴설정을 눌렀을때 arr를 기준으로 검은색 메뉴와 빈박스를 출력하는 함수
(초기화를 했거나,메뉴를 0개 선택한 경우)*/ 
function drawMenu(arr){
	if(arr.length > 5){
		return;
	}
	var i = 0;
	$('.black-container>a').each(function(){
		//요소의 모든 클래스 제거
		$(this).prop('class','');
		if(i < arr.length){
			$(this).addClass('black-box');
			$(this).addClass('bg3');
			$(this).addClass(arr[i]);
		}
		//else{
		$(this).addClass('box-menu');
		//}
		if(i>4){
			$(this).addClass('display-none');
		}
		i++;
	})
}
//arr를 기준으로 input 체크박스의 checked와 선택이미지를 설정하는 함수
/*초기설정이 아닌 검은색 메뉴들과 체크박스를 일치시키는 함수*/ 
function setInputCheckbox(arr){
	$('.checkbox-input').each(function(){
		/* 체크 박스의 value를 가져옴 */
		var value = $(this).val();
		/* value가 arr에 있는지 확인 */
		var pos = arr.indexOf(value);
		/* 있으면 체크박스를 체크하고 */
		if(pos != -1){
			$(this).prop('checked', true);
			$(this).prev().addClass('checked-img')
		}
		/* 없으면 체크박스를 해제한다 */
		else{
			$(this).prop('checked', false);
			$(this).prev().removeClass('checked-img')
		}
	})
}
//실시간 검색어 올라가는 효과
function ticker(height){
    $('.real-search-item').eq(0)
    .animate({'margin-top':height},1000,
    //animate에서 설정한 애니메이션을 다 실행한 후 실행되는 함수
    /*$(붙일곳).append(붙일애)
      $(붙일애).append To(붙일곳)
    */
    function(){
        $('.real-search-item').eq(0).detach()
        .appendTo('.real-search-list').removeAttr('style');
    }); 
}
//연합뉴스 목록 올라가는 효과
function ticker2(height){
    $('.ca-item').eq(0)
    .animate({'margin-top':height},1000,
    //animate에서 설정한 애니메이션을 다 실행한 후 실행되는 함수
    /*$(붙일곳).append(붙일애)
      $(붙일애).append To(붙일곳)
    */
    function(){
        $('.ca-item').eq(0).detach()
        .appendTo('.cast-list').removeAttr('style');
    }); 
}