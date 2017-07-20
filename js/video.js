$(function() {

	$("#indexLeft").css("height", function() {
		var hg = $(".swiper-wrapper").height();
		return hg + "px";
	})
	$("#footerNav").css("top", function() {
		var hg = $(".swiper-wrapper").height();
		return (hg - 66) + "px";
	})
	$(".swiper-container").css("width", function() {
		var wid = $("body").width() - $("#indexLeft").width();
		return wid + "px";
	})
	window.onresize = function() {
		$("#indexLeft").css("height", function() {
			var hg = $(".swiper-wrapper").height();
			return hg + "px";
		})
		$(".swiper-container").css("width", function() {
			var wid = $("body").width() - $("#indexLeft").width();
			return wid + "px";
		})
	}

});

(function(){
    //初始化时间
    var myDate = new Date();
    var Years = myDate.getFullYear();
    var Months = myDate.getMonth() + 1;
    var Dates = myDate.getDate();
    var Times = Years + "年" + Months + "月" + Dates + "日";
    $(".calendar span").empty().append(Times);
})();

//导航
(function(){
    var navSelect = $("#navSelect"),
        selectLi = navSelect.find("li"),
        navCurrent = $("#navCurrent"),
        navs = 2,
        curnavs = 0,
        num = 120;

    animas( navs );

    selectLi.on("mouseover" , function(){
        curnavs = $(this).index() - 1;
        animas( curnavs )
    });
    selectLi.on("mouseout" , function(){
        animas( navs )
    });

    function animas( type ){
        navCurrent.stop().animate({
            left : type * num + "px"
        });
    };
})();

$("#lights").animate({
	"bottom": "250px"
}, 600)

$("#lightsBtm").delay(700).animate({
	"width": "980px"
}, 500)

var mySwiper = new Swiper('.swiper-container', {
	speed: 1000,
	effect: 'fade',
	direction: 'vertical',

	keyboardControl: true,
	mousewheelControl: true,

	onSlideChangeStart: function(swiper) { //滑动start判断当前页面  

		//滑动start判断当前页面  end
		// 第一页
		if (mySwiper.activeIndex == "0") {
			var hg = $(".swiper-wrapper").height();
			$("#footerNav").animate({
				top: (hg - 66) + "px"
			}, 1000);
		}


		// 第二页
		if (mySwiper.activeIndex == "1") {
			$("#footerNav").animate({
				top: 0
			}, 1000);



		}


	}
})





//