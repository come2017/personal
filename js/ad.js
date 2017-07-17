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
	"bottom": "250px"
}, 500);


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

		//第二页
		if (mySwiper.activeIndex == "1" ) {
            Grup( mySwiper.activeIndex );
		};

        //第三页
        if (mySwiper.activeIndex == "2" ) {

            Grup( mySwiper.activeIndex );
        };

        //第四页
        if (mySwiper.activeIndex == "3" ) {

            Grup( mySwiper.activeIndex );
        };


        //第五页
        if (mySwiper.activeIndex == "4" ) {

            Grup( mySwiper.activeIndex );
        };

	},
	onSlideChangeEnd: function(swiper) {

		//第二页
		if (mySwiper.activeIndex != "1") {
			$(".T2thdisplay").css({
				"opacity": "0"
			})
		}

	}

});

//成长经历
function Grup( index ){
    var grup = $(".swiper-slide:eq("+index+")").find(".grupUp");
    var
        n1 = 0,
        n2 = 0,
        h = grup.find(".ps_con:eq(0)").outerHeight(),
        len = grup.find(".ps_con").length,

        timer1 = null;

    grup.find(".arrow").animate({ //箭头
        height: h * len + "px"
    }, 4000);

    timer1 = setInterval(function(){
        if( n1 > len ){
            clearInterval( timer1 );
            return;
        };
        //标题运动
        if( n1%2 ){
            n2 = ( n1 - 1 ) / 2 ;
            grup.find(".grupUpRight span:eq("+n2+")").css({
                opacity:1,
                WebkitAnimation: "bounceInRight 1s .2s ease both",
                MozAnimation: "bounceInRight 1s .2s ease both"
            });
            //块级内容运动
            setTimeout(function() {
                grup.find(".grupUpRight div:eq("+n2+")").css({
                    WebkitAnimation: "pulse 1s .2s ease both",
                    MozAnimation: "pulse 1s .2s ease both"
                });
            }, 300);
        }else{
            n2 = n1/2;
            grup.find(".grupUpLeft span:eq("+n2+")").css({
                opacity:1,
                WebkitAnimation: "bounceInLeft 1s .2s ease both",
                MozAnimation: "bounceInLeft 1s .2s ease both"
            });
            //块级内容运动
            setTimeout(function() {
                grup.find(".grupUpLeft div:eq("+n2+")").css({
                    WebkitAnimation: "pulse 1s .2s ease both",
                    MozAnimation: "pulse 1s .2s ease both"
                });
            }, 300);
        };

        n1++;

    },700);


}