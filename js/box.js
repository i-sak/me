function boxLoad(index, max) {
    console.log("boxLoad - index: "+ index + ", max : "+ max);

    // 첫 번째 박스 로드
    if (index == 0 || index == max) {
        console.log("첫 번째 box load")
        
        var bottomLine = document.querySelector(".bottomLine");
        bottomLine.removeAttribute("class");
        void bottomLine.offsetWidth; // 브라우저에서 강제 랜더링 시키기
        bottomLine.setAttribute("class", "bottomLine");
        
    }
}