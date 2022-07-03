$(document).ready(() => {
	$('#bot').click(() => window.location.replace('chat.html'));

	$('.a-b').click(() => window.location.replace('articolo.html'));

	$('.e-b').click(() => window.location.replace('evento.html'));

	$('.s-b').click(() => window.location.replace('reports.html'));

	$('.la-b').click(() => window.location.replace('articoli.html'));

	$('.c-b').click(() => window.location.replace('consumi.html'));

	$('#blog').click(() => {
		if ($('#blog-m').css('display') == 'none')
			$('#blog-m').css('display', 'flex');
		else $('#blog-m').css('display', 'none');
	});

	$('#eventi').click(() => {
		if ($('#eventi-m').css('display') == 'none')
			$('#eventi-m').css('display', 'flex');
		else $('#eventi-m').css('display', 'none');
	});

	$('#reports').click(() => {
		if ($('#reports-m').css('display') == 'none')
			$('#reports-m').css('display', 'flex');
		else $('#reports-m').css('display', 'none');
	});
});
