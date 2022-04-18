function slideLeft() {
    var onProj = document.querySelector('#onProject');
    onProj.style.width = '20%';
    // 첫번째를 복사해서 새로운 객체를 생성
    var slideBox = document.querySelectorAll("div.box3col");
    var copyObj = slideBox[0];

    slideBox[0].style.width = '0';
    setTimeout(function() {
        copyObj.style.width = '20%';
        copyObj.parentNode.appendChild(copyObj);    
    }, 200);

    onProject(-1);
}

function slideRight() {
    var onProj = document.querySelector('#onProject');
    onProj.style.width = '20%';
    // 마지막을 복사해서 새로운 객체를 생성
    var slideBox = document.querySelectorAll("div.box3col");
    var copyObj = slideBox[slideBox.length-1];
    copyObj.parentNode.prepend(copyObj);
    copyObj.style.width = '0';
    setTimeout(function() {
        copyObj.style.width = '20%';
    }, 10);
    
    onProject(1);
}

function onProject(d) {
    var slideBox = document.querySelectorAll("div.box3col");
    var onProject ;
    if (d ==  -1) { // 왼쪽
        slideBox[2].setAttribute('id', '');
        slideBox[3].setAttribute('id', 'onProject');
        onProject = slideBox[3];
    } else {
        slideBox[3].setAttribute('id', '');
        slideBox[2].setAttribute('id', 'onProject');
        onProject = slideBox[2];
    }
    
    setTimeout(function() {
        onProject.style.width = '50%';
    }, 10);
}