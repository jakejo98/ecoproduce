$(document).ready(function(){
  categoryActive();
  categoryStatic();
  depth();
})
// 전체메뉴 제어
function categoryActive(){
  let category = $('.header_category');
  let categoryCont = $('.header_category_container')
  let categoryControl = 'active';
  category.mouseenter(function(){
    categoryCont.addClass(categoryControl);
  })
}
function categoryStatic(){
  let category = $('.header_category');
  let categoryCont = $('.header_category_container')
  let categoryControl = 'active';
  category.mouseleave(function(){
    categoryCont.removeClass(categoryControl);
  })
}
// category depth 제어
function depth(){
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
