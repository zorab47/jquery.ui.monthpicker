/* Portuguese initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
(function ($) {

$.monthpicker.regional['pt'] = {
	closeText: 'Fechar',
	prevText: 'Anterior',
	nextText: 'Seguinte',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['pt']);

})(jQuery);
