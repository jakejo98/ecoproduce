export function btn(){
    shoppingBtn();
}

// 장바구니 마우스오버 이벤트
function shoppingBtn(){
    const btn = $('.shopping_btn');
    const btnAct = 'active';
    const btnIcon = $('.shopping_btn .common_icon');
    const iconDis = 'icon_shopping_primary';
    const iconAct = 'icon_shopping_white';

    $(btn).mouseenter(function(){
        $(this).addClass(btnAct);
        $(this).children(btnIcon).removeClass(iconDis).addClass(iconAct);
    })
    $(btn).mouseleave(function(){
        $(this).removeClass(btnAct);
        $(this).children(btnIcon).removeClass(iconAct).addClass(iconDis);
    })
}

