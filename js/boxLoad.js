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
        // 중간 섹션
        var section1 = box.querySelector("section#section1");
        var section2 = box.querySelector("section#section2");
        section1.removeAttribute("id");
        section2.removeAttribute("id");
        void section1.clientWidth;
        void section2.clientWidth;
        section1.setAttribute("id", "section1");
        section2.setAttribute("id", "section2");

        // 바닥 라인
        var bottomLine = box.querySelector(".bottomLine");
        bottomLine.removeAttribute("class");
        void bottomLine.offsetWidth; // 브라우저에서 강제 랜더링 시키기
        bottomLine.setAttribute("class", "bottomLine");
        
        // Title
        var title = box.querySelector("#backgroundImg");
        title.removeAttribute("id");
        void title.clientWidth;
        title.setAttribute("id","backgroundImg");
        
        return;
    }

    switch (index) {
        //box 2
        case 1 : 
            var box2header = box.querySelector("#box2header");
            var box2Section1 = box.querySelector("#box2Section1");
            
            box2header.removeAttribute("id");
            box2Section1.removeAttribute("id");

            void box2header.clientWidth;
            void box2Section1.clientWidth;

            box2header.setAttribute("id", "box2header");
            box2Section1.setAttribute("id", "box2Section1");

            
            return;

    }
    


}