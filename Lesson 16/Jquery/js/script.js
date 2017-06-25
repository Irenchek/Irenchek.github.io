$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var list = $('.menu-list');
	var nav_link = $('.menu-list a');

	link.click(function(){
		link.toggleClass('menu-link_active');
		list.toggleClass('menu-list_active');

	});
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		list.toggleClass('menu-list_active');
	});	
	
});