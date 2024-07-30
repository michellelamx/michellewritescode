var CHASEUR = CHASEUR || {};
CHASEUR.Pages = CHASEUR.Pages || {};

/**
 * @class onboardingDesktopIE
 */ 

CHASEUR.Pages.onboardingDesktopIE  = (function(){

	var $body			= $('body'),
		$nextBtns 		= $('.next_button'),
		circle			= $('.circle-link'),
		scrollTop		= $(window).scrollTop();
	
	/**
	 * @constructor
	 */ 

	function init() {
		// set up landing page
		$body.height(14045);
		
		setupNextButtons();
		setupScrollIndicators();

		skrollr.init({
			animate: true,
			duration: 100,
			easing: 'sqrt',
			smoothScrolling: true
		});
	}

	
	/**
	 * Bind data-values of sections to next buttons
	 */ 

	function setupNextButtons() {
		$nextBtns.click(function(e) {
			e.preventDefault();

			var pos = $(this).attr('_scrollPos');
			
			$('html, body').stop().animate({
				scrollTop: pos
			}, 1000, 'easeInOutExpo');
		});
	}

	/**
	 * Setup carousel buttons on right
	 */ 

	function setupScrollIndicators() {
		$(window).scroll(function() {
			$('#primary ul li a.active').removeClass('active');

			var scrollTop = $(window).scrollTop();
			var lastOne = circle[0];
			var lastPos = circle.last().attr('_scrollPos') - 10;

			circle.each(function(index) {
				var top = parseInt($(this).attr('_scrollPos')) - 10; // a little safety padding

				if(scrollTop === 0){
					$('#primary ul li a.active').removeClass('active');
				} else if(scrollTop <= top) {
					$(lastOne).addClass('active');
					return false;
				} else if (scrollTop >= lastPos) {
					circle.last().addClass('active');
					return false;
				}

				lastOne = this;
			});
		});
	}

	
	return {
		init: init
	};

})();

$(document).ready(function(){
	CHASEUR.Pages.onboardingDesktopIE.init();
});