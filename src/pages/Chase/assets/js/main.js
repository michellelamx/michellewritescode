var CHASEUR = CHASEUR || {};
CHASEUR.Pages = CHASEUR.Pages || {};

/**
 * Sets up page-level Desktop experience for Chase onboarding
 * A parallax-y experience which highlights how to use
 * the rewards site. 
 * 
 * @class onboardingDesktop
 * @requires jquery.touchSwipe
 * @requires mousewheel-support.js
 * @requires skrollr
 */

CHASEUR.Pages.onboardingDesktop  = (function(){

	var $body = $('body'),
		$nextBtns = $('.next_button'),
		numSlides = $("#primary a").length,
		ipadVideo = $('#ipadvideo').get(0),
		scroller = null,
		circle = $('.circle-link'),
		firstSideBar = $('.sidebar.one'),
		scrollTop = $(window).scrollTop(),
		screenTwo = $('.wrapper.two')[0],
		videoInitialized = false,
		currentSlide = 0,
		isScrollingLocked = false,
		slideDirection = null,
		bounceTimeout = null,
		pauseTimeout = null,
		basicScroll = false,
		DIRECTION_UP = "up",
		DIRECTION_DOWN = "down",
		ACTIVE_CLASS = "active";

	/**
	 * keyframesData Specifies skrollr top value as well 
	 * as from and to which inform the video what 
	 * segment to play
	 */
	var keyframesData = [
		{ scrollPos: 0 },
		{ scrollPos: 1800, from: 0, to: 3 },
		{ scrollPos: 4000, from: 3, to: 7.6 },
		{ scrollPos: 6000, from: 7.6, to: 10.5 },
		{ scrollPos: 8000, from: 10.5, to: 20 },
		{ scrollPos: 10000 },
		{ scrollPos: 12000 },
		{ scrollPos: 15000 },
		{ scrollPos: 17500 }
	];

	var noEarningSummaryKeyframes = [
		{ scrollPos: 0 },
		{ scrollPos: 1800, from: 0, to: 3 },
		{ scrollPos: 4000, from: 3, to: 7.6 },
		{ scrollPos: 8000, from: 7.6, to: 14 },
		{ scrollPos: 10000 },
		{ scrollPos: 12000 },
		{ scrollPos: 15000 },
		{ scrollPos: 17500 }
	];
	
	/**
	 * @constructor
	 */

	function init() {
		var unsupportedExperience = $('html').hasClass('ie8');

		basicScroll = isBasicScrollMode();

		if( ! unsupportedExperience ) {
			if( ! $body.hasClass('has-earning-summary') ) {
				keyframesData = noEarningSummaryKeyframes;
			}

			setSlideId();		
			bindSwipe();
			bindMouseWheel();
			bindSlideDownButton();
			bindOrientationChange();

			// iPad won't .play() video otherwise
			dummyInteraction();

			// set up landing page
			setupSkrollr();
			setupNextButtons();
		}
	}

	/**
	 * Binding the slide call to action to a click
	 * in case the user decides to click it by mistake. 
	 */

	function bindSlideDownButton() {
		$(".next-page").click(function(e) {
			e.preventDefault();

			isScrollingLocked = true;
			slideDirection = DIRECTION_DOWN;
			gotoKeyframe(1);
		});
	}

	/**
	 * Sets up jquery.touchSwipe event to move slides up 
	 * and down on swipe
	 */

	function bindSwipe() {
		$body.swipe( {
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				if( isScrollingLocked === false ) {
					isScrollingLocked = true;

					if( direction === DIRECTION_UP && currentSlide < numSlides - 1) {
						slideDirection = DIRECTION_DOWN;
						currentSlide++;
						gotoKeyframe(currentSlide);
					} else if ( direction === DIRECTION_DOWN && currentSlide > 0 ) {
						slideDirection = DIRECTION_UP;
						currentSlide--;
						gotoKeyframe(currentSlide);
					} else {
						// ensures if user only clicks, scrolling doesn't lock
						isScrollingLocked = false;
					}
				}
			},
			fallbackToMouseEvents: false,
			threshold: 50
		});
	}

	/**
	 * Adds jquery.mousewheel event to move slides up
	 * and down based on mouse wheel event
	 */

	function bindMouseWheel() {
		var SCROLL_THRESHOLD = 1;

		addWheelListener($body.get(0), function( e ) { 
			if( isScrollingLocked === false ) {
				isScrollingLocked = true;

				if( e.deltaY <= -SCROLL_THRESHOLD && currentSlide > 0 ) {
					slideDirection = DIRECTION_UP;
					currentSlide--;
					gotoKeyframe(currentSlide);
				} else if( e.deltaY > SCROLL_THRESHOLD && currentSlide < numSlides - 1) {
					slideDirection = DIRECTION_DOWN;
					currentSlide++;
					gotoKeyframe(currentSlide);
				} else {
					isScrollingLocked = false;
				}
			}
		});
	}

	/**
	 * Jumps to a particular slide
	 */

	function gotoKeyframe(keyframe) {
		// setting currentSlide in case user jumps around
		currentSlide = keyframe;
		setSlideId();
		ipadVideo.pause();
		clearTimeout(bounceTimeout);

		var keyFrameData = keyframesData[keyframe],
			scrollPosition = keyFrameData.scrollPos;

		$(".next_button").not(".next_button.five").hide();

		scrollTo(scrollPosition, function() {
			if( typeof keyFrameData.from !== "undefined" && typeof keyFrameData.to !== "undefined" ) {
				if( slideDirection === DIRECTION_DOWN ) {
					playSegment(ipadVideo, keyFrameData.from, keyFrameData.to, function() {
						isScrollingLocked = false;
						$(".next_button").fadeIn( "slow");
						startBounceTimeout();
					});
				} else {
					jumpToVideoTime(ipadVideo, keyFrameData.to);
					isScrollingLocked = false;
					$(".next_button").fadeIn( "slow");
					startBounceTimeout();
				}
			} else {
				isScrollingLocked = false;
				$(".next_button").fadeIn("fast");
				startBounceTimeout();
			}
		});

		// Allows user to scroll up quickly, only
		// locks on the way down
		if( slideDirection === DIRECTION_UP ) {
			if( currentSlide === 0 ) {
				jumpToVideoTime(ipadVideo, 0);	
			}

			setTimeout(function() {
				isScrollingLocked = false;
			}, 1000);
		}

		setSlideIndicator(currentSlide);
	}

	/**
	 * Adds id to .wrap to identify which slide is displaying
	 */

	function setSlideId() {
		$(".wrap").attr("id", "slide-" + currentSlide);
	}

	/**
	 * Bounce the next button if the user sits idle
	 */
	
	function startBounceTimeout() {
		bounceTimeout = setTimeout(function() {
			$('.next_button').effect('bounce', { 
				distance: 70 
			}, 1000);
		}, 5000);
	}

	/**
	 * iPad won't .play() video unless it's triggered by a user
	 * interaction... such as clicking a play button etc...
	 * In this case, we use touchstart to play/pause the video as a workaround
	 */

	function dummyInteraction() {
		$body.on("touchstart", function() {
			if( videoInitialized === false ) {
				ipadVideo.play();
				ipadVideo.pause();
				videoInitialized = true;
			}
		});
	}

	/**
	 * Bind data-values of sections to next buttons
	 */

	function setupNextButtons() {
		$nextBtns.on("click", function(e) {
			e.preventDefault();

			var pos = (currentSlide + 1),
				$target = $(e.target);

			isScrollingLocked = true;
			slideDirection = DIRECTION_DOWN;
			
			if( ! $target.hasClass("five") ) {
				$target.fadeOut("fast", function() {
					gotoKeyframe(pos);
				});
			} else {
				gotoKeyframe(pos);
			}
		});
	}

	/**
	 * Scrolls to a given position
	 *
	 * @param {Number} pos - scroll top position to animate to
	 */

	function scrollTo(pos, callback) {
		if( basicScroll === true ) {
			scroller.setScrollTop(pos, true);
			callback();
		} else {
			scroller.animateTo(pos, {
				done: callback,
				easing: "swing",
				duration: 1000
			});	
		}
	}

	/**
	 * Turns off all active slide indicators, and then 
	 * turns on the one specified. 
	 * 
	 * @param {Number} num - slide indicator to active
	 */
	
	function setSlideIndicator(num) {
		var $slideIndicators = $("#primary a"),
			$activeSlide = $("#primary a.active");		

		$activeSlide.removeClass(ACTIVE_CLASS);
		$slideIndicators.eq(num).addClass(ACTIVE_CLASS);	
	}

	/**
	 * Initialize skrollr, play/pause the video on each slide, 
	 * and pause scrolling while video plays
	 */

	function setupSkrollr() {
		firstSideBar.css('display', 'block');

		scroller = skrollr.init({
			animate: true,
			duration: 10000,
			easing: 'swing',
			smoothScrolling: true,
			mobileCheck: function() {
				return false;
			}
		});

		$(window).load(function() {
			scroller.setScrollTop(0, true);
		});

		$(window).on('beforeunload', function() {
			scroller.setScrollTop(0, true);
		});
	}

	/**
	 * Plays a portion of the video and then executes callback when complete
	 *
	 * @param {DomElement} player - HTML video DOM element
	 * @param {Number} from - start time
	 * @param {Number} to - end time
	 * @param {Function} callback - method to execute upon playing the segment
	 */

	function playSegment(player, from, to, callback) {
		var player = player || null,
			playDurationMillis = 1000 * (to - from),
			callback = callback || $.noop;

		if( player !== null && from !== null && to !== null ) {
			if( Math.abs(player.currentTime - from) > 1 ) {
				player.currentTime = from;
			}

			player.play();

			setTimeout(function() {
				// fallback just in case the video didn't pause
				player.pause();	
				
				callback();
			}, playDurationMillis);
		}
	}

	/**
	 * Plays a portion of the video and then executes callback when complete
	 *
	 * @param {DomElement} player - HTML video DOM element
	 * @param {Number} to - end time
	 */

	function jumpToVideoTime(player, to) {
		var player = player || null,
			playEndInMillis = 1000 * to;

		if( player !== null && to !== null ) {
			player.currentTime = to;
		}
	}

	/**
	 * Orientation change events
	 */

	function bindOrientationChange() {
		window.addEventListener("orientationchange", function() {
			// Ensures the correct scroll position is present on change
			scroller.setScrollTop(keyframesData[currentSlide].scrollPos, true);
		}, false);
	}

	/**
	 * Informs the code to jump to positions instead of scroll
	 * this mode is so some unsupported devices still look ok. 
	 *
	 * @returns {Boolean}
	 */

	function isBasicScrollMode() {
		var iOsVersion = detectIOSVersion();

		if( iOsVersion !== false && iOsVersion < 7.0 ) {
			return true;
		} else {
			return false;
		}
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

	return {
		init: init
	};
	
})();

// Init
$(document).ready(function(){
	CHASEUR.Pages.onboardingDesktop.init();
});