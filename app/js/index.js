var $ = require('jquery');
var scrollReveal = require('scrollreveal')({
	reset: true,
	scale: 1,
	opacity: 0,
	origin: 'top',
	easing: 'ease-out',
	viewFactor: 1,
	distance: '30px'
});

scrollReveal.reveal('.test1,.test2,.test3');
window.$ = $;
window.scrollReveal = scrollReveal;