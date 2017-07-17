$(function() {
	$("#indexLeft").css("height", function() {
		var hg = $(".swiper-wrapper").height();
		return hg + "px";
	})
	$("#footerNav").css("top", function() {
		var hg = $(".swiper-wrapper").height();
		return (hg - 67) + "px";
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


var navSelect = document.getElementById('navSelect');
var selectLi = navSelect.getElementsByTagName('li');
var navCurrent = document.getElementById("navCurrent");
var navs = 2;
var curnavs = 0;
var navTime = null;
for (var i = 0; i < selectLi.length; i++) {
	selectLi[i].onmouseover = (function(num) {
		return function() {
			navs = num;
		}
	})(i);
	selectLi[i].onmouseout = (function(num) {
		return function() {
			navs = 2;
		}
	})(i);
}
navTime = setInterval(navMove, 10)

function navMove() {
	if (navCurrent.offsetLeft < 120 * navs) {
		navCurrent.style.left = navCurrent.offsetLeft + 10 + "px";
		curnavs = navs;
	} else if (navs < curnavs) {
		navCurrent.style.left = navCurrent.offsetLeft - 10 + "px";
	} else if (navs == 0) {
		if (navCurrent.offsetLeft > 0) {
			navCurrent.style.left = navCurrent.offsetLeft - 10 + "px";
		}
	}
}





$("#lights").delay(500).animate({
	"bottom": "250px"
}, 500)

$("#lightsBtm").animate({
	"width": "980px"
}, 500)
var mySwiper = new Swiper('.swiper-container', {
	speed: 1000,
	effect: 'coverflow',
	coverflow: {
		rotate: 30,
		stretch: 10,
		depth: 60,
		modifier: 2,
		slideShadows: true
	},
	direction: 'vertical',
	pagination: '.swiper-pagination',
	paginationClickable: true,
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
			}, 1000)
			$(".dspInayC i").css('top',-500);
	    	$(".dspInayC_left3").delay(1000).animate({"top":"136px"},500);
		   	$(".dspInayC_left2").delay(2000).animate({"top":"65px"},500);
		    $(".dspInayC_left1").delay(3000).animate({"top":"0px"},500);			
		    $(".dspInayC_center1").delay(1000).animate({"top":"87px"},500);	
		    $(".dspInayC_center2").delay(2000).animate({"top":"22px"},500);	

		    $(".dspInayC_right1").delay(1000).animate({"top":"101px"},500);
		    $(".dspInayC_right2").delay(2000).animate({"top":"40px"},500);
		    $(".dspInayC_right3").delay(3000).animate({"top":"-13px"},500);

		    setTimeout(function(){
	    		$(".dspInayC_icon1>ul").addClass("Infor_Fivespan1bottom");
	    	},900)

		}
		else{
	    	$(".dspInayC_icon1>em").removeClass("Infor_Fivespan1bottom");
		}
		// 第三页
		if (mySwiper.activeIndex == "2") {
			$(".dspAppB li i").mouseover(function(){
				$(this).animate({"opacity":"0.5"})
	    		$(this).addClass("Infor_Fivespan1bottom2");
			});
			$(".dspAppB li i").mouseout(function(){
				$(this).stop(true,true).animate({"opacity":"1"})
	    		$(this).removeClass("Infor_Fivespan1bottom2");
			});
		}
		// 第四页
		if (mySwiper.activeIndex == "3") {
		}

		// 第五页
		if (mySwiper.activeIndex == "4") {
            $('.dspPosn li ').mouseenter(function(){
		    	$(this).children().animate({"bottom":"0px"});
		    })
		    $('.dspPosn li ').mouseleave(function(){
		    	$(this).children().stop(true,true).animate({"bottom":"-57px"});
		    })
		};
		// 第六页
		if (mySwiper.activeIndex == "5") {
            $('.dspPosn li ').mouseenter(function(){
                $(this).children().animate({"bottom":"0px"});
            })
            $('.dspPosn li ').mouseleave(function(){
                $(this).children().stop(true,true).animate({"bottom":"-57px"});
            })

		};

	}
})