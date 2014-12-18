/* Finnish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Harri Kilpiö (harrikilpio@gmail.com). */
(function ($) {

$.monthpicker.regional['fi'] = {
	closeText: 'Sulje',
	prevText: '&#xAB;Edellinen',
	nextText: 'Seuraava&#xBB;',
	currentText: 'Tänään',
	monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu',
	'Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
	monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä',
	'Heinä','Elo','Syys','Loka','Marras','Joulu'],
	dateFormat: 'd.m.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['fi']);

})(jQuery);
