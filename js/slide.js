function slideLeft() {
    // 첫번째를 복사해서 새로운 객체를 생성
    var slideBox = document.querySelectorAll("div.box3col");
    var copyObj = slideBox[0];
    
    
    // 제일 뒤에 붙이고
    copyObj.parentNode.appendChild(copyObj)
    // 제일 앞에 것을 삭제한다.
    
    
}

function slideRight() {
    // 마지막을 복사해서 새로운 객체를 생성

    // 제일 앞에 붙이고

    // 제일 뒤에 것을 삭제한다.

}