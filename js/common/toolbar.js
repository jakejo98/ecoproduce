export function toolbarRespond(){
  toolbarApp();
  toolbarAppCategory();
}

// 툴바
function toolbarApp(){
  const toolbarBtn = $('.toolbar .toolbar_list .toolbar_item .toolbar_btn');
  const toolbarItem = $('.toolbar .toolbar_list .toolbar_item');
  const toolbarAppCont = $('#app .common_app_container');
  const appClsBtn = $('#app .common_app_container .close_btn');
  const fixPage = 'body';
  const resetPage = '/ecoproduce/index.html';

  $(toolbarBtn).click(function(){

    // 활성화 된 화면을 제외한 모든 화면 scroll 막기
    $(fixPage).addClass('is-fixed')

    // 툴바 버튼 인덱스 값
    let btnId = $(this).parent().index();

    // 툴바 컨텐츠 하면 인덱스값 (2번째 요소부터 시작하여 +1 추가)
    let contId = $(this).parent().index() + 1

    // 툴바 버튼 aria-current 제어
    $(this).attr('aria-current', 'page');
    $(this).parent().siblings().children(appClsBtn).attr('aria-current', 'false');

    // 툴바 버튼 aria-expanded 제어
    if(btnId != 2) {
      // 인덱스 값이 2가 아닌 경우에만 해당 버튼에 맞는 화면 활성화
      $(this).attr('aria-expanded', 'true');
      $(this).parent().siblings().children(toolbarBtn).attr('aria-expanded', 'false');
      $(toolbarItem).eq(2).children(toolbarBtn).removeAttr('aria-expanded');
    } else {
      // 인덱스 값이 2인 경우 메인페이지로 이동
      window.location.href = resetPage;
    }

    // 홈 버튼(3번째 요소) 선택시 메인페이지로 이동
    if(contId == 3) {
      $(toolbarAppCont).attr('aria-hidden', 'true');
      window.location.href = resetPage;
      // Id값이 4보다 커지는 경우 중간에 메인페이지 버튼의 화면이 존재하지 않기 때문에 -1
    }else if(contId >= 4){
      contId -= 1;
      $(toolbarAppCont).eq(contId).attr('aria-hidden', 'false');
      $(toolbarAppCont).eq(contId).siblings().attr('aria-hidden', 'true');
      // 툴바 버튼에 맞는 화면 활성화
    } else {
      $(toolbarAppCont).eq(contId).attr('aria-hidden', 'false');
      $(toolbarAppCont).eq(contId).siblings().attr('aria-hidden', 'true');
    }
  })

  // 툴바 콘텐츠 창 종료 시 메인페이지로 이동
  $(appClsBtn).click(function(){
    window.location.href = resetPage;
  })
}

// 툴바 카테고리 화면 제어
function toolbarAppCategory(){
  const firstDepLink = $('#app .category_content .category_content_list.dep1 > .category_content_item > .category_content_link');
  const firstDepText = $('#app .category_content .category_content_list.dep1 > .category_content_item > .category_content_link > .category_content_text');
  const secondDep = $('.category_content_list.dep2');
  const dis = 'disabled';
  const act = 'active';

  $(firstDepLink).click(function(event){
    const linkId = $(this).parent().index();    

    // dep1 리스트 링크 막기(버튼 처럼 사용)
    if(linkId <= 2) { 
      event.preventDefault();
      
      // dep1 클릭 시 해당 요소에 자식 요소인 dep2 활성화/비활성화
      if($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', 'true');
        $(this).parent().siblings().find(firstDepLink).attr('aria-expanded', 'false');
        $(this).parent().siblings().slice(3, 10).each(function(){
          $(this).find(firstDepLink).removeAttr('aria-expanded');
        });
        $(this).parent().find(secondDep).attr('aria-hidden', 'false');
        $(this).parent().siblings().find(secondDep).attr('aria-hidden', 'true');
        $(this).children(firstDepText).removeClass(dis).addClass(act);
        $(this).parent().siblings().find(firstDepText).removeClass(act).addClass(dis);
      } else {
        $(this).attr('aria-expanded', 'false')
        $(this).parent().siblings().slice(3, 10).each(function(){
          $(this).find(firstDepLink).removeAttr('aria-expanded');
        });
        $(this).parent().find(secondDep).attr('aria-hidden', 'true');
        $(this).children(firstDepText).removeClass(act).addClass(dis);
      }
    }
  })
}
