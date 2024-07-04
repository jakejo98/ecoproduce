export function toolbar(){
  toolbarBtnCon();
  categoryAppCon();
}
// 툴바 버튼 활성화 유무
function toolbarBtnCon(){
  const toolbarBtn = $('.toolbar .toolbar_btn');
  
  $(toolbarBtn).click(function(){
    $(toolbarBtn).attr('aria-current', 'false')
    $(this).attr('aria-current', 'page')
  })
}

// 툴바 카테고리 이벤트
function categoryAppCon(){
  const categoryApp = $('#app .toolbar_category_app');
  const toolbarBtn = $('.toolbar .toolbar_btn');
  
  // 카테고리 앱 활성화
  $(toolbarBtn).click(function(){
    const categoryId = $(this).parent().index();
    if(categoryId == 0){
      $(categoryApp).attr('aria-hidden', 'false');
    } else {
      $(categoryApp).attr('aria-hidden', 'true')
    }
  })

  // 카테고리 앱 비활성화
  const categoryClsBtn = $('#app .toolbar_category_app .close_btn');
  const resetPage = './index.html'
  
  $(categoryClsBtn).click(function(){
    $(categoryApp).attr('aria-hidden', 'true');
    
  })
}
