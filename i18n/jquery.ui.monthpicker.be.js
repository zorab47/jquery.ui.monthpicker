/* Belarusian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Pavel Selitskas <p.selitskas@gmail.com> */
(function ($) {

$.monthpicker.regional['be'] = {
	closeText: 'Зачыніць',
	prevText: '&larr;Папяр.',
	nextText: 'Наст.&rarr;',
	currentText: 'Сёньня',
	monthNames: ['Студзень','Люты','Сакавік','Красавік','Травень','Чэрвень',
	'Ліпень','Жнівень','Верасень','Кастрычнік','Лістапад','Сьнежань'],
	monthNamesShort: ['Сту','Лют','Сак','Кра','Тра','Чэр',
	'Ліп','Жні','Вер','Кас','Ліс','Сьн'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['be']);

})(jQuery);
