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
// box 3 event 
// =======================================
function clickBox3Aticle(idx) {
    visibledBox3hiddenDivParent(idx);
    var a = document.querySelector("#box3closeButtonA");
    a.setAttribute( 'href', 'javascript:closeBox3hiddenDivParent('+ idx +')');
}
// on
function visibledBox3hiddenDivParent (idx) {
    // box cover
    var box3hiddenDivParent = document.querySelector("div#box3hiddenDivParent");
    box3hiddenDivParent.style.animation = "visibilityOn 0.3s forwards";
    // hidden Conteants
    var hiddenId = "#box3HiddenContent"+idx;
    var box3HiddenContents = document.querySelector(hiddenId);
    box3HiddenContents.style.animation = "visibilityOn2 0.4s forwards";
}
// off
function closeBox3hiddenDivParent(idx) {
    // hidden Conteants
    /*var box2HiddenContents = document.querySelectorAll(".box2HiddenContents");
    for(var i = 0 ; i < box2HiddenContents.length; i++) {
        box2HiddenContents[i].style.animation ='visibilityOff2 0.4s forwards'
    }*/
    var hiddenId = "#box3HiddenContent"+idx;
    var box3HiddenContents = document.querySelector(hiddenId);
    box3HiddenContents.style.animation = "visibilityOff2 0.4s forwards";
    
    var box3hiddenDivParent = document.querySelector("div#box3hiddenDivParent");
    box3hiddenDivParent.style.animation = 'visibilityOff 0.3s forwards'
    
}

