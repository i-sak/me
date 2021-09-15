
// window.onload = function () { }
$(document).ready(function() {
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

    elm = ".box";
    boxCount = $(elm).length;
    
    $(elm).each(function (index) {
        delegateEvent1PageControll(this, index);
    });

    function delegateEvent1PageControll(obj, index) {
        
        // 개별적으로 Wheel 이벤트 적용
        $(obj).on("mousewheel DOMMouseScroll", function (e) {
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
                        boxIndex = $(obj).next().index();
                        
                        /*if( boxCount != boxIndex  ) $(obj).style.zindex = -5
                        $(obj).next().style.zindex = +5*/

                        ///if( boxCount != boxIndex  ) $(obj).slideUp(2000);
                        ///$(obj).next().slideDown(2000);
                        
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        boxIndex = $(obj).prev().index();
                        
                        /*if( boxCount != boxIndex  ) $(obj).style.zindex = -5
                        $(obj).prev().style.zindex = +5*/

                        ///if ( 1 != boxIndex) $(obj).slideUp(2000);
                        ///$(obj).prev().slideDown(2000);
                        
                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 700, complete: function () {
                }
            });
        }); // - end - mousewheel DOMMouseScroll

        $(obj).on("touchmove", function(e){
            e.preventDefault();
        });
        
        $(obj).on("touchstart", function(e){
            initPos();
            pos.x = e.touches[0].clientX;
            pos.y = e.touches[0].clientY;
            
        }); // - end - touchstart

        $(obj).on("touchend", function(e){
            
            var sx = pos.x;
            var sy = pos.y;
            var ex = e.changedTouches[0].clientX;
            var ey = e.changedTouches[0].clientY;
            var perpendicular = sy - ey
            // 수평 이동
            if ( Math.abs(sx - ex) > Math.abs(perpendicular) ) return;
            // 
            if (Math.abs(perpendicular) <= 10 ) return;
            

            var moveTop = $(window).scrollTop();
            
            var elmSelecter = $(".box").eq(index);
            
            // 양수 아래 페이지, 음수 위 페이지
            if(perpendicular > 0) { // 아래 페이지
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        boxIndex = $(obj).next().index();
                        
                        /*if( boxCount != boxIndex  ) $(obj).style.zindex = -5
                        $(obj).next().style.zindex = +5*/

                        //if( boxCount != boxIndex  ) $(obj).slideUp(700);
                        ///$(obj).next().slideDown(700);

                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            } else { // 위 페이지
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        boxIndex = $(obj).prev().index();
                        
                        /*if( boxCount != boxIndex  ) $(obj).style.zindex = -5
                        $(obj).prev().style.zindex = +5*/

                        ///if ( 1 != boxIndex) $(obj).slideUp(700);
                        ///$(obj).prev().slideDown(700);

                        boxLoad(boxIndex, boxCount);
                    }catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 700, complete: function () {}
            });
        }); // - end - touchend
    }



    // onReady 
    var i = 2
    playRolling = setInterval(function() {
        var li = document.querySelector("#section2 ul li:nth-child("+ i++ +")");
        // console.log(li)        
        
        var lis = document.querySelector("#section2 ul");
        
        for(var cnt = 0; cnt < lis.childElementCount; cnt ++) {
            lis.children[cnt].setAttribute("class", "box1Off");
        }
        li.setAttribute("class","box1On");

        if(i == 4) i = 1 ;


     }, 3000);
    

    
});
