var CHASEUR = CHASEUR || {};
CHASEUR.Pages = CHASEUR.Pages || {};

/**
 * Sets up page-level Mobile experience for Chase onboarding
 * 
 * @class onboardingMobile
 * @requires slick.min.js
 */

CHASEUR.Pages.onboardingMobile = (function(){
	var $slider = $('.carousel'),
		$body = $('body'),
		defaultScrollTimeout = 1000,
		favesTimeout = defaultScrollTimeout,
		earningSummaryTimeout = defaultScrollTimeout,
		earningSummaryTop = -282,
		favoritesTop = -525,
		iPhoneAnimationTimeout = null,
		IPHONE_ANIMATION_DELAY = 500;

	/**
	 * @constructor
	 */

	function init() {
		adjustForNoMinimalUIMode();
		adjustGenericSlidePositions();
		initCarousel();
		blockCarouselDots();
	}

	/**
	 * The generic slide features the points instead
	 * of the earning summary
	 */

	function adjustGenericSlidePositions() {
		var offset = 65;

		if( $body.hasClass('generic') ) {
			earningSummaryTop = -181;
			earningSummaryTimeout = 750;
		}
	}

	/**
	 * Initializes slick carousel
	 */

	function initCarousel() {
		$slider.slick({
			dots: true,
			arrows: false,
			onAfterChange : function(slider,index){
				if (slider.currentSlide === 1) {
					popout();
				} else if (slider.currentSlide === 2) {
					earnings();
					$('.popout_nav').css('display', 'none');
				} else if (slider.currentSlide === 3) {
					faves();
				}

				// reset scroll position
				if( slider.currentSlide !== 2 ) {
					$('.iphone-bg.three').css({top: 0});
				}

				if( slider.currentSlide !== 3 ) {
					$('.iphone-bg.four').css({
						top: earningSummaryTop
					});
				}
			},
			infinite: false
		});
	}

	/**
	 * Prevents slider from being clicked by adding
	 * a blocker div that sits on top of the dots.
	 */

	function blockCarouselDots() {
		$slider.find(".slick-dots").append('<div class="blocker"></div>');
	}

	/**
	 * iOS8 fix so full-screen works properly
	 */

	function adjustForNoMinimalUIMode() {
		if( detectIOSVersion() >= 8 ) {
			backButtonLoad();
			$('html, body').scrollTop(0);
			
			$('html').addClass('no-minimal-ui-mode');

			document.ontouchmove = function(e){
				e.preventDefault();
			};
		}
	}

	/**
     * When iOS has the back button hit, it doesn't reload the page
     * this is a fix to make sure the correct state is set
     */

    function backButtonLoad() {
        $(window).on('pageshow', function(e) {
            if (e.originalEvent.persisted) {
                window.location.reload();
            }
        });
    }

	/**
	 * Outputs a float representing the iOS version if user is using an 
	 * iOS browser i.e. iPhone, iPad
	 *
	 * https://gist.github.com/Craga89/2829457
	 *
	 * @returns {Boolean|Float} false if not iOS otherwise float indicating iOS version
	 */

	function detectIOSVersion() {
		var iOS = parseFloat(
		('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
		.replace('undefined', '3_2').replace('_', '.').replace('_', '')
		) || false;

		return iOS;
	}

	/**
	 * Displays popup
	 */

	function popout(){
		displayTimeout(function() {
			$('.popout_nav').css('display', 'block');
		});
	}

	/**
	 * Animates earnings into view
	 */

	function earnings(){
		displayTimeout(function() {
			$('.iphone-bg.three').animate({ top: earningSummaryTop }, earningSummaryTimeout);
		});
	}

	/**
	 * Animates faves into view
	 */

	function faves() {
		displayTimeout(function() {
			$('.iphone-bg.four').animate({ top: favoritesTop }, favesTimeout);
		});
	}
	
	/**
	 * Clears timeout and starts delay for animation
	 */

	function displayTimeout(callback) {
		clearTimeout(iPhoneAnimationTimeout);
		iPhoneAnimationTimeout = setTimeout(function(){
			callback();
		}, IPHONE_ANIMATION_DELAY);
	}

	return {
        init: init
	};
})();

// Init
$(document).ready(function(){
	CHASEUR.Pages.onboardingMobile.init();
});