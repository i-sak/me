function clickMenuIcon() {
    var navSpace = document.querySelector("#navSpace");
    navSpace.setAttribute("class", "onNavSpace");
}
function clickMenuX() {
    var navSpace = document.querySelector("#navSpace");
    navSpace.removeAttribute("class");
}