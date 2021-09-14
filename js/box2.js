
function clickBox2Aticle(idx) {
    console.log("clickBox2Aticle idx : " + idx)
    // box cover
    visibledBox2hiddenDivParent();
}
// on
function visibledBox2hiddenDivParent () {
    var box2hiddenDivParent = document.querySelector("div#box2hiddenDivParent");
    box2hiddenDivParent.style.animation = "visibilityOn 0.3s forwards";
}
// off
function closeBox2hiddenDivParent() {
    var box2hiddenDivParent = document.querySelector("div#box2hiddenDivParent");
    box2hiddenDivParent.style.animation = 'visibilityOff 0.3s forwards'
}
