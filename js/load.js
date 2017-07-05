$(function(){
    var
        num = 0,
        progress = $(".load_progress .load_line"),
        load = $("#index_load"),
        index_body = $(".index_body"),
        loadScript = $("#loadScript"),
        imgList = [
        "loadLogo.png" ,
        "logo.png" ,
        "light.png" ,
        "lightsBottom.png" ,
        "iphoneer.png" ,
        "iphone.png" ,
        "aboutus.png",
        "slide6leftimg.png" ,
        "slide7_meg.png" ,
        "allBg.png" ,
        "banner.jpg" ,
        "slide2bg.png" ,
        "slide3_1.png" ,
        "slide3_2.png" ,
        "slide3_3.png" ,
        "slide4bg.png"
        ],
        len = imgList.length,
        n = 0,
        cookie = window.localStorage.getItem("load"),
        w = $(window).width();


    //循环添加地址
    for(var i=0; i<len; i++ ){
        imgList[i] = "img/" + imgList[i];
    };

    if( cookie == null ){
        firstLoad();
    }else{
        loads();
    };

    //用户第一次打开页面
    function firstLoad(){
        load.show();
        window.localStorage.setItem("load",true);
        for(var i=0; i<len; i++ ){
            var img = new Image();
            img.src = imgList[i];
            img.onload = function(){
                num++;
                n = num/len*w;
                progress.animate({
                    "width": n
                },100,"linear");
                if( num/len == 1 ){
                    loadEnd();
                };
            }
        }
    };

    //用户第二次打开页面
    function loads(){
        progress.animate({
            "width": w
        },1000,"linear",function(){
            loadEnd();
        })
    }

    //资源加载完毕 - 执行操作
    function loadEnd(){
        index_body.show();
        load.remove();
        loadScript.remove();
        $("#lights").animate({
            "bottom": "250px"
        }, 600);
        $("#lightsBtm").delay(700).animate({
            "width": "980px"
        }, 500);
    };


});