
function clickBox2Aticle(idx) {
    console.log("clickBox2Aticle idx : " + idx)
    // box cover
    visibledBox2hiddenDivParent();
/*
    var hiddenDiv = document.querySelector(".hiddenDiv");
    hiddenDiv.style.visibility = 'hidden'

    var box2hiddenArticle = document.querySelector("#box2hiddenArticle"+idx);
    box2hiddenArticle.style.visibility = 'visible'
  */  
    


    /*
    switch(idx)
    {
        case 1: 
            
        break;
        case 2: 
        break;
        case 3: 
        break;
        case 4: 
        break;
    }
    */
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
