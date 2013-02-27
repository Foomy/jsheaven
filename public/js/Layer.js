
Layer = {

	init : function(ref) {

		ref.each(function() {

			jQuery(this).unbind('')

		});

	}, // end init

	show : function(ref) {

	}, // end show

	hide : function(ref) {

	} // end hide

};

Trigger.addTrigger('is_layer', Layer.init, 1);
Trigger.addTrigger('is_show_layer', Layer.show, 1);
Trigger.addTrigger('is_hide_layer', Layer.hide, 1);