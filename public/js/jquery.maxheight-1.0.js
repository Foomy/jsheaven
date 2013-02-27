;(function($) {
	$.fn.maxHeight = function (arg, callback) {
		var max = 0;

		// there's no need to do $(this) because
		// "this" is already a jquery object
		return this.each(function () {
			max = Math.max(max, $(this).height());
		});
console.log(max);
		return max;
	};
})(jQuery);