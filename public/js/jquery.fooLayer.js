var FooLayer = {
	options: null,

	setOptions: function(opt) {
		/**
		 * @todo Use $.extend() and defaults for options.
		 */
		this.options = opt;
	},

	showOverlay: function () {
		var classes;

		$overlay = $('<div>');
		$overlay.attr('id', this.options.overlayId);

		if (this.options.overlayClasses !== '') {
			classes = this.options.overlayClasses.split(' ');

			for (i=0; i<classes.length; i++) {
				$overlay.addClass(classes[i]);
			}
		}

		$overlay.css({
			background: '#000',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			opacity: '0.4',
			filter: 'alpha(opacity=0.4)',
			zIndex: '10'
		});

		$overlay.bind('click', function () {
			$(this).remove();
		});

		$('body').append($overlay);
	}
};

(function($) {
	$.fn.fooLayer = function(arg) {
		var defaults = {
			overlayId: '#overlay',
			overlayClasses: '',
			showLinkSelector: '#showFooLayer'
		},
		options = $.extend(defaults, arg);

		FooLayer.setOptions(options);

//		return this.each(function () {
//
//		});
	}
})(jQuery);
