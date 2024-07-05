// /* Desktop */
//  export function headerCon(){
//   categoryToggle();
//   gnbControl();
// }

// // 카테고리 컨트롤
// function categoryToggle() {
//   const category = $('.header_category');
//   const categoryBtn = $('.category_btn');
//   const categoryCont = $('.header_category_container');
//   const categoryLink = $('.header_category_box.dep1').find('.header_category_link');
//   const categoryIcon = $('.common_icon');
//   const categorySecond = $('.header_category_box.dep2').children('.header_category_list');
//   const categorySecondLen = $('.header_category_box.dep2').children('.header_category_list').length;
//   const categoryIconDis = 'icon_gnb_arrow_right_static';
//   const categoryIconAct = 'icon_gnb_arrow_right_active'; 
//   const categoryCon = 'active';

//   // 카테고리 마우스오버시 활성화
//   $(category).mouseenter(function() {
//     $(categoryCont).addClass(categoryCon);
//   });

//   // 카테고리 마우스리브시 비활성화
//   $(category).mouseleave(function() {
//     $(categoryCont).removeClass(categoryCon);
//   });

//   // 카테고리 마우스오버시 카테고리 dep1 비활성화
//   $(categoryBtn).mouseenter(function(){
//     $(categoryLink).removeClass(categoryCon);
//     $(categoryIcon).removeClass(categoryIconAct).addClass(categoryIconDis);
//   // 카테고리 마우스오버시 카테고리 dep2 비활성화
//     $(categorySecond).removeClass(categoryCon);
//   })

//   $(categoryLink).mouseenter(function(){
//     const categoryId = $(this).parent().index();
//     // 카테고리 링크 마우스오버시 활성화
//     $(this).addClass(categoryCon);
//     $(this).parent().siblings().children(categoryLink).removeClass(categoryCon);
//     $(this).parent().find(categoryIcon).removeClass(categoryIconDis).addClass(categoryIconAct);
//     $(this).parent().siblings().find(categoryIcon).removeClass(categoryIconAct).addClass(categoryIconDis);
//     // 카테고리 dep1 링크 마우스오버시 dep2 활성화
//     $(categorySecond).eq(categoryId).addClass(categoryCon);
//     $(categorySecond).eq(categoryId).siblings().removeClass(categoryCon);
//     // 카테고리 dep2가 없는 영역일 경우 dep2 비활성화
//     if(categoryId >= categorySecondLen) {
//       $(categorySecond).removeClass(categoryCon);
//     }
//   });
//   // 카테고리 링크 클릭시 Gnb 활성화
//   $(categoryLink).click(function(){
//     const categoryId = $(this).parent().index();
//     const gnbLink = $('.header_gnb_item').children('.header_gnb_link');
//     const gnbCon = 'active';
//     $(gnbLink).parent().eq(categoryId).children(gnbLink).addClass(gnbCon);
//     $(gnbLink).parent().eq(categoryId).siblings().children(gnbLink).removeClass(gnbCon);
//   })
// }

// // Gnb 클릭 이벤트
// function gnbControl(){
//   const gnbLink = $('.header_gnb_item').children('.header_gnb_link');
//   const gnbCon = 'active';
//   $(gnbLink).click(function(){
//     $(this).addClass(gnbCon);
//     $(this).parent().siblings().children(gnbLink).removeClass(gnbCon);
//   })
// }

