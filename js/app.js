export function appRespond(){
  toolbarappCon();
  toolbarappClose();
  toolbarcategoryDep();
  searchApp();
}

// 앱 이벤트
function toolbarappCon(){
  const resetPage = './index.html';
  const commonApp = $('#app .common_app_container');
  const toolbarBtn = $('.toolbar .toolbar_btn');

  $(toolbarBtn).click(function(){
    let btnId = $(this).parent().index();
    let appId = $(this).parent().index() + 1;
    if (btnId == 2) {
      window.location.href = resetPage;
    } else if (appId >= 4) {
      appId -= 1;
    }
    $(commonApp).eq(appId).attr('aria-hidden', 'false');
    $(commonApp).eq(appId).siblings().attr('aria-hidden', 'true');
  })
}

// 앱 창닫기 이벤트
function toolbarappClose(){
  const AppClsBtn = $('#app .common_app_container .close_btn');
  const resetPage = './index.html'
  $(AppClsBtn).click(function(){
    window.location.href = resetPage;
  })
}

// 카테고리 리스트 
function toolbarcategoryDep(){
  const firstDepLink = $('.category_content_list.dep1 > .category_content_item > .category_content_link');
  const secondDep = $('.category_content_list.dep2');

  $(firstDepLink).click(function(){
    $(this).parent().find(secondDep).attr('aria-hidden', 'false');
    $(this).parent().siblings().find(secondDep).attr('aria-hidden', 'true');
    $(this).attr('aria-expanded', 'true');
    $(this).parent().siblings().find(firstDepLink).attr('aria-expanded', 'false');
  })
}

// 검색창
function searchApp(){
  const searchBtn = $('.header_search_btn');
  const headerApp = $('#app .header_search_app');
  const searchClsBtn = $('.header_cls_btn');

  $(searchBtn).click(function(){
    $(headerApp).attr('aria-hidden', 'false');
  })

  $(searchClsBtn).click(function(){
    $(headerApp).attr('aria-hidden', 'true');
  })
}