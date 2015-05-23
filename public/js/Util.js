Util = {

	/**
	 * Checks if the given value is not defined.
	 * 
	 * @param {Mixed}
	 *            value value the value to check
	 * 
	 * @return {Boolean}
	 */
	isUndefined : function(value) {
		return (typeof value === 'undefined') ? true : false;
	},

	/**
	 * Checks if the given value is a function.
	 * 
	 * @param {mixed}
	 *            value the value to check
	 * @return {boolean}
	 */
	isFunction : function(value) {
		return (jQuery.isFunction(value)) ? true : false;
	},

	getRandomNumber: function (min, max) {
		var random;

		if (min > max) {
			return -1;
		}

		if (min == max) {
			return min;
		}

		do {
			random = Math.random();
		}
		while (random == 1.0);

		return min + parseInt(random * (max-min+1));
	}
};