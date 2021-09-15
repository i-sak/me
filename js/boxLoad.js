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
        var section1 = box.querySelector("section#section1");
        var section2 = box.querySelector("section#section2");

        title.removeAttribute("id");
        section1.removeAttribute("id");
        section2.removeAttribute("id");
        
        void title.clientWidth;
        void section1.clientWidth;
        void section2.clientWidth;
        
        title.setAttribute("id","title");
        section1.setAttribute("id", "section1");
        section2.setAttribute("id", "section2");

        // 바닥 라인
        var bottomLine = box.querySelector(".bottomLine");
        bottomLine.removeAttribute("class");
        void bottomLine.offsetWidth; // 브라우저에서 강제 랜더링 시키기
        bottomLine.setAttribute("class", "bottomLine");        
        return;
    }

    switch (index) {
        //box 2
        case 1 :     
            return;
    }
}

// =======================================
// box 2 event 
// =======================================
function clickBox2Aticle(idx) {
    // box cover
    visibledBox2hiddenDivParent(idx);

    // hidden Conteants
    var box2HiddenContents = document.querySelector("#box2HiddenContent"+idx);
    box2HiddenContents.style.animation = "visibilityOn2 0.3s forwards";

    
}
// on
function visibledBox2hiddenDivParent () {
    var box2hiddenDivParent = document.querySelector("div#box2hiddenDivParent");
    box2hiddenDivParent.style.animation = "visibilityOn 0.3s forwards";
    
    
}
// off
function closeBox2hiddenDivParent() {
    
    // hidden Conteants
    var box2HiddenContents = document.querySelectorAll(".box2HiddenContents");
    for(var i = 0 ; i < box2HiddenContents.length; i++) {
        box2HiddenContents[i].style.animation ='visibilityOff2 0.3s forwards'
    }

    var box2hiddenDivParent = document.querySelector("div#box2hiddenDivParent");
    box2hiddenDivParent.style.animation = 'visibilityOff 0.3s forwards'

    
    

}

