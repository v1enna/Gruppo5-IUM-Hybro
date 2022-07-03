$(document).ready(() => {
	$('#bot').click(() => window.location.replace('chat.html'));

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
