/* Norwegian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */

(function ($) {

$.monthpicker.regional['no'] = {
	closeText: 'Lukk',
	prevText: '&#xAB;Forrige',
	nextText: 'Neste&#xBB;',
	currentText: 'I dag',
	monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
	monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''
};
$.monthpicker.setDefaults($.monthpicker.regional['no']);

})(jQuery);
