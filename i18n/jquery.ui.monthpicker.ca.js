/* Inicialització en català per a l'extensió 'UI month picker' per jQuery. */
/* Sobre la base de la inicialització per l'extensió 'UI date picker' per jQuery. */
/* Writers: (joan.leon@gmail.com). */
(function ($) {

$.monthpicker.regional['ca'] = {
	closeText: 'Tanca',
	prevText: 'Anterior',
	nextText: 'Següent',
	currentText: 'Avui',
	monthNames: ['gener','febrer','març','abril','maig','juny',
	'juliol','agost','setembre','octubre','novembre','desembre'],
	monthNamesShort: ['gen','feb','març','abr','maig','juny',
	'jul','ag','set','oct','nov','des'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['ca']);

})(jQuery);
