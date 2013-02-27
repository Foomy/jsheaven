Tab = {

	init : function(ref) {

		ref.each(function() {

			jQuery(this).unbind('click.is_tab').bind('click.is_tab', function() {

				var rel = jQuery(this).attr('rel');
				var rev = jQuery(this).attr('rev');
				var curLi = jQuery(this).parent();
				var allLi = curLi.parent().children();

				// ToDo: Use ajax() instead of post()
				jQuery.ajax({
					type : 'post',
					url : rel,
					data : {},
					dataType : 'html',
					success : function(retData) {

						if (typeof retData !== 'undefined') {
							jQuery('#' + rev).html(retData);

							allLi.each(function() {
								var li = jQuery(this);

								if (li.hasClass('active')) {
									li.removeClass('active');
								}
							});

							jQuery(curLi).addClass('active');
						}

					}
				});

			});

		});

	} // end init

};

Trigger.addTrigger('is_tab', Tab.init, 1);