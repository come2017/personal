(function(){




    var
        num = 0,
        progress = $(".load_progress .load_line"),
        load = $("#index_load"),
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
        cookie = window.localStorage.load;

    //循环添加地址
    for(var i=0; i<len; i++ ){
        imgList[i] = "img/" + imgList[i];
    };

    if( cookie == null ){
        load.show();
        firstLoad();
    }else{
        loadEnd();
    };

    //用户第一次打开页面
    function firstLoad(){
        for(var i=0; i<len; i++ ){
            var img = new Image();
            img.src = imgList[i];
            img.onload = function(){
                num++;
                n = num/len*100;
                progress.css("width", n + "%")
                if( n === 100 ){
                    loadEnd();
                };
            }
        }
    };

    //资源加载完毕 - 执行操作
    function loadEnd(){
        load.remove();
        $("#lights").animate({
            "bottom": "250px"
        }, 600)
        $("#lightsBtm").delay(700).animate({
            "width": "980px"
        }, 500)
    };


})();