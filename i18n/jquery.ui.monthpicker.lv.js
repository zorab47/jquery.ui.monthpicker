/* Latvian (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
(function ($) {

$.monthpicker.regional['lv'] = {
	closeText: 'Aizvērt',
	prevText: 'Iepr.',
	nextText: 'Nāk.',
	currentText: 'Šodien',
	monthNames: ['Janvāris','Februāris','Marts','Aprīlis','Maijs','Jūnijs',
	'Jūlijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jūn',
	'Jūl','Aug','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['lv']);

})(jQuery);
