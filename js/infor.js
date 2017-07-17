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
};

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





$("#lights").animate({
	"bottom": "250px"
}, 600)

// setInterval(lighter,600)

// function lighter(){
// 	$("#lights").animate({
// 		"width":"400px","height":"550px",
// 		"margin-left":"-200px",
// 		"bottom":"20px"
// 	},500).animate({
// 		"width":"306px",
// 		"height":"447px",
// 		"margin-left":"-150px",
// 		"bottom":"70px"
// 	},500);
// }


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

			$(".InforImg img").delay(600).animate({
				"width": "308px",
				"height": "355px",
				"margin-top": "0"
			}, 1000);


			$(".Infor_Twodl1").delay(1200).animate({
				"left": "240px",
				"top": "364px",
				"opacity": 1
			}, 500);

			$(".Infor_Twodl2").delay(1200).animate({
				"left": "470px",
				"top": "238px",
				"opacity": 1
			}, 500);

			$(".Infor_Twodl3").delay(1200).animate({
				"left": "700px",
				"top": "360px",
				"opacity": 1
			}, 500);

			$(".Infor_Twodl4").delay(1200).animate({
				"left": "700px",
				"bottom": "220px",
				"opacity": 1
			}, 500);

			$(".Infor_Twodl5").delay(1200).animate({
				"left": "470px",
				"bottom": "96px",
				"opacity": 1
			}, 500);


			$(".Infor_Twodl6").delay(1200).animate({
				"left": "240px",
				"top": "615px",
				"opacity": 1
			}, 500);





			$(".Infor_TwoBox dt").mouseover(function() {
				$(this).addClass("Infor_Twodt");
			})


			$(".Infor_TwoBox dt").mouseout(function() {
				$(this).removeClass("Infor_Twodt");
			})

			$(".Infor_Twomdimg").mouseover(function() {
				$(".Infor_TwoBox dl dt").addClass("Infor_Twodt");
			})
			$(".Infor_TwoBox").mouseout(function() {
				$(".Infor_TwoBox dl dt").removeClass("Infor_Twodt");
			})



		}


		// 第三页
		if (mySwiper.activeIndex == "2") {
			// $(".Infor_Threeimg0").delay(600).animate({"margin-top":"210px","opacity":"1"},600)
			setTimeout(function() {
				$(".Infor_Threeimg0").addClass("Infor_Threeimg0sl");
			}, 600)

			$(".Infor_ThreeDiv p").delay(1600).animate({
				"opacity": "1"
			}, 1000)

			setTimeout(function() {
				$(".Infor_Threeimger").addClass("Infor_ThreeimgY");
			}, 1400)

			$(".Infor_ThreeDiv span").mouseover(function() {
				$(this).addClass("Infor_ThreeimgS");
			})


		}

		// 第四页
		if (mySwiper.activeIndex == "3") {

			setTimeout(function() {
				$(".Infor_FourBoxTop div").attr("id", "Infor_FourBoxs");
			}, 600)

			$(".Infor_Fourbtm1").delay(1600).animate({
				"margin-left": "47px",
				"width": "457px"
			}, 600)

			setTimeout(function() {
				$(".Infor_Fourbtm2").addClass("Infor_Fourbtmer");
			}, 2100)

			$(".Infor_Fourbtm3").delay(2600).animate({
				"width": "238px"
			}, 600)

			setTimeout(function() {
				$(".Infor_Fourbtm4").addClass("Infor_Fourbtmer");
			}, 3000)

			$(".Infor_Fourbtm5").delay(3400).animate({
				"width": "182px"
			}, 300)

			setTimeout(function() {
				$(".Infor_Fourbtm6").addClass("Infor_Fourbtmer");
			}, 3800)



		}


		// 第五页
		if (mySwiper.activeIndex == "4") {



			$(".Infor_Fivebg").delay(600).animate({
				"width": "695px"
			}, 2500)

			setTimeout(function() {
				$(".Infor_Fivebg1 span").addClass("Infor_Fivespan1");
			}, 500)

			$(".Infor_Fivebg1 div").delay(1200).animate({
				"height": "120px"
			}, 600)


			setTimeout(function() {
				$(".Infor_Fivebg2 span").addClass("Infor_Fivespan1bottom");
			}, 900)

			$(".Infor_Fivebg2 div").delay(1600).animate({
				"height": "190px"
			}, 600)



			setTimeout(function() {
				$(".Infor_Fivebg3 span").addClass("Infor_Fivespan1");
			}, 1600)

			$(".Infor_Fivebg3 div").delay(2200).animate({
				"height": "190px"
			}, 600)


			setTimeout(function() {
				$(".Infor_Fivebg4 span").addClass("Infor_Fivespan1top");
			}, 2200)

			$(".Infor_Fivebg4 div").delay(2500).animate({
				"height": "190px"
			}, 600)
		}



		// 第六页
		if (mySwiper.activeIndex == "5") {

			$(".Infor_SixBox dl").delay(500).animate({
				"height": "400px"
			}, 600)

		}

		// 第七页
		if (mySwiper.activeIndex == "6") {

			$(".Infor_Sevenjt1").delay(500).animate({
				"width": "860px"
			}, 1000)


			$(".Infor_Sevenjt2").delay(1500).animate({
				"height": "131px"
			}, 400)

			$(".Infor_Sevenjt3").delay(1900).animate({
				"width": "774px"
			}, 1000)

			$(".Infor_SevenY1").delay(300).fadeIn(500)

			$(".Infor_SevenY2").delay(600).fadeIn(500)

			$(".Infor_SevenY3").delay(900).fadeIn(500)

			$(".Infor_SevenY4").delay(1200).fadeIn(500)

			$(".Infor_SevenY5").delay(1500).fadeIn(500)

			$(".Infor_SevenY6").delay(1800).fadeIn(500)
			$(".Infor_SevenY7").delay(2100).fadeIn(500)
			$(".Infor_SevenY8").delay(2500).fadeIn(500)
			$(".Infor_SevenY9").delay(2800).fadeIn(500)
			$(".Infor_SevenY10").delay(3100).fadeIn(500)


		}

		// 
		if (mySwiper.activeIndex == "7") {

			var pieData = [{
					value: 10,
					color: "#6b439c"

				}, {
					value: 10,
					color: "#ae4097"
				}, {
					value: 10,
					color: "#e44298"
				}, {
					value: 10,
					color: "#ee1b24"
				}

				, {
					value: 8,
					color: "#f57025"
				}, {
					value: 6,
					color: "#f78e23"
				}, {
					value: 6,
					color: "#ffc010"
				}, {
					value: 5,
					color: "#ffc010"
				}, {
					value: 5,
					color: "#d0c700"
				}, {
					value: 5,
					color: "#6bc100"
				}, {
					value: 5,
					color: "#01a88e"
				}, {
					value: 5,
					color: "#008ecc"
				}, {
					value: 5,
					color: "#0655a4"
				}, {
					value: 5,
					color: "#83cb12"
				}, {
					value: 5,
					color: "#5ebff6"
				}, {
					value: 5,
					color: "#7d0022"
				}, {
					value: 4,
					color: "#a40035"
				}, {
					value: 4,
					color: "#00736d"
				}, {
					value: 4,
					color: "#81511c"
				}, {
					value: 4,
					color: "#007130"
				}, {
					value: 3,
					color: "#a84200"
				}, {
					value: 2,
					color: "#b7aa00"
				}, {
					value: 1,
					color: "#eb6100"
				}, {
					value: 1,
					color: "#ac6a00"
				}



			];


			var ctx = document.getElementById("myChart").getContext("2d");
			window.myPie = new Chart(ctx).Pie(pieData);

		}
		// 第九页


		if (mySwiper.activeIndex == "8") {
			$(".Infor_NineBox h2").animate({
				width: 300
			}, 2000)

			var timemtimg = null;
			var timg = 0;

			$(function() {
				setTimeout(function() {
					timemtimg = setInterval(mtimg, 500)

				}, 50);
			})

			function mtimg() {
				$(".Infor_NineBox .mt img").eq(timg).addClass("mtimg")
				timg++;
				if (timg >= 2) {
					clearInterval(timemtimg)
				}
			}

			var timemtli = null;
			var tli = 0;

			$(function() {
				setTimeout(function() {
					timemtli = setInterval(mtli, 50)

				}, 500);
			})

			function mtli() {
				$(".Infor_NineBox .mt ul li").eq(tli).addClass("liss")
				tli++;
				if (tli >= 25) {
					clearInterval(timemtli)
				}
			}

			var timemt = null;

			var t = 0;
			$(function() {
				setTimeout(function() {
					timemt = setInterval(mt, 50)

				}, 500);
			})

			function mt() {
				$(".Infor_NineBox table tr td").eq(t).addClass("tt")
				t++;
				if (t >= 25) {
					clearInterval(timemt)
				}
			}
		}


		// 第十页

		if (mySwiper.activeIndex == "9") {
			$(".Infor_TenBox h2").animate({
				width: 650
			}, 2000)

			var timekh = null;
			var i = 0;

			$(function() {
				setTimeout(function() {
					timekh = setInterval(kh, 300)

				}, 500);
			})

			function kh() {
				$(".Infor_TenBox img").eq(i).addClass("kh")
				i++;
				if (i >= 6) {
					clearInterval(timekh)
				}
			}
		}
	}
})