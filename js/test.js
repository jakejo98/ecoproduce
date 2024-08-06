$(document).ready(function(){
  test();
})

function test(){
  const productCont = $('.section_product_list .product_tab_list_box');
  const isProductCont = $('.section_product_list .product_tab_list_box').length;
  const productAddList = $('.section_product_list .product_tab_list_box .product_grid_list.expanded_list');
  const stickyHeight = $('.section_product_list .common_tab.type_line_v1').innerHeight();
  const respondToolbarHeight = $('#toolbar').length;

  const addListActive = $('#dimmed');
  const fixPage = $('body');
  const isActive = 'active';
  const isFixed = 'is-fixed';

  // 카운트
  let expandedCount = -1;
  // 최상단에서 컨테이너 까지의 거리
  let productContTop = updateProductContTop();
  // 컨테이너 높이 값
  let productContHeight = 0;
  // 윈도우 높이 값
  let windowHeight = 0;
  // 윈도우 너비 값
  let windowWidth = 0;
  // 실시간으로 변화하는 윈도우 너비 값
  let windowResizeWidth = 0;

  function updateProductContTop(){
    if(isProductCont){
      return $(productCont).offset().top;
    } else {
      return null;
    }
  }

  function updateProductContHeight(){
    productContHeight = $(productCont).innerHeight();
  }

  function updateWindowHeight(){
    windowHeight = $(window).height();
  }

  function upadateWindowWidth(){
    windowWidth = $(window).width();
  }

  function upadateWindowResizeWidth(){
    $(window).resize(function(){
      windowResizeWidth = $(window).width();
    })
  }

  $(window).resize(function(){
    updateProductContTop();
    
    console.log(productContTop);
    
  })
}
