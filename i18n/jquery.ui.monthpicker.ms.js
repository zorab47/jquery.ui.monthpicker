/* Malaysian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Mohd Nawawi Mohamad Jamili (nawawi@ronggeng.net). */
(function ($) {

$.monthpicker.regional['ms'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;Sebelum',
	nextText: 'Selepas&#x3E;',
	currentText: 'hari ini',
	monthNames: ['Januari','Februari','Mac','April','Mei','Jun',
	'Julai','Ogos','September','Oktober','November','Disember'],
	monthNamesShort: ['Jan','Feb','Mac','Apr','Mei','Jun',
	'Jul','Ogo','Sep','Okt','Nov','Dis'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['ms']);

})(jQuery);
