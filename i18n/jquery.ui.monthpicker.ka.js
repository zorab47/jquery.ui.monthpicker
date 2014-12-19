/* Georgian (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Lado Lomidze (lado.lomidze@gmail.com). */
(function ($) {

$.monthpicker.regional['ka'] = {
	closeText: 'დახურვა',
	prevText: '&#x3c; წინა',
	nextText: 'შემდეგი &#x3e;',
	currentText: 'დღეს',
	monthNames: ['იანვარი','თებერვალი','მარტი','აპრილი','მაისი','ივნისი', 'ივლისი','აგვისტო','სექტემბერი','ოქტომბერი','ნოემბერი','დეკემბერი'],
	monthNamesShort: ['იან','თებ','მარ','აპრ','მაი','ივნ', 'ივლ','აგვ','სექ','ოქტ','ნოე','დეკ'],
	dateFormat: 'mm-yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['ka']);

})(jQuery);
