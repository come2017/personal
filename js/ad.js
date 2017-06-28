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

})



var time = null;

function today() {
	var myDate = new Date();
	var Years = myDate.getFullYear();
	var Months = myDate.getMonth() + 1;
	var Dates = myDate.getDate();
	var Times = Years + "年" + Months + "月" + Dates + "日";
	$(".calendar span").empty().append(Times);
}
time = setInterval(today, 1000)



var navSelect = document.getElementById('navSelect');
var selectLi = navSelect.getElementsByTagName('li');
var navCurrent = document.getElementById("navCurrent");
var navs = 3;
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
			navs = 3;
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
	"bottom": "80px"
}, 500)

//setInterval(lighter, 600)
//
//function lighter() {
//	$("#lights").animate({
//		"width": "400px",
//		"height": "550px",
//		"margin-left": "-200px",
//		"bottom": "20px"
//	}, 300).animate({
//		"width": "306px",
//		"height": "447px",
//		"margin-left": "-150px",
//		"bottom": "70px"
//	}, 300);
//}


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
			$(".T2thdisplay").animate({
				opacity: 1
			}, 2000)
		}

		//第三页
		if (mySwiper.activeIndex == "2") {
			var ps1 = $(".T3one span").eq(0);
			var ps2 = $(".T3one span").eq(1);
			var ps3 = $(".T3three span").eq(0);
			var ps1img = $(".T3one div").eq(0);
			var ps2img = $(".T3one div").eq(1);
			var ps3img1 = $(".T3three div").eq(0);
			var ps3img2 = $(".T3three div").eq(1);
			$(".arrow").animate({ //箭头
				height: "420px"
			}, 3000)
			$(function() { //三个标签添加样式
				setTimeout(function() {
					$(ps1).addClass("ps1")
				}, 700)
			})
			$(function() {
				setTimeout(function() {
					$(ps2).addClass("ps2")
				}, 2100)
			})
			$(function() {
				setTimeout(function() {
					$(ps3).addClass("ps3")
				}, 1400)
			})

			$(function() { //几个块
				setTimeout(function() {
					$(ps1img).addClass("ps1-img")
				}, 1100)
			})
			$(function() {
				setTimeout(function() {
					$(ps2img).addClass("ps2-img")
				}, 2500)
			})
			$(function() {
				setTimeout(function() {
					$(ps3img1).addClass("ps3-img1")
				}, 1800)
			})
			$(function() {
				setTimeout(function() {
					$(ps3img2).addClass("ps3-img2")
				}, 1900)
			})
		}


		//第四页
		if (mySwiper.activeIndex == "3") {
			// $(".outer").hover(function(){
			// 	$(".inner").animate({marginTop:"-60px"},1000)
			// },function(){
			// 	$(".inner").animate({marginTop:"0px"},1000)
			// })
			var active = $(".inner");
			active.each(function(index, obj) {
				console.log(index);
				console.log(obj);
				$(obj).hover(function() {
					$(this).animate({
						marginTop: "-60px"
					}, 500)
				}, function() {
					$(this).animate({
						marginTop: "0px"
					}, 500)
				})
			})
		}

		//第五页


	},
	onSlideChangeEnd: function(swiper) {
		//第一页
		// if(mySwiper.activeIndex != "0"){
		// 	$("#lights").css({"bottom":"-447px","left":"50%","margin-left":"-150px","position":"absolute"})
		// 	$("#lightsBtm").css({"bottom":"80px","left":"50%","margin-left":"-490px","position":"absolute","width":"0px","float":"left"})
		// }

		//第二页
		if (mySwiper.activeIndex != "1") {
			$(".T2thdisplay").css({
				"opacity": "0"
			})
		}



	}
})