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
	});
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
var navs = 0;
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
			navs = 0;
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


var mySwiper = new Swiper('.swiper-container', {
	speed: 1000,
	effect: 'coverflow',

	coverflow: {
		rotate: 10,
		stretch: 10,
		depth: 10,
		modifier: 2,
		slideShadows: true
	},

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
				"margin-left": "94px",
				"opacity": 1
			}, 500)




			$(".dspInforB").delay(1300).animate({
				"margin-left": "14px",
				"opacity": 1
			}, 500)




			$(".dspInforC").delay(1600).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)




			$(".dspInforD").delay(1900).animate({
				"margin-left": "100px",
				"opacity": 1
			}, 500)




			$(".dspInforE").delay(2200).slideDown(1000)


		}


		// 第三页
		if (mySwiper.activeIndex == "2") {




			$(".dspCaseA").delay(300).animate({
				"margin-left": "94px",
				"opacity": 1
			}, 500)


			$(".dspCaseB").delay(600).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)


			$(".dspCaseC").delay(900).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)

			setTimeout(function() {
				$(".slide_ThreeBox ul").addClass("dspCaseD");
			}, 1200)



			$(".slide_ThreeBox ul li.li4").delay(2300).animate({
				"height": "94px"
			}, 300)


			$(".slide_ThreeBox ul li.li1").delay(2800).animate({
				"width": "154px"
			}, 500)

			$(".slide_ThreeBox ul li.li5").delay(2300).animate({
				"height": "64px"
			}, 300)


			$(".slide_ThreeBox ul li.li2").delay(2800).animate({
				"width": "310px"
			}, 500)


			$(".slide_ThreeBox ul li.li6").delay(2300).animate({
				"height": "49px"
			}, 300)


			$(".slide_ThreeBox ul li.li3").delay(2800).animate({
				"width": "170px"
			}, 500)





		}



		// 第四页
		if (mySwiper.activeIndex == "3") {

			$(".dspAddA").delay(300).animate({
				"margin-left": "135px",
				"opacity": 1
			}, 500)


			$(".dspAddB").delay(600).animate({
				"margin-left": "14px",
				"opacity": 1
			}, 500)


			$(".dspAddC").delay(900).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)



			$(".dsAdddl1").delay(1200).fadeIn(500);



			$(".dspAddimg1").delay(1500).animate({
				"margin-top": "40px"
			}, 500)


			$(".dspAdddd1").delay(1800).animate({
				"opacity": 1
			}, 500)


			$(".dsAdddiv1").delay(2100).fadeIn(500);


			$(".dsAdddl2").delay(2400).fadeIn(500);


			$(".dspAddimg2").delay(2700).animate({
				"margin-top": "40px"
			}, 500)


			$(".dspAdddd2").delay(3000).animate({
				"opacity": 1
			}, 500)



			$(".dsAdddiv2").delay(3300).fadeIn(500);


			$(".dsAdddl3").delay(3600).fadeIn(500);


			$(".dspAddimg3").delay(3900).animate({
				"margin-top": "73px"
			}, 500)



			$(".dspAdddd3").delay(4200).animate({
				"opacity": 1
			}, 500)

		}


		// 第五页
		if (mySwiper.activeIndex == "4") {
			$(".dspTelA").delay(300).animate({
				"margin-left": "168px",
				"opacity": 1
			}, 500)


			$(".dspTelB").delay(600).animate({
				"margin-left": "13px",
				"opacity": 1
			}, 500)


			$(".dspTelC").delay(900).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)


			$(".dspTelD .dspTelDMob").delay(1200).slideDown(500)


			$(".dspTelD .dspTelDBubble img").delay(1500).animate({
				"width": "278px",
				"height": "175px",
				"top": "13px"
			}, 500)


			$(".dspTelD .dspTelDBubble span").delay(1800).animate({
				"opacity": 1
			}, 500)


			$(".dspTelD ul").delay(2100).animate({
				"margin-top": "200px",
				"opacity": 1
			}, 500)

		}



		// 第六页
		if (mySwiper.activeIndex == "5") {

			$(".dspAboutA").delay(300).animate({
				"margin-left": "168px",
				"opacity": 1
			}, 500)


			$(".dspAboutB").delay(600).animate({
				"margin-left": "13px",
				"opacity": 1
			}, 500)


			$(".dspAboutC").delay(900).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)

			setTimeout(function() {
				$(".slidesixab").attr("id", "dspAboutD")
			}, 1200)



		}




		// 第七页
		if (mySwiper.activeIndex == "6") {

			$(".dspZxA").delay(300).animate({
				"margin-left": "168px",
				"opacity": 1
			}, 500)


			$(".dspZxB").delay(600).animate({
				"margin-left": "13px",
				"opacity": 1
			}, 500)


			$(".dspZxC").delay(900).animate({
				"margin-left": "0px",
				"opacity": 1
			}, 500)


			$(".dspZxD").delay(1200).animate({
				"opacity": 1
			}, 500)

			setTimeout(function() {
				console.log(1);
				$(".dspZxDimg2").addClass("dspZxDimghover2");
			}, 1200)



		}


	}
})