var FooInPlaceEdit = {
	showForm: function ($clickedObject) {
		var $field = $('<input type="text">'),
			$button = $('<button>');

		$field.val($clickedObject.html());

		$button.html('save');
		$button.bind('click', function () {
			var value = $field.val();
			FooInPlaceEdit.saveValue(value);
		});
	},

	saveValue: function (value){
		// @todo: implement save method.
	}
};

(function($) {
	$.fn.fooInPlaceEdit = function() {
		return this.each(function () {
			var $editableObject = $(this);

			$editableObject.attr('title', 'Click to edit!');
			$editableObject.bind('click', function () {
				FooInPlaceEdit.showForm($(this));
			});
		});
	}
})(jQuery);