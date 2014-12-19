/* Euskara (Basque) initialisation for the jQuery month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Karrikas-ek itzulia (karrikas@karrikas.com) */
(function ($) {

$.monthpicker.regional['eu'] = {
	closeText: 'Egina',
	prevText: '&#x3C;Aur',
	nextText: 'Hur&#x3E;',
	currentText: 'Gaur',
	monthNames: ['urtarrila','otsaila','martxoa','apirila','maiatza','ekaina',
		'uztaila','abuztua','iraila','urria','azaroa','abendua'],
	monthNamesShort: ['urt.','ots.','mar.','api.','mai.','eka.',
		'uzt.','abu.','ira.','urr.','aza.','abe.'],
	dateFormat: 'yy-mm',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['eu']);

})(jQuery);
