export function toolbar(){
  toolbarBtnCon();
  categoryClsCon();
  categoryDepCon();
}

// toolbar 버튼 컨트롤
function toolbarBtnCon(){
  const categoryCont = $('.toolbar_category_app');
  const toolbarBtn = $('.toolbar_btn');
  const toolbarIcon = $('.toolbar_btn .common_icon');
  const toolbarText = $('.toolbar_btn .toolbar_text');
  const resetPage = './index.html'
  const toolbarCon = 'active';

  // toolbar 버튼 활성화 / 비활성화
  $(toolbarBtn).click(function(){
    const btnId = $(this).parent().index();
    $(this).children(toolbarIcon).addClass(toolbarCon);
    $(this).parent().siblings().find(toolbarIcon).removeClass(toolbarCon);
    $(this).children(toolbarText).addClass(toolbarCon);
    $(this).parent().siblings().find(toolbarText).removeClass(toolbarCon);
    switch(btnId){
      // 카테고리 버튼 클릭시 카테고리 앱 활성화
      case 0: $(categoryCont).addClass(toolbarCon);
        break;
      // 홈 버튼 클릭시 메인페이지로 이동
      case 2: window.location.href = resetPage;
        break; 
      default:
    }
  })
}

// 카테고리 앱 닫기 버튼 클릭 시 이벤트
function categoryClsCon() {
  const categoryCont = $('.toolbar_category_app');
  const categoryClsBtn = $('.toolbar_category_app').find('.close_btn');
  const categoryItem = $('.category_content_list.dep1 > .category_content_item');
  const categoryIcon = $('.category_content_list.dep1 > .category_content_item > .common_icon');
  const categorySecList = $('.category_content_list.dep1 > .category_content_item > .category_content_list.dep2');
  const categoryIconDown = 'icon_category_arrow_down'
  const categoryIconUp = 'icon_category_arrow_up'
  const toolbarCon = 'active';
  const resetPage = './index.html'

  $(categoryClsBtn).click(function(){
    // 카테고리 앱 비활성화
    $(categoryCont).removeClass(toolbarCon);
    // 카테고리 dep2 비활성화
    $(categorySecList).removeClass(toolbarCon);
    // 화살표 아이콘 초기화
    $(categoryItem).children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
    // 메인페이지로 이동
    window.location.href = resetPage;
  })
}
  
// 카테고리 리스트 컨트롤
function categoryDepCon(){
  const categoryItem = $('.category_content_list.dep1 > .category_content_item');
  const categoryLink = $('.category_content_list.dep1 > .category_content_item > .category_content_link');
  const categoryIcon = $('.category_content_list.dep1 > .category_content_item > .common_icon');
  const categorySecList = $('.category_content_list.dep1 > .category_content_item > .category_content_list.dep2');
  const secListLen = $('.category_content_list.dep1 > .category_content_item > .category_content_list.dep2').length;
  const categoryIconDown = 'icon_category_arrow_down'
  const categoryIconUp = 'icon_category_arrow_up'
  const toolbarCon = 'active';

  $(categoryLink).click(function(){
    const linkId = $(this).parent().index();
  // dep2 토글
  $(categorySecList).parent().eq(linkId).children(categorySecList).toggleClass(toolbarCon);
  $(categorySecList).parent().eq(linkId).siblings().children(categorySecList).removeClass(toolbarCon);
  // 활성화시 아이콘 변경
  if(categoryLink.hasClass(toolbarCon)) {
    $(categoryItem).eq(linkId).children(categoryIcon).removeClass(categoryIconDown).addClass(categoryIconUp);
    $(categoryItem).eq(linkId).siblings().children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
    // 비활성화시 아이콘 초기화
  } else {
    $(categoryItem).eq(linkId).children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
  }
  // dep2가 없는 영역일 경우 dep2 비활성화
  if(secListLen == linkId) {
    $(categorySecList).removeClass(toolbarCon);
  }
  })
}


