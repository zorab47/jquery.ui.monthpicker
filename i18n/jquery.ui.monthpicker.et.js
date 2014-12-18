/* Estonian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Mart Sõmermaa (mrts.pydev at gmail com). */
(function ($) {

$.monthpicker.regional['et'] = {
	closeText: 'Sulge',
	prevText: 'Eelnev',
	nextText: 'Järgnev',
	currentText: 'Täna',
	monthNames: ['Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni',
	'Juuli','August','September','Oktoober','November','Detsember'],
	monthNamesShort: ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni',
	'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['et']);

})(jQuery);
