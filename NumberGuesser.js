$w.onReady(function () {
	$w("#button1").hide()
	
	$w('#textInsultLeft').hide()
	$w('#textInsultRight').hide()

	// Generate Random number for the user to guess (between 1 and 1000)
	const targetNum = Math.floor((Math.random() * 100) + 1);
	console.log("targetNum", targetNum);


	// add function for when the slider is updated
	$w("#rangeSlider1").onChange( (event) => {
		let value = event.target.value; 

		$w('#textYourRange').text = "Your Range: " + value
		if (targetNum >= value[0] && targetNum <= value[1]) {
			$w('#textHigherLower').text = "Target Num is in your range"
		} else if (targetNum <= value[0]) {
			$w('#textHigherLower').text = "Target Num is lower than your range"
		} else if (targetNum >= value[1]) {
			$w('#textHigherLower').text = "Target Num is higher than your range"
		}

	});

	// add a function for when the button is clicked
	$w("#inputGuess").onChange( (event) => {
		let newValue = event.target.value;  

		if (parseInt(newValue) == targetNum) {
			$w('#textCorrectWrong').text = "You got it!"

			let fadeOptions = {
				"duration":   200,
				"delay":      0
			};

			$w("#button1").show("fade", fadeOptions);


		} else {
			if ($w('#textCorrectWrong').text == "Try again!") {
				$w('#textCorrectWrong').text = "Try again!"
			} else {
				$w('#textCorrectWrong').text = "Nope wrong!"
			}

			// Add insults
			
		}

	});
	
});
