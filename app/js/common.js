$(function() {

	$('.login').click(function(){
		$('.login-menu').toggleClass('close');
	});

	$(document).click(function(){
	  $('.login-menu').addClass('close');
	});

	$(".login").click(function(e){
	  e.stopPropagation();
	});

	$('.admin-menu').click(function(){
		$('.sidebar').toggleClass('close');

		$('.main-m-menu-inner').addClass('close');
	});

	$(document).click(function(){
	  $('.sidebar').addClass('close');
	});

	$(".admin-menu").click(function(e){
	  e.stopPropagation();
	});

	$('.close-admin-menu').click(function(){
		$('.sidebar').toggleClass('close');

		$('.main-m-menu-inner').addClass('close');
	});

	$('.m-main-menu').click(function(){
		$('.main-m-menu-inner').toggleClass('close');

		$('.sidebar').addClass('close');
	});

	$(document).click(function(){
	  $('.main-m-menu-inner').addClass('close');
	});

	$(".m-main-menu").click(function(e){
	  e.stopPropagation();
	});

	$('.close-main-m-menu').click(function(){
		$('.main-m-menu-inner').toggleClass('close');

		$('.sidebar').addClass('close');
	});

	$('.filter-button').click(function(){
		$(this).next().toggleClass('close');
	});

	$(document).click(function(){
	  $('.filter-button').next().addClass('close');
	});

	$(".filter-button").click(function(e){
	  e.stopPropagation();
	});

	$('.filter-item').click(function(){
		//$(this).html('df');
		//$(this).parent().parent().prev('filter-button').html('df');
		$(this).parent().parent().prev().html($(this).html() + ' <i class="fas fa-caret-down"></i>');
		$(this).parent().parent().addClass('close');
	});
	
});
