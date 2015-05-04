'use strict';
/*
*CSS Animated Hamburger Icon (click on hamburger)
*/
(function() {
	var $navToggle = $('#nav-toggle');
	if($navToggle.length > 0) {
		$navToggle.on( 'click', function() {
		    this.classList.toggle( 'active' );
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


/*
* Show fixed menu
*/

(function() {
	var $verticalMenu = $('#nav-toggle');

	$verticalMenu.on('click', function(){
		$('body').toggleClass('menuShowed');
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

/*
* Custom Select
*/

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