// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
const totalBalloons = 8;
var numBalloons = 8

$w.onReady(function () {
	
});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function balloonClick(event) {
    // This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
    // Add your code for this event here: 

    if ($w("#audioPlayer1").isPlaying) {
        $w("#audioPlayer1").seek(0);
    } else {
        $w('#audioPlayer1').play()
    }

    event.target.hide()

    numBalloons--
    $w('#progressBar1').value = totalBalloons - numBalloons

    if (numBalloons == 0) {
        let fadeOptions = {
            "duration": 200,
            "delay": 0
        };

        $w("#button1").show("fade", fadeOptions);

    }

}
