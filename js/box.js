function boxLoad(index, max) {
    //console.log("boxLoad - index: "+ index + ", max : "+ max);
    
    // box
    box = document.querySelectorAll(".box")[index];
    // console.log(box);
    // 첫 번째 박스 로드
    if (index == 0 || index == max) {
        index = 0;
        
        // console.log("첫 번째 box load")

        // Title
        var title = box.querySelector("#title");
        title.removeAttribute("id");
        void title.clientWidth;
        title.setAttribute("id","title");
        
        // subTitle
        var subTitle = box.querySelectorAll(".subTitle");
        subTitle[0].removeAttribute("class");
        subTitle[1].removeAttribute("class");
        void subTitle[0].offsetWidth; // 브라우저에서 강제 랜더링 시키기
        void subTitle[1].offsetWidth; // 브라우저에서 강제 랜더링 시키기
        subTitle[0].setAttribute("class", "subTitle");
        subTitle[1].setAttribute("class", "subTitle");
        
        // 바닥 라인
        var bottomLine = box.querySelector(".bottomLine");
        bottomLine.removeAttribute("class");
        void bottomLine.offsetWidth; // 브라우저에서 강제 랜더링 시키기
        bottomLine.setAttribute("class", "bottomLine");
        
        
        
    }
}