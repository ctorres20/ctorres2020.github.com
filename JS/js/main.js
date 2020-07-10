$(document).ready(function(){
	//slider

	if(window.location.href.indexOf('index') > -1){

		$('.galeria').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 900
		});
	}

	//selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//scroll arriba de la web

	$('.subir').click(function(){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});
	//acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();

	}

	//reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
			reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
		},1000);

	}

	//validacion
	if(window.location.href.indexOf('contac') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy'
		});

		$.validate({
			lang : 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
	}
});