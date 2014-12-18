/* Armenian(UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
(function ($) {

$.monthpicker.regional['hy'] = {
	closeText: 'Փակել',
	prevText: '&#x3C;Նախ.',
	nextText: 'Հաջ.&#x3E;',
	currentText: 'Այսօր',
	monthNames: ['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս',
	'Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'],
	monthNamesShort: ['Հունվ','Փետր','Մարտ','Ապր','Մայիս','Հունիս',
	'Հուլ','Օգս','Սեպ','Հոկ','Նոյ','Դեկ'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['hy']);

})(jQuery);
