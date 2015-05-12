'use strict';
/*
*CSS Animated Hamburger Icon (click on hamburger)
*/
(function() {
	var $navToggle = $('#nav-toggle'),
		$getInvolved = $('#get-involved'),
		$body = $('body');

	if($navToggle.length > 0 || $getInvolved.length > 0) {
		$navToggle.on( 'click', function() {
		    $(this).toggleClass( 'active' );
		    $body.toggleClass('menuShowed'); //Show/Hide fixed menu
		});

		$getInvolved.on( 'click', function() {
		    $navToggle.toggleClass( 'active' );
		    $body.toggleClass('menuShowed'); //Show/Hide fixed menu
		});
	}

	// if we clicked on anchor of the menu in main page than menu should close
	if($('.main-page').length > 0) {
		$('.vertical-menu a').on('click', function() {
			$body.toggleClass('menuShowed'); //Show/Hide fixed menu
			$navToggle.toggleClass( 'active' );
		});
	}
}());

/*
* Show contect in main page. Block about "secret"
*/
(function() {
	var $linkShow = $('#link-show-secret'),
		$blogHeart = $('#blog-heart');

	$linkShow.on('click', function() {
		$blogHeart.addClass('content-showed');
	});
}());

/*
* Show contect in main page. Form of contact
*/
(function() {
	var $blockContacts = $('#block-contacts'),
		$openForm = $('#open-form');

	$openForm.on('click', function() {
		$blockContacts.addClass('form-opened');
	});

}());



/* scroll to  */
(function() {
   $('a[href^="#anchor-"]').click(function(){
        var target = $(this).attr('href');

        if( target !== '#' ) {
        	$('html, body').animate({scrollTop: $(target).offset().top}, 500);
        	return false; 
        }
   }); 
}());



/* Select */
(function() {
	var $selectBeast = $('#select-beast');

    if($selectBeast.length > 0) {
        $selectBeast.selectmenu({
          width: '100%',
          change: function( event, ui ) {
            var city = ui.item.label,
                $checkboxList = $('.checkboxList');

            $checkboxList.hide();
            $('#' + city.toLowerCase()).show(400);
          }
        });
    }
}());


// carousel
(function() {
	var $carousel = $('.carousel');
	if ($carousel.length > 0) {
		$('.carousel').carousel({interval: 0});
	}
}());


// carousel
(function() {
	var $slider1 = $('.slider1');
	if ($slider1.length > 0) {
		$slider1.bxSlider({
                slideWidth: 200,
                minSlides: 1,
                maxSlides: 5,
                slideMargin: 40
              });
	}
}());