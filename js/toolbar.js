export function toolbar(){
  const toolbarBtn = $('.toolbar').children('.toolbar_btn');
  const toolbarText = $('.toolbar').children('.toolbar_text');
  const toolbarIcon = $('.toolbar').children('.common_icon');
  // 위에 수정 내용
  const categoryCont = $('.toolbar_category_app');
  const categoryClsBtn = $('.toolbar_category_app').find('.close_btn');
  const categoryItem = $('.category_content_list.dep1 > .category_content_item');
  const categoryLink = $('.category_content_list.dep1 > .category_content_item > .category_content_link');
  const categoryIcon = $('.category_content_list.dep1 > .category_content_item > .common_icon');
  const categorySecList = $('.category_content_list.dep1 > .category_content_item > .category_content_list.dep2');
  const secListLen = $('.category_content_list.dep1 > .category_content_item > .category_content_list.dep2').length;
  const categoryIconDown = 'icon_category_arrow_down'
  const categoryIconUp = 'icon_category_arrow_up'
  const toolbarCon = 'active';
  const resetPage = './index.html'

 // 수정 중

  $(categoryClsBtn).click(function(){
    $(categoryCont).removeClass(toolbarCon);
    $(categorySecList).removeClass(toolbarCon);
    $(categoryItem).children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
    window.location.href = resetPage;
  })

  $(categoryLink).click(function(){
    const linkId = $(this).parent().index();
    $(categorySecList).parent().eq(linkId).children(categorySecList).toggleClass(toolbarCon);
    $(categorySecList).parent().eq(linkId).siblings().children(categorySecList).removeClass(toolbarCon);
    if(categoryLink.hasClass(toolbarCon)) {
      $(categoryItem).eq(linkId).children(categoryIcon).removeClass(categoryIconDown).addClass(categoryIconUp);
      $(categoryItem).eq(linkId).siblings().children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
    } else {
      $(categoryItem).eq(linkId).children(categoryIcon).removeClass(categoryIconUp).addClass(categoryIconDown);
    }
    if(secListLen == linkId) {
      $(categorySecList).removeClass(toolbarCon);
    }
  })


}