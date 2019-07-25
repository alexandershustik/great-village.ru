	var event = [];
	var url = [];
$(function() {

	$('.login').click(function(){
		$('.login-menu').toggleClass('close');
		$('.main-m-menu-inner').addClass('close');
		$('.sidebar').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$(document).click(function(){
		$('.login-menu').addClass('close');

		$('.main-m-menu-inner').addClass('close');
		$('.sidebar').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$(".login").click(function(e){
	  e.stopPropagation();
	});

	$('.admin-menu').click(function(){
		$('.sidebar').toggleClass('close');

		$('.login-menu').addClass('close');
		$('.main-m-menu-inner').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$(document).click(function(){
	  $('.sidebar').addClass('close');
	});

	$(".admin-menu").click(function(e){
	  e.stopPropagation();
	});

	$('.close-admin-menu').click(function(){
		$('.sidebar').toggleClass('close');

		$('.login-menu').addClass('close');
		$('.main-m-menu-inner').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$('.m-main-menu').click(function(){
		$('.main-m-menu-inner').toggleClass('close');

		$('.login-menu').addClass('close');
		$('.sidebar').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$(document).click(function(){
	  $('.main-m-menu-inner').addClass('close');
	});

	$(".m-main-menu").click(function(e){
	  e.stopPropagation();
	});

	$('.close-main-m-menu').click(function(){
		$('.main-m-menu-inner').toggleClass('close');

		$('.login-menu').addClass('close');
		$('.sidebar').addClass('close');
		$('.filter-button').next().addClass('close');
	});

	$('.filter-button').click(function(){
		$(this).next().toggleClass('close');

		$('.login-menu').addClass('close');
		$('.main-m-menu-inner').addClass('close');
		$('.sidebar').addClass('close');
	});

	$(document).click(function(){
		$('.filter-button').next().addClass('close');

		$('.login-menu').addClass('close');
		$('.main-m-menu-inner').addClass('close');
		$('.sidebar').addClass('close');
	});

	$(".filter-button").click(function(e){
	  e.stopPropagation();
	});

	$('.filter-item').click(function(){
		$(this).parent().parent().prev().html($(this).html() + ' <i class="fas fa-caret-down"></i>');
		$(this).parent().parent().addClass('close');
	});
	
	$.ajaxSetup({
		async: false
	});

	$.getJSON('../events.json').done(function(data){
		$.each(data,function(key, val){

			event.push(val.event);
			url.push(val.url);
		}); //each

	}); // getJson

	$('.date-filter').datepicker({
		language: "ru",
		format: "dd/mm/yy",
		orientation: "bottom auto",
		todayHighlight: true,
		toggleActive: true,
		leftArrow: '◀︎',
    	rightArrow: '▶︎',
		enableOnReadonly: false,
		beforeShowDay: function(date){
			for (var i = event.length - 1; i >= 0; i--) {

				eventDay = event[i].substring(0, 2)
				eventMonth = event[i].substring(3, 5) - 1
				eventYear = '1' + event[i].substring(6, 10)
				eventLink = url[i]

				if (date.getYear() == eventYear){
					if (date.getMonth() == eventMonth){
						if(date.getDate() == eventDay){

							if(eventDay.substring(0, 1) == 0){
								eventDay = eventDay.substring(1, 2)
							}

							return {
								content: '<a href="'+eventLink+'">'+eventDay+'</a>'
							}
						}
					}
				}
			}
			return false
		} // beforeShowDay
	}).on('changeDate', function(e) {
		error
	});

});
