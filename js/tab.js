export function tabCon() {
  tabListCon();
}

function tabListCon() {
  const tabBtn = $(".section_product_list .common_tab_list .common_tab_btn");
  const tabList = $(
    ".section_product_list .product_grid .product_tab_list_box"
  );
  const currentText = $(
    ".section_product_list .section_breadcrumbes .section_breadcrumbes_item.current_list"
  );

  $(tabBtn).click(function () {
    const tabId = $(this).parent().index();
    // 탭 버튼
    $(this).parent().children(tabBtn).attr("aria-selected", "true");
    $(this).parent().siblings().children(tabBtn).attr("aria-selected", "false");

    // 탭 버튼 상품 리스트
    $(tabList).eq(tabId).attr("aria-hidden", "false");
    $(tabList).eq(tabId).siblings().attr("aria-hidden", "true");

    // 탭 현재 페이지 텍스트 변경
    switch (tabId) {
      case 0:
        $(currentText).text("전체");
        break;
      case 1:
        $(currentText).text("채소");
        break;
      case 2:
        $(currentText).text("과일");
        break;
      case 3:
        $(currentText).text("버섯");
        break;
      case 4:
        $(currentText).text("곡물");
        break;
      case 5:
        $(currentText).text("유기농");
        break;
      default:
    }
  });
}
