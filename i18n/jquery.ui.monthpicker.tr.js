/* Turkish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
(function ($) {

$.monthpicker.regional['tr'] = {
	closeText: 'kapat',
	prevText: '&#x3C;geri',
	nextText: 'ileri&#x3e',
	currentText: 'bugün',
	monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
	'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
	monthNamesShort: ['Oca','Şub','Mar','Nis','May','Haz',
	'Tem','Ağu','Eyl','Eki','Kas','Ara'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['tr']);

})(jQuery);
