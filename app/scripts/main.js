'use strict';
/*
*CSS Animated Hamburger Icon (click on hamburger)
*/
(function() {
	var $navToggle = $('#nav-toggle');
	if($navToggle.lenght > 0) {
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
