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
var navs = 1;
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
			navs = 1;
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
			}, 1000)



			$(".dspInforA").delay(1000).animate({
				"margin-left": "135px",
				"opacity": 1
			}, 500)



			$(".dspInforD").delay(1600).animate({
				"margin-top": "0px",
				"opacity": 1
			}, 800)



			$(".dspInforE").delay(1600).animate({
				"margin-top": "10px",
				"opacity": 1
			}, 800)

			var timev = null;
			var i = 0;
			$(function() {
				setTimeout(function() {
					timev = setInterval(vv, 200)
					$(".dspInforD img:first").addClass("video")

				}, 2000);
			})

			function vv() {
				$(".dspInforC ul li").eq(i).addClass("lis")
				$(".dspInforB ul li").eq(i).addClass("lis")
				i++;
				if (i >= 7) {
					clearInterval(timev)
				}
			}


		}




		// 	    		// 第三页
		if (mySwiper.activeIndex == "2") {
			$("#footerNav").animate({
				top: 0
			}, 1000)

			$(".slide_ThreeBox img").addClass("animation")



		}


	}
})





//