/**
 * jQuery alert zend flash messages 1.0
 *
 * @author Sascha Schneider <sascha.schneider@netsdirekt.de>
 */
(function($) {
	$.fn.alertFlashMessages = function() {
		return this.each(function () {
			var messages = $(this).html();

			if (typeof messages !== 'undefined' && messages !== '') {
				alert($(this).html())
			}
		});
	}
})(jQuery);