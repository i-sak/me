function clickMenuIcon() {
    var navSpace = document.querySelector("#navSpace");
    navSpace.setAttribute("class", "onNavSpace");
    void navSpace.clientWidth;

    showCloseButton();

    navSpace.addEventListener("mousewheel", function(event) {
        ///var top = document.getElementsByTagName("body")[0].getBoundingClientRect().top;
        ///var bottom = document.getElementsByTagName("body")[0].getBoundingClientRect().bottom
        event.preventDefault();
    });

    navSpace.addEventListener("touchmove", function(event) {
        event.preventDefault();
    });
    
    var sx = 0;
    var ex = 0;
    var sy = 0; 
    var ey = 0;

    navSpace.addEventListener("touchstart", function(event) {
        sx = event.touches[0].clientX;
        sy = event.touches[0].clientY;
    });
    navSpace.addEventListener("touchend", function(event) {
        ex = event.changedTouches[0].clientX;
        ey = event.changedTouches[0].clientY;
        
        // 수평이동
        var perpendicular = (sx - ex);
        if (Math.abs(perpendicular) > Math.abs(sy - ey) ) {
            if (sx < ex && Math.abs(perpendicular) > 30 ) {
                clickMenuX();
            }
        }

    });

}
function clickMenuX() {
    var navSpace = document.querySelector("#navSpace");
    navSpace.removeAttribute("class");
    navSpace.setAttribute("class", "closeNavSpace");
    void navSpace.clientWidth;

    var closeButton = document.querySelector("#close");
    var navHeader = document.querySelector("#navHeader");
    var navSection = document.querySelector("#navSection");
    var navFooter = document.querySelector("#navFooter");

    // 메뉴 버튼은 보이기
    var menuIcon = document.querySelector("#fixedMenuIcon");
    menuIcon.setAttribute("class", "openNavSpaceChildren");

    closeButton.removeAttribute("class");
    navHeader.removeAttribute("class");
    navSection.removeAttribute("class");
    navFooter.removeAttribute("class");

    closeButton.setAttribute("class", "closeNavSpaceChildren");
    navHeader.setAttribute("class", "closeNavSpaceChildren");
    navSection.setAttribute("class", "closeNavSpaceChildren");
    navFooter.setAttribute("class", "closeNavSpaceChildren");

}

function showCloseButton() {
    var closeButton = document.querySelector("#close");
    var navHeader = document.querySelector("#navHeader");
    var navSection = document.querySelector("#navSection");
    var navFooter = document.querySelector("#navFooter");
    
    var menuIcon = document.querySelector("#fixedMenuIcon");
    menuIcon.removeAttribute("class");
    menuIcon.setAttribute("class", "closeNavSpaceChildren");

    closeButton.setAttribute("class", "openNavSpaceChildren");
    navHeader.setAttribute("class", "openNavSpaceChildren");
    navSection.setAttribute("class", "openNavSpaceChildren");
    navFooter.setAttribute("class", "openNavSpaceChildren");
    
    void closeButton.clientWidth;
    void navHeader.clientWidth;
    void navSection.clientWidth;
    void navFooter.clientWidth;

    
}