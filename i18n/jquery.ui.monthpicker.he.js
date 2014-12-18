/* Hebrew initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Amir Hardon (ahardon at gmail dot com). */
(function ($) {

$.monthpicker.regional['he'] = {
	closeText: 'סגור',
	prevText: '&#x3C;הקודם',
	nextText: 'הבא&#x3E;',
	currentText: 'היום',
	monthNames: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני',
	'יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
	monthNamesShort: ['ינו','פבר','מרץ','אפר','מאי','יוני',
	'יולי','אוג','ספט','אוק','נוב','דצמ'],
	dateFormat: 'mm/yy',
	isRTL: true,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['he']);

})(jQuery);
