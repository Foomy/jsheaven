
var Sierpinski = {

	cfg: {
		width: 480,
		height: 480,
		bgColor: 'rgb(200,200,200)',
		fgColor: 'rgb(0,0,0)'
	},

	Triangle: {

		dimension: 255,
		offset: 10,

		init: function () {
			var canvas = document.getElementById('playground');

			if (canvas.getContext) {
				playground = canvas.getContext('2d');

				playground.width = Sierpinski.cfg.width;
				playground.height = Sierpinski.cfg.height;

				playground.fillStyle = Sierpinski.cfg.bgColor;
				playground.fillRect(0, 0, Sierpinski.cfg.width, Sierpinski.cfg.height);
				playground.fillStyle = Sierpinski.cfg.fgColor;
			}

			this.draw(playground);
		},

		draw: function (playground) {
			var x, y;

			for (y = 0; y <= this.dimension; y++) {
				for (x=0; x <= this.dimension; x++) {
					Sierpinski.Triangle.straight(x, y, playground);
//					Sierpinski.Triangle.wonky(x, y, playground);
				}
			}
		},

		straight: function (x, y, playground) {
			if ((x & (y-x)) == 0) {
				playground.fillRect(x+(this.dimension/2+this.offset)-0.5*y, y+this.offset, 1, 1);
			}
		},

		wonky: function (x, y, playground) {
			if ((x & y) == 0) {
				playground.fillRect(x+this.offset, y+this.offset, 1, 1);
			}
		}
	}
}
