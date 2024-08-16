// Desktop
export function listDesktop(){
  imgBoxBtnHover();
}

// 공용
export function listCommon(){
  countdownTimer();
}

// 이미지 박스 버튼 (PC)
function imgBoxBtnHover(){
  const btn = $(".type_shopping_v1");
  const btnAct = "active";
  const btnIcon = $(".type_shopping_v1 .common_icon");
  const iconDis = "icon_shopping_primary";
  const iconAct = "icon_shopping_white";

  $(btn).mouseenter(function () {
    $(this).addClass(btnAct);
    $(this).children(btnIcon).removeClass(iconDis).addClass(iconAct);
  });

  $(btn).mouseleave(function () {
    $(this).removeClass(btnAct);
    $(this).children(btnIcon).removeClass(iconAct).addClass(iconDis);
  });
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