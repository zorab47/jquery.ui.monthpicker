/* English/Australia initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */
(function ($) {

$.monthpicker.regional['en-AU'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January','February','March','April','May','June',
	'July','August','September','October','November','December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['en-AU']);

})(jQuery);
