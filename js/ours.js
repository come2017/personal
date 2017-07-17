$(function() {

	var hg = $("#indexLeft").height();
	$("#footerNav").css("top", hg - 66 + "px")

});


$(function() {
	$('.input2 label').click(function() {
		$(".input2 label").each(function() {
			$(this).removeAttr('class');

		})
		$(".input2 input").each(function() {
			$(this).removeAttr("checked");
		})

		$(this).attr('class', 'checked');
		$(this).prev().attr("checked", "checked");
	});
});

$(function() {
	$('.yuji label').click(function() {
		$(".yuji label").each(function() {
			$(this).removeAttr('class');

		})
		$(".yuji input").each(function() {
			$(this).removeAttr("checked");
		})

		$(this).attr('class', 'checked');
		$(this).prev().attr("checked", "checked");
	});
});

$(".inp2").attr("disabled", "false");

$("#lab3").click(function() {
	$(".inp2").removeAttr("disabled");
})


$(".inp2").blur(function() {
	$(".inp2").attr("disabled", "false");
})




$(window).scroll(function() {
	if ($(window).scrollTop() >= 100) {

		$("#footerNav").stop(true, true).animate({
			"top": "0px"
		}, 500);
	} else {
		var hg = $("#indexLeft").height();
		$("#footerNav").stop(true, true).animate({
			"top": hg - 66 + "px"
		}, 500);
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
var navs = 4;
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
			navs = 4;
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
	"bottom": "80px"
}, 600)


$("#lightsBtm").delay(700).animate({
	"width": "980px"
}, 500)




var re0 = /^[\u4e00-\u9fa5]{2,4}$/;
var re1 = /^[1][34578][0-9]{9}$/i;
var re2 = /^[a-zA-Z0-9_]{2,10}@[a-z0-9]{2,5}\.[a-z]{2,5}$/i;
var ree = [re0, re1, re2];
$("#toper").animate({
	top: 0
}, 500);

function pd() {
	var aa = trim($('.inp').eq(0).val());
	var bb = trim($('.inp').eq(1).val());
	var cc = trim($('.inp').eq(2).val());
	if (aa != "" && bb != "" && cc != "") {
		$('.sub2').eq(0).addClass("inpinput");
	} else {
		$('.sub2').eq(0).removeClass("inpinput");
	}
}
setInterval(pd, 10);

function trim(str) {
	var a = str.replace(/(^\s*)|(\s*$)/g, "");
	return a;
}

function getLength(str) {
	str = getValue1(str);
	return String(str).replace(/[^\x00-\xff]/g, 'cc').length;
}

function getValue1(str) {
	return String(str).replace(/(^\s*)|(\s*$)|(\s*)/g, '');
}

$('.txt textarea').focusout(function() {
	$('i').html("");
})

function yz(index) {
	if (ree[index].test($('.inp').val())) {
		$('.inp').eq(index).css('border', '1px white solid');
	} else {
		$('.inp').eq(index).css('border', '1px red solid');
	}
}