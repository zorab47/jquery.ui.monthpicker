/* Hindi initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Michael Dawart. */
(function ($) {

$.monthpicker.regional['hi'] = {
	closeText: 'बंद',
	prevText: 'पिछला',
	nextText: 'अगला',
	currentText: 'आज',
	monthNames: ['जनवरी ','फरवरी','मार्च','अप्रेल','मई','जून',
	'जूलाई','अगस्त ','सितम्बर','अक्टूबर','नवम्बर','दिसम्बर'],
	monthNamesShort: ['जन', 'फर', 'मार्च', 'अप्रेल', 'मई', 'जून',
	'जूलाई', 'अग', 'सित', 'अक्ट', 'नव', 'दि'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['hi']);

})(jQuery);
