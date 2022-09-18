// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
var grid = [0,0,0,0,0,0,0,0,0]

$w.onReady(function () {
	$w("#button1").hide()

	// player 1: cross
	// cpu player 2: circle

	resetGame()


	$w('#vectorImage1').onClick((event) => {
		crossClick(1)
	})
	$w('#vectorImage2').onClick((event) => {
		crossClick(2)
	})
	$w('#vectorImage3').onClick((event) => {
		crossClick(3)
	})
	$w('#vectorImage4').onClick((event) => {
		crossClick(4)
	})
	$w('#vectorImage5').onClick((event) => {
		crossClick(5)
	})
	$w('#vectorImage6').onClick((event) => {
		crossClick(6)
	})
	$w('#vectorImage7').onClick((event) => {
		crossClick(7)
	})
	$w('#vectorImage8').onClick((event) => {
		crossClick(8)
	})
	$w('#vectorImage9').onClick((event) => {
		crossClick(9)
	})

	$w("#button2").onClick((event) => {
		resetGame()
	})

});

function resetGame() {
	$w("#button2").hide()
	
	// hide all the circles and crosses
	$w('#circle1').hide()
	$w('#circle2').hide()
	$w('#circle3').hide()
	$w('#circle4').hide()
	$w('#circle5').hide()
	$w('#circle6').hide()
	$w('#circle7').hide()
	$w('#circle8').hide()
	$w('#circle9').hide()

	$w('#cross1').hide()
	$w('#cross2').hide()
	$w('#cross3').hide()
	$w('#cross4').hide()
	$w('#cross5').hide()
	$w('#cross6').hide()
	$w('#cross7').hide()
	$w('#cross8').hide()
	$w('#cross9').hide()

	grid = [0,0,0,0,0,0,0,0,0]
}

export function crossClick(crossNum) {
	// update grid
	if (grid[crossNum - 1] == 0) {
		grid[crossNum - 1] = 1

		switch (crossNum) {
			case 1:
				$w('#cross1').show()
				break;
			case 2:
				$w('#cross2').show()
				break;
			case 3:
				$w('#cross3').show()
				break;
			case 4:
				$w('#cross4').show()
				break;
			case 5:
				$w('#cross5').show()
				break
			case 6:
				$w('#cross6').show()
				break;
			case 7:
				$w('#cross7').show()
				break;
			case 8:
				$w('#cross8').show()
				break;
			case 9:
				$w('#cross9').show()
				break;
			default:
				break;
		}

		gridUpdate(1)

		circleSelect()
	} 
}

function circleSelect() {
	let emptySpaces = []

	// get list empty spaces
	for (var i = 0; i < 9; i++) {
		if (grid[i] == 0){
			emptySpaces.push(i)
		}
	}

	// randomly select a space
	var randomSpace = emptySpaces[Math.floor(Math.random()*emptySpaces.length)] + 1

	grid[randomSpace - 1] = 2

	// add circle
	switch (randomSpace) {
		case 1:
			$w('#circle1').show()
			break;
		case 2:
			$w('#circle2').show()
			break;
		case 3:
			$w('#circle3').show()
			break;
		case 4:
			$w('#circle4').show()
			break;
		case 5:
			$w('#circle5').show()
			break
		case 6:
			$w('#circle6').show()
			break;
		case 7:
			$w('#circle7').show()
			break;
		case 8:
			$w('#circle8').show()
			break;
		case 9:
			$w('#circle9').show()
			break;
		default:
			break;
	}

	gridUpdate(2)
}

function gridUpdate(playerTurn) {
	// check if tic tac toe is won
	if (playerTurn == 1) {
		// check if player won
		if ((grid[0] == 1 && grid[1] == 1 && grid[2] == 1) ||
			(grid[3] == 1 && grid[4] == 1 && grid[5] == 1) ||
			(grid[6] == 1 && grid[7] == 1 && grid[8] == 1) ||
			(grid[0] == 1 && grid[3] == 1 && grid[6] == 1) ||
			(grid[1] == 1 && grid[4] == 1 && grid[7] == 1) ||
			(grid[2] == 1 && grid[5] == 1 && grid[8] == 1) ||
			(grid[0] == 1 && grid[4] == 1 && grid[8] == 1) ||
			(grid[2] == 1 && grid[4] == 1 && grid[6] == 1)) {
				let fadeOptions = {
					"duration": 200,
					"delay": 0
				};

				$w("#button1").show("fade", fadeOptions);

			}

	} else if (playerTurn == 2) {
		// check cpu won

		if ((grid[0] == 2 && grid[1] == 2 && grid[2] == 2) ||
			(grid[3] == 2 && grid[4] == 2 && grid[5] == 2) ||
			(grid[6] == 2 && grid[7] == 2 && grid[8] == 2) ||
			(grid[0] == 2 && grid[3] == 2 && grid[6] == 2) ||
			(grid[1] == 2 && grid[4] == 2 && grid[7] == 2) ||
			(grid[2] == 2 && grid[5] == 2 && grid[8] == 2) ||
			(grid[0] == 2 && grid[4] == 2 && grid[8] == 2) ||
			(grid[2] == 2 && grid[4] == 2 && grid[6] == 2)) {
				$w("#button2").show();
			}

	}

}
