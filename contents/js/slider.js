
$(function() {


	/* 动态图片效果
		-----------------------------------------

	*/
	var isHover = false;
	var total = $('.camera-body div').size();
	
	$('.camera-body > div:first').fadeIn();

	setInterval(function() {
		if (!isHover) {
			cameraGo()
		}
	}, 3000);

	setTimeout(function() {
		$('.camera-btn').addClass('camera-btn-in');
	}, 400);

	function cameraGo() {
		var dockImgVal = $('.camera-dock .on').index();

		dockImgVal = dockImgVal < total-1 ? dockImgVal + 1 : 0;

		autoPlay(dockImgVal);
	}

	function autoPlay(i) {
		$('.camera-body > div').removeClass().stop(true).fadeOut(1000).eq(i).addClass('hot-pic').stop(true).fadeIn(1000);

		$('.camera-dock ul li').removeClass().eq(i).addClass('on');		
	}

	$('.camera-dock').mouseenter(function() {
		isHover = true;
	}).mouseleave(function() {
		// isHover = false;
	});

	$('.camera-dock ul li').hover(function() {
		$(this).addClass('on').siblings().removeClass();
		autoPlay($(this).index());
	});

	// 定义内部图片背景模式,支持自适应功能
	$('.camera-body > div').each(function() {
		var _src = $(this).find('img')[0].src;
		$(this).find('img').hide();
		$(this).css({
			"background-image" : 'url('+_src+')'
		})
	});

	$('.camera-btn span').click(function() {
		if(/prev/.test($(this).attr('class'))) {
			autoPlay($('.camera-dock .on').index() -1);
		} else {
			cameraGo()
		};
		isHover = true;
	});
});