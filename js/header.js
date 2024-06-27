// Desktop
 export function setupDesktop(){
  categoryActive();
  categoryStatic();
  categoryDepth();
  setAriaCurrentGnb();
  setAriaCurrentCategory()
}
// 전체메뉴 제어
function categoryActive(){
  let category = $('.header_category');
  let categoryCont = $('.header_category_container')
  let categoryControl = 'active';
  let categoryExp = $('.category_btn')
  category.mouseenter(function(){
    categoryCont.addClass(categoryControl);
    categoryExp.removeAttr('aria-expanded').attr('aria-expanded', 'true')
  })
}
function categoryStatic(){
  let category = $('.header_category');
  let categoryCont = $('.header_category_container')
  let categoryControl = 'active';
  let categoryExp = $('.category_btn')
  category.mouseleave(function(){
    categoryCont.removeClass(categoryControl);
    categoryExp.removeAttr('aria-expanded').attr('aria-expanded', 'false')
  })
}
// category depth 제어
function categoryDepth(){
  // 1depth
  let depthFirstLink = $('.header_category_box.dep1 .header_category_link');
  let depthFirstItem = $('.header_category_box.dep1 .header_category_item');
  let depthFirstIcon = '.common_icon';
  let depthFirstArrowStatic = 'icon_gnb_arrow_right_static';
  let depthFirstArrowActive = 'icon_gnb_arrow_right_active';
  // 2depth
  let depthSecondList = $('.header_category_box.dep2 .header_category_list');
  let depthSecondListControl = 'active';
  let depthSecondListCount = depthSecondList.length - 1;

  depthFirstLink.mouseenter(function(){
    // 1depth
    let depthId = $(this).parent().index();
    depthFirstItem.eq(depthId).children(depthFirstIcon).removeClass(depthFirstArrowStatic).addClass(depthFirstArrowActive);
    depthFirstItem.eq(depthId).siblings().children(depthFirstIcon).removeClass(depthFirstArrowActive).addClass(depthFirstArrowStatic);
    // 2depth
    depthSecondList.eq(depthId).addClass(depthSecondListControl);
    depthSecondList.eq(depthId).siblings().removeClass(depthSecondListControl);
    if(depthId > depthSecondListCount) {
      depthSecondList.removeClass(depthSecondListControl);
    }
  })
  depthFirstLink.mouseleave(function(){
    let depthId = $(this).parent().index();
    // 1depth
    depthFirstItem.eq(depthId).children(depthFirstIcon).removeClass(depthFirstArrowActive).addClass(depthFirstArrowStatic);
    // 2depth
  })
}
// Gnb aria-current 제어
function setAriaCurrentGnb(){
  let gnbLink = $('.header_gnb_list .header_gnb_link');
  let categoryItem = $('.header_category_box.dep1 .header_category_item');
  let categoryLink = $('.header_category_box.dep1 .header_category_link');
  $(gnbLink).on('click',function(){
    let gnbId = $(this).parent().index();
    $(this).attr('aria-current', 'page');
    $(this).parent().siblings().children(gnbLink).attr('aria-current', 'false');
    $(categoryItem).eq(gnbId).children(categoryLink).attr('aria-current', 'page');
    $(categoryItem).eq(gnbId).siblings().children(categoryLink).attr('aria-current', 'false');
  })
}
// Category aria-current 제어
function setAriaCurrentCategory(){
  let categoryLink = $('.header_category_box.dep1 .header_category_link');
  let gnbItem = $('.header_gnb_list .header_gnb_item');
  let gnbLink = $('.header_gnb_list .header_gnb_link');
$(categoryLink).on('click',function(){
  let categoryId = $(this).parent().index();
  $(this).attr('aria-current', 'page')
  $(this).parent().siblings().children(categoryLink).attr('aria-current', 'false')
  $(gnbItem).eq(categoryId).children(gnbLink).attr('aria-current', 'page');
  $(gnbItem).eq(categoryId).siblings().children(gnbLink).attr('aria-current', 'false');
})
}