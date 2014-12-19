/* Brazilian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
(function ($) {

$.monthpicker.regional['pt-BR'] = {
	closeText: 'Fechar',
	prevText: '&#x3C;Anterior',
	nextText: 'Próximo&#x3E;',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['pt-BR']);

})(jQuery);
