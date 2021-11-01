function slideLeft() {
    // 첫번째를 복사해서 새로운 객체를 생성
    var slideBox = document.querySelectorAll("div.box3col");
    var copyObj = slideBox[0];

    slideBox[0].style.width = '0';
    setTimeout(function() {
        copyObj.style.width = '20%';
        copyObj.parentNode.appendChild(copyObj);    
    }, 300);
}

function slideRight() {
    // 마지막을 복사해서 새로운 객체를 생성
    var slideBox = document.querySelectorAll("div.box3col");
    var copyObj = slideBox[slideBox.length-1];
    copyObj.parentNode.prepend(copyObj);
    copyObj.style.width = '0';
    setTimeout(function() {
        copyObj.style.width = '20%';
    }, 300);

}