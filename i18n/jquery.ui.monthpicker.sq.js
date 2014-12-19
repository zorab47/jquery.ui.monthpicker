/* Albanian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Flakron Bytyqi (flakron@gmail.com). */
(function ($) {

$.monthpicker.regional['sq'] = {
	closeText: 'mbylle',
	prevText: '&#x3C;mbrapa',
	nextText: 'Përpara&#x3E;',
	currentText: 'sot',
	monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
	'Korrik','Gusht','Shtator','Tetor','Nëntor','Dhjetor'],
	monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
	'Kor','Gus','Sht','Tet','Nën','Dhj'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sq']);

})(jQuery);
