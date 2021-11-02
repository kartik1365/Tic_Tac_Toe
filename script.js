//To create a Board with height = width = side_length
var Board = function (side_length) {
	this.n = side_length
	this.mat = Array(this.n).fill("-").
		map(x => Array(this.n).fill("-"));
};

//Filling the Board
Board.prototype.square_is = function (row, col, X_or_O) {
	this.mat[row][col] = X_or_O;
};

//Printing the Board
Board.prototype.print = function () {
	let k = this.n;
	for (let i = 0; i < k; i++) {
		for (let j = 0; j < k; j++) {
			document.write(this.mat[i][j]);
			document.write(" ");
		}
		document.write("<br>");
	}
	document.write("<br>")
};

//To check if a player has won or not
Board.prototype.winner = function () {
	let k = this.n;
	for (let i = 0; i < k; i++) {
		for (let j = 1; j < k - 1; j++) {
			if (this.mat[i][j] != "-") {
				if (this.mat[i][j] == this.mat[i][j - 1] && this.mat[i][j] == this.mat[i][j + 1]) {
					return this.mat[i][j];
				}
			}
			if (this.mat[j][i] != "-") {
				if (this.mat[j - 1][i] == this.mat[j][i] && this.mat[j][i] == this.mat[j + 1][i]) {
					return this.mat[i][j];
				}
			}
		}
	}
	return 0;
};

function playgame() {

	// Creating a new board of size 5
	board = new Board(5);
	// Empty Board
	board.print();

	//Considering we are giving manual inputs
	if (board.winner() == 0) {
		board.square_is(1, 1, 'X')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(1, 0, 'O')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(0, 1, 'X')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(2, 1, 'X')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(0, 2, 'X')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(2, 0, 'O')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

	if (board.winner() == 0) {
		board.square_is(0, 0, 'X')
		board.print();
	}
	else {
		document.write(board.winner())
		document.write(" has won <br>")
		return;
	}

};
playgame();