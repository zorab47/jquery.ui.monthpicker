/* Slovak initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
(function ($) {

$.monthpicker.regional['sk'] = {
	closeText: 'Zavrieť',
	prevText: '&#x3C;Predchádzajúci',
	nextText: 'Nasledujúci&#x3E;',
	currentText: 'Dnes',
	monthNames: ['január','február','marec','apríl','máj','jún',
	'júl','august','september','október','november','december'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Máj','Jún',
	'Júl','Aug','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sk']);

})(jQuery);
