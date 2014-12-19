/* Hungarian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
(function ($) {

$.monthpicker.regional['hu'] = {
	closeText: 'bezár',
	prevText: 'vissza',
	nextText: 'előre',
	currentText: 'ma',
	monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
	'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
	'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
	dateFormat: 'yy.mm.',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['hu']);

})(jQuery);
