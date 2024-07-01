// Desktop
 export function setupDesktop(){
  categoryToggle();
  gnbControl();
}
export function setupRespond(){
  setToolbarCurrent();
}
// Desktop
// category control
function categoryToggle() {
  const category = $('.header_category');
  const categoryBtn = $('.category_btn');
  const categoryCont = $('.header_category_container');
  const categoryLink = $('.header_category_box.dep1').find('.header_category_link');
  const categoryIcon = $('.common_icon');
  const categorySecond = $('.header_category_box.dep2').children('.header_category_list');
  const categorySecondLen = $('.header_category_box.dep2').children('.header_category_list').length;
  const categoryIconDis = 'icon_gnb_arrow_right_static';
  const categoryIconAct = 'icon_gnb_arrow_right_active'; 
  const categoryCon = 'active';

  $(category).mouseenter(function() {
    $(categoryCont).addClass(categoryCon);
  });

  $(category).mouseleave(function() {
    $(categoryCont).removeClass(categoryCon);
  });

  $(categoryBtn).mouseenter(function(){
    $(categoryLink).removeClass(categoryCon);
    $(categoryIcon).removeClass(categoryIconAct).addClass(categoryIconDis);
    $(categorySecond).removeClass(categoryCon);
  })

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
  });

  $(categoryLink).click(function(){
    const categoryId = $(this).parent().index();
    const gnbLink = $('.header_gnb_item').children('.header_gnb_link');
    const gnbCon = 'active';
    $(gnbLink).parent().eq(categoryId).children(gnbLink).addClass(gnbCon);
    $(gnbLink).parent().eq(categoryId).siblings().children(gnbLink).removeClass(gnbCon);
  })
}

function gnbControl(){
  const gnbLink = $('.header_gnb_item').children('.header_gnb_link');
  const gnbCon = 'active';
  $(gnbLink).click(function(){
    let gnbId = $(this).parent().index();
    $(this).addClass(gnbCon);
    $(this).parent().siblings().children(gnbLink).removeClass(gnbCon);
  })
}