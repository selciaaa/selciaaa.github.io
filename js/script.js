/* ===================================================================

 * 読み込み時・リサイズ時処理

=================================================================== */
$(function($){
	var timer = false;
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || 0;
	var nowWidth;

	// 読み込み時処理
	$(window).on('load', function(){
		spMenu();
		subNav();
		headerPadding();
		innerLinkMenu();
	});

	// リサイズ時処理
	$(window).on('resize', function(){
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			nowWidth = window.innerWidth || document.documentElement.clientWidth || 0;
			if ( windowWidth != nowWidth ) {
				spMenu();
				subNav();
				headerPadding();
				innerLinkMenu();
				windowWidth = window.innerWidth || document.documentElement.clientWidth || 0;
			}
		}, 100);
	});
});

/* ===================================================================

 * スマートフォン用メニューボタンの表示

=================================================================== */
function spMenu() {
	$('#spMenu').on('click', function(e) {
		$('.gnav').slideToggle(e);
		$('#navBtnIcon').toggleClass('close');
		$('html, body').toggleClass('lock');
	});
}

/* ===================================================================

 * サブメニューの表示

=================================================================== */
function subNav() {
	if ($('#spMenu').css('display') == 'block') {
		$('.subnav > a').off().on('click', function(e) {
			e.preventDefault();
			$(this).next('ul').slideToggle();
			$(this).parent().toggleClass('active');
		});
	} else {
		if('ontouchstart' in document) {
			$('.subnav > a').off().on('click', function(e) {
				e.preventDefault();
			});
		}
	}
}

/* ===================================================================

 * ヘッダー・メニューの余白調整

=================================================================== */
function headerPadding() {
	var headerHeight = $('header').outerHeight(true);
	$('body').css({'padding-top' : headerHeight + 'px'});
	$('nav .inner > ul').css({'top' : headerHeight + 'px'});
}

/* ===================================================================

 * スマートフォン用メニューの表示・非表示

=================================================================== */
function innerLinkMenu() {
	$('.gnav a[href^="#"]').on('click', function(e) {
		if($('#spMenu').css('display') == 'block') {
			$('.gnav').slideToggle(e);
			$('#navBtnIcon').toggleClass('close');
			$('html, body').toggleClass('lock');
		}
	});
}
