export function appRespond(){
  toolbarappCon();
  toolbarappClose();
  toolbarcategoryDep();
  searchApp();
  searchDel();
}

// 앱 이벤트
function toolbarappCon(){
  const resetPage = './index.html';
  const commonApp = $('#app .common_app_container');
  const toolbarBtn = $('.toolbar .toolbar_btn');

  $(toolbarBtn).click(function(){
    let btnId = $(this).parent().index() + 1;
    if(btnId == 3) {
      $(commonApp).attr('aria-hidden', 'true');
      window.location.href = resetPage;
    }else if(btnId >= 4){
      btnId -= 1;
      $(commonApp).eq(btnId).attr('aria-hidden', 'false');
      $(commonApp).eq(btnId).siblings().attr('aria-hidden', 'true');
    } else {
      $(commonApp).eq(btnId).attr('aria-hidden', 'false');
      $(commonApp).eq(btnId).siblings().attr('aria-hidden', 'true');
    }

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
  const firstDepLink = $('.category_content_list.dep1 .category_content_link');
  const firstDepIcon = $('.category_content_list.dep1 .common_icon');
  const firstDepDown = 'icon_category_arrow_down';
  const firstDepUp = 'icon_category_arrow_up';
  const secondDep = $('.category_content_list.dep2');

  $(firstDepLink).click(function(){
    $(this).parent().find(secondDep).attr('aria-hidden', 'false');
    $(this).parent().siblings().find(secondDep).attr('aria-hidden', 'true');
    $(this).attr('aria-expanded', 'true');
    $(this).parent().siblings().find(firstDepLink).attr('aria-expanded', 'false');
    $(this).parent().find(firstDepIcon).removeClass(firstDepDown).addClass(firstDepUp);
    $(this).parent().siblings().find(firstDepIcon).removeClass(firstDepUp).addClass(firstDepDown);
  })
}

// 검색창 활성화
function searchApp(){
  const searchBtn = $('.header_search_btn');
  const searchApp = $('#app .header_search_app');
  const searchClsBtn = $('.header_cls_btn');

  $(searchBtn).click(function(){
    $(searchApp).attr('aria-hidden', 'false');
    $(searchBtn).attr('aria-expanded', 'true');
    $(searchClsBtn).attr('aria-expanded', 'true')
  })

  $(searchClsBtn).click(function(){
    $(searchApp).attr('aria-hidden', 'true');
    $(searchBtn).attr('aria-expanded', 'false');
    $(searchClsBtn).attr('aria-expanded', 'false')
  })
}

// 검색창 최근검색어 삭제
function searchDel(){
  const delItem =  $('#app .header_search_app .recent_search_item');
  const delBtn =  $('#app .header_search_app .recent_search_item .recent_del_btn');
  const entireDelBtn =  $('#app .header_search_app .entire_del_btn');
  const recentList = $('#app .header_search_app .recent_search_list');

  $(delBtn).click(function(){
    $(this).closest(delItem).remove();
  })

  $(entireDelBtn).click(function(){
    $(recentList).remove();
  })
}

