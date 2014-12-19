/* Khmer initialisation for the jQuery month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Chandara Om (chandara.teacher@gmail.com). */
(function ($) {

$.monthpicker.regional['km'] = {
	closeText: 'ធ្វើ​រួច',
	prevText: 'មុន',
	nextText: 'បន្ទាប់',
	currentText: 'ថ្ងៃ​នេះ',
	monthNames: ['មករា','កុម្ភៈ','មីនា','មេសា','ឧសភា','មិថុនា',
	'កក្កដា','សីហា','កញ្ញា','តុលា','វិច្ឆិកា','ធ្នូ'],
	monthNamesShort: ['មករា','កុម្ភៈ','មីនា','មេសា','ឧសភា','មិថុនា',
	'កក្កដា','សីហា','កញ្ញា','តុលា','វិច្ឆិកា','ធ្នូ'],
	dateFormat: 'mm-yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['km']);

})(jQuery);
