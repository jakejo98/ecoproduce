// 공용
export function listCommon(){
  removeShoppingBtnLink();
  countdownTimer();
  shoppingToastHander();
}

// Desktop
export function listDesktop(){
  shoppingBtnHoverHandler();
}

// 반응형
export function listRespond(){
  removeShoppingBtnHoverHandler();
}


// 장바구니 버튼 마우스 오버 활성화 (PC)
function shoppingBtnHoverHandler(){
  const shoppingBtn = $('.common_btn.type_shopping_v1');
  const shoppingIcon = $('.common_btn.type_shopping_v1 .common_icon')
  const shoppingBtnActive = 'active';
  const shoppingIconActive = 'icon_shopping_white'
  const shoppingIconDisabled = 'icon_shopping_primary'

  // 마우스 오버시 버튼 활성화
  $(shoppingBtn).mouseenter(function(){
    $(this).addClass(shoppingBtnActive);
    $(this).children(shoppingIcon).removeClass(shoppingIconDisabled).addClass(shoppingIconActive);
  })

  // 마우스 오버아웃시 버튼 비활성화
  $(shoppingBtn).mouseleave(function(){
    $(this).removeClass(shoppingBtnActive);
    $(this).children(shoppingIcon).removeClass(shoppingIconActive).addClass(shoppingIconDisabled);
  })
}

// 장바구니 버튼 마우스 오버 비활성화 (반응형)
function removeShoppingBtnHoverHandler(){
  const shoppingBtn = $('.common_btn.type_shopping_v1');
  $(shoppingBtn).off('mouseenter mouseleave');
}

// 장바구니 버튼 클릭시 링크 이동 막기 (공통)
function removeShoppingBtnLink(){
  const shoppingBtn = $('.common_btn.type_shopping_v1');

  $(shoppingBtn).click(function(event){
    event.preventDefault();
  })
}

// 장바구니 버튼 클릭 시 토스트 팝업 창 활성화
function shoppingToastHander(){
  const shoppingBtn = $('.common_btn.type_shopping_v1');
  const toastPopup = $('#toast_container .toast_popup');

  $(shoppingBtn).click(function(){
    $(toastPopup).attr('aria-hidden', 'false');
    // 3초 후에 토스트 팝업 창 비활성화
    setTimeout(function(){
      $(toastPopup).attr('aria-hidden', 'true');
    }, 3000);
  })
}

// 카운트다운 타이머 이벤트(공통)
function countdownTimer(){
  const target = new Date("Aug 31, 2024 00:00:00").getTime();

  const countDownCon = setInterval(function(){

    const titTime = $(".section_title_countdown");
    const comCountTime = $(".common_flag.type_capsule .flag_text.countdown_time");

    const now = new Date().getTime();
    const leftTime = target - now;

    let days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

    hours += days * 24;

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    let countDownText = hours + ":" + minutes + ":" + seconds;

    $(titTime).text(countDownText);
    $(comCountTime).text(countDownText);

    if(leftTime < 0) {
      clearInterval(countDownCon);
      $(titTime).text("00:00:00");
      $(comCountTime).text("00:00:00");
    }
  }, 1000);
}