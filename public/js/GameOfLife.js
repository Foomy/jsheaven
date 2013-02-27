var GameOfLife = {

	playground: null,

	data: [],

	cfg: {
		width: 300,
		height: 300,
		arrayWidth: 300,
		arrayHeight: 300,
		bgColor: 'rgb(200,200,200)',
		fgColor: 'rgb(0,0,0)',

		initCellsAlive: 3500,
		cellWidth: 1,
		cellHeight: 1
	},

	stop: false,
	genCount: 0,

	init: function () {
		var canvas = document.getElementById('playground');

		if (canvas.getContext) {
			this.playground = canvas.getContext('2d');

			this.playground.width = this.cfg.width;
			this.playground.height = this.cfg.height;

			this.playground.fillStyle = this.cfg.bgColor;
			this.playground.fillRect(0, 0, this.cfg.width, this.cfg.height);
			this.playground.fillStyle = this.cfg.fgColor;
		}

		this.initDataArray();
		this.randomSeed();
		this.renderGeneration();

		$('.is_nextGenBtn').unbind('click').bind('click.nextGen', function() {
			GameOfLife.nextGenBtnClick();
		});
	},

	
	nextGenBtnClick: function() {
		GameOfLife.calculateNextGeneration();
		GameOfLife.clearPlayground();
		GameOfLife.renderGeneration();

		this.genCount++;
		$('.is_generationCounter').html(this.genCount);
	},

	clearPlayground: function () {
		this.playground.fillStyle = this.cfg.bgColor;
		this.playground.fillRect(0, 0, this.cfg.width, this.cfg.height);
		this.playground.fillStyle = this.cfg.fgColor;
	},

	renderGeneration: function () {
		var row, col;

		for (row = 0; row <= this.cfg.height-this.cfg.cellHeight; row++) {
			for (col = 0; col <= this.cfg.width-this.cfg.cellWidth; col++) {
				if (this.data[row][col]) {
					this.playground.fillRect(row, col, this.cfg.cellWidth, this.cfg.cellHeight);
				}
			}
		}
	},

	calculateNextGeneration: function () {
		var row, col, aliveNeighbors;

		for (row = 0; row < this.cfg.arrayHeight; row++) {
			for (col = 0; col < this.cfg.arrayWidth; col++) {
				aliveNeighbors = this.countAliveNeighbors(row, col);

				// is actual cell alive?
				if (this.data[row][col]) {
					if (aliveNeighbors < 2) {
						// cell dies due to loneliness
						this.data[row][col] = false;
					}

					if(aliveNeighbors > 3) {
						// cell dies due to overpopulation
						this.data[row][col] = false;
					}
				}
				else {
					if (aliveNeighbors == 3) {
						// cell is resurrects
						this.data[row][col] = true;
					}
				}
			}
		}
	},

	countAliveNeighbors: function (row, col) {
		var aliveNeighbors = 0;

		if (this.isNorthNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isNorthEastNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isEastNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isSouthEastNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isSouthNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isSouthWestNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isWestNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		if (this.isNorthWestNeighborAlive(row, col)) {
			aliveNeighbors++;
		}

		return aliveNeighbors;
	},

	isNorthNeighborAlive: function (row, col) {
		if (row-1 < 0) {
			return false;
		}

		return this.data[row-1][col];
	},

	isNorthEastNeighborAlive: function (row, col) {
		if (row-1 < 0) {
			return false;
		}

		if (col+1 >= this.cfg.arrayWidth) {
			return false;
		}

		return this.data[row-1][col+1];
	},

	isEastNeighborAlive: function (row, col) {
		if (col+1 >= this.cfg.arrayWidth) {
			return false;
		}

		return this.data[row][col+1];
	},

	isSouthEastNeighborAlive: function (row, col) {
		if (row+1 >= this.cfg.arrayHeight) {
			return false;
		}

		if (col+1 >= this.cfg.arrayWidth) {
			return false;
		}

		return this.data[row+1][col+1];
	},

	isSouthNeighborAlive: function (row, col) {
		if (row+1 >= this.cfg.arrayHeight) {
			return false;
		}

		return this.data[row+1][col];
	},

	isSouthWestNeighborAlive: function (row, col) {
		if (row+1 >= this.cfg.arrayHeight) {
			return false;
		}

		if (col-1 < 0) {
			return false;
		}

		return this.data[row+1][col-1];
	},

	isWestNeighborAlive: function (row, col) {
		if (col-1 < 0) {
			return false;
		}

		return this.data[row][col-1];
	},

	isNorthWestNeighborAlive: function (row, col) {
		if (row-1 < 0) {
			return false;
		}

		if (col-1 < 0) {
			return false;
		}

		return this.data[row-1][col-1];
	},

	randomSeed: function () {
		var i, rowRandNum, colRandNum;

		for (i = 0; i <= this.cfg.initCellsAlive; i++) {
			rowRandNum = Util.getRandomNumber(0, this.cfg.arrayHeight-1);
			colRandNum = Util.getRandomNumber(0, this.cfg.arrayWidth-1);
			this.data[rowRandNum][colRandNum] = true;
		}
	},

	initDataArray: function () {
		var row, col;

		this.data = new Array();
		for (row = 0; row < this.cfg.arrayHeight; row++) {

			this.data[row] = new Array();
			for (col = 0; col < this.cfg.arrayWidth; col++) {
				this.data[row][col] = false;
			}
		}
	}
}

