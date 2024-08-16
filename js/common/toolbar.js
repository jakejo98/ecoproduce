export function toolbarRespond(){
  toolbarApp();
  toolbarCategory();
  toolbarCategoryGnbAria();
}

// 툴바
function toolbarApp(){
  const appClsBtn = $('#app .common_app_container .close_btn');
  const resetPage = '/ecoproduce/index.html';

  // 카테고리 창 'x' 버튼 클릭시 메인페이지로 이동
  $(appClsBtn).click(function(){
    window.location.href = resetPage;
  })
}

// 툴바 카테고리 화면 제어
function toolbarCategory(){
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

function toolbarCategoryGnbAria() {
  const toolbarItem = $('.toolbar .toolbar_item');
  const toolbarLink = $('.toolbar .toolbar_link');
  const toolbarIcon = $('.toolbar .common_icon');
  let currentUrl = window.location.pathname;
  let fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

  switch(fileName) {
    case 'category.html':
      $(toolbarItem).eq(0).children(toolbarLink).attr('aria-current', 'page');
      $(toolbarItem).eq(0).find(toolbarIcon).removeClass('icon_toolbar_category_disabled').addClass('icon_toolbar_category_active');
      break;
    case 'call.html':
      $(toolbarItem).eq(1).children(toolbarLink).attr('aria-current', 'page');
      $(toolbarItem).eq(1).find(toolbarIcon).removeClass('icon_toolbar_call_disabled').addClass('icon_toolbar_call_active');
      break;
    case 'index.html':
      $(toolbarItem).eq(2).children(toolbarLink).attr('aria-current', 'page');
      $(toolbarItem).eq(2).find(toolbarIcon).removeClass('icon_toolbar_home_disabled').addClass('icon_toolbar_home_active');
      break;
    case 'order.html':
      $(toolbarItem).eq(3).children(toolbarLink).attr('aria-current', 'page');
      $(toolbarItem).eq(3).find(toolbarIcon).removeClass('icon_toolbar_order_disabled').addClass('icon_toolbar_order_active');
      break;
    case 'mypage.html':
      $(toolbarItem).eq(4).children(toolbarLink).attr('aria-current', 'page');
      $(toolbarItem).eq(4).find(toolbarIcon).removeClass('icon_toolbar_mypage_disabled').addClass('icon_toolbar_mypage_active');
      break;
  }
}