/* Lithuanian (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */
(function ($) {

$.monthpicker.regional['lt'] = {
	closeText: 'Uždaryti',
	prevText: '&#x3C;Atgal',
	nextText: 'Pirmyn&#x3E;',
	currentText: 'Šiandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegužė','Birželis',
	'Liepa','Rugpjūtis','Rugsėjis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugp','Rugs','Spa','Lap','Gru'],
	dateFormat: 'yy-mm',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['lt']);

})(jQuery);
