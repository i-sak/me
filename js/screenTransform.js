var pos = {
    x : 0,
    y : 0,
}
var elm;
var boxIndex;
var boxCount; // 0 or Max

function initPos() {
    pos.x = 0;
    pos.y = 0;
}
// window.onload = function () { }
$(document).ready(function() {
    elm = ".box";
    boxCount = $(elm).length;
    
    $(elm).each(function (index) {

        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        
                        $(elmSelecter).next().addClass('move'); //  휠 내렸을시 애니메이션 이벤트
                        
                        boxIndex = $(this).next().index();
                        //console.log(boxIndex);
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        boxIndex = $(this).prev().index();
                        //console.log(boxIndex);
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 300, complete: function () {
                }
            });
        }); // - end - mousewheel DOMMouseScroll
        $(this).on("touchmove", function(e){
            e.preventDefault();
        });
        $(this).on("touchstart", function(e){
            initPos();
            pos.x = e.touches[0].clientX;
            pos.y = e.touches[0].clientY;
            //console.log("s "+pos.x, pos.y);
        }); // - end - touchstart
        $(this).on("touchend", function(e){
            var sx = pos.x;
            var sy = pos.y;
            var ex = e.changedTouches[0].clientX;
            var ey = e.changedTouches[0].clientY;
            var perpendicular = sy - ey
            // 수평 이동
            if ( Math.abs(sx - ex) > Math.abs(perpendicular) ) return;
            // 
            if (Math.abs(perpendicular) <= 20 ) return;
            

            var moveTop = $(window).scrollTop();
            var elmSelecter = $(".box").eq(index);
            // 양수 아래 페이지, 음수 위 페이지
            if(perpendicular > 0) { // 아래 페이지
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        $(elmSelecter).next().addClass('move'); //  휠 내렸을시 애니메이션 이벤트
                        boxIndex = $(this).next().index();
                        //console.log(boxIndex);
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            } else { // 위 페이지
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        boxIndex = $(this).prev().index();
                        //console.log(boxIndex);
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 300, complete: function () {}
            });
        }); // - end - touchend

    });
});