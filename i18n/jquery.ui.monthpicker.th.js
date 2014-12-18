/* Thai initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by pipo (pipo@sixhead.com). */
(function ($) {

$.monthpicker.regional['th'] = {
	closeText: 'ปิด',
	prevText: '&#xAB;&#xA0;ย้อน',
	nextText: 'ถัดไป&#xA0;&#xBB;',
	currentText: 'วันนี้',
	monthNames: ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน',
	'กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'],
	monthNamesShort: ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.',
	'ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['th']);

})(jQuery);
