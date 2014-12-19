/* Tamil (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by S A Sureshkumar (saskumar@live.com). */
(function ($) {

$.monthpicker.regional['ta'] = {
	closeText: 'மூடு',
	prevText: 'முன்னையது',
	nextText: 'அடுத்தது',
	currentText: 'இன்று',
	monthNames: ['தை','மாசி','பங்குனி','சித்திரை','வைகாசி','ஆனி',
	'ஆடி','ஆவணி','புரட்டாசி','ஐப்பசி','கார்த்திகை','மார்கழி'],
	monthNamesShort: ['தை','மாசி','பங்','சித்','வைகா','ஆனி',
	'ஆடி','ஆவ','புர','ஐப்','கார்','மார்'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['ta']);

})(jQuery);
