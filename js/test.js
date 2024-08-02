const productCont = $('.section_product_list .product_tab_list_box');
const isProductCont = $('.section_product_list .product_tab_list_box').length;
const productAddList = $('.section_product_list .product_tab_list_box .product_grid_list.expanded_list');
const stickyHeight = $('.section_product_list .common_tab.type_line_v1').innerHeight();
const respondToolbarHeight = $('.toolbar').innerHeight();

const addListActive = $('#dimmed');
const fixPage = $('body');
const isActive = 'active';
const isFixed = 'is-fixed';

let expandedCount = -1;