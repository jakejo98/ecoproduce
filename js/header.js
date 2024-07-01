// Desktop
 export function setupDesktop(){
  categoryBtnToggle();
}
export function setupRespond(){
  setToolbarCurrent();
}
// Desktop
// category control
function categoryBtnToggle() {
  const categoryBtn = $('.header_category');
  const categoryCont = $('.header_category_container');
  const categoryLink = $('.header_category_box.dep1').find('.header_category_link');
  const categoryIcon = $('.common_icon');
  const categorySecond = $('.header_category_box.dep2').children('.header_category_list');
  const categorySecondLen = $('.header_category_box.dep2').children('.header_category_list').length;
  const categoryIconDis = 'icon_gnb_arrow_right_static';
  const categoryIconAct = 'icon_gnb_arrow_right_active'; 
  const categoryCon = 'active';

  $(categoryBtn).mouseenter(function() {
    $(categoryCont).addClass(categoryCon);
  });

  $(categoryBtn).mouseleave(function() {
    $(categoryCont).removeClass(categoryCon);
    $(categoryLink).removeClass(categoryCon);
    $(categoryIcon).removeClass(categoryIconAct).addClass(categoryIconDis);
  });

  $(categoryLink).mouseenter(function(){
    const categoryId = $(this).parent().index();
    $(this).addClass(categoryCon);
    $(this).parent().siblings().children(categoryLink).removeClass(categoryCon);
    $(this).parent().find(categoryIcon).removeClass(categoryIconDis).addClass(categoryIconAct);
    $(this).parent().siblings().find(categoryIcon).removeClass(categoryIconAct).addClass(categoryIconDis);
    $(categorySecond).eq(categoryId).addClass(categoryCon);
    $(categorySecond).eq(categoryId).siblings().removeClass(categoryCon);
    if(categoryId >= categorySecondLen) {
      $(categorySecond).removeClass(categoryCon);
    }
  })

}
