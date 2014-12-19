/* Czech initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
(function ($) {

$.monthpicker.regional['cs'] = {
	closeText: 'Zavřít',
	prevText: '&#x3C;Dříve',
	nextText: 'Později&#x3E;',
	currentText: 'Nyní',
	monthNames: ['leden','únor','březen','duben','květen','červen',
	'červenec','srpen','září','říjen','listopad','prosinec'],
	monthNamesShort: ['led','úno','bře','dub','kvě','čer',
	'čvc','srp','zář','říj','lis','pro'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['cs']);

})(jQuery);
