/* Swedish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */
(function ($) {

$.monthpicker.regional['sv'] = {
	closeText: 'Stäng',
	prevText: '&#xAB;Förra',
	nextText: 'Nästa&#xBB;',
	currentText: 'Idag',
	monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
	'Juli','Augusti','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dateFormat: 'yy-mm',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sv']);

})(jQuery);
