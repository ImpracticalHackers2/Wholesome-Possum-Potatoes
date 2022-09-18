$w.onReady(function () {
    $w('#button1').hide()

    $w('#button2').hide()
    $w('#button3').hide()
    $w('#button4').hide()
    $w('#button5').hide()
    $w('#button6').hide()
    $w('#button7').hide()

    $w("#closeBtn1").onClick((event) => {
        $w('#closeBtn1').hide()

        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button2").show("fly", animationOptions);
    });

    $w("#button2").onClick((event) => {
        $w('#button2').hide()

        let fadeOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button3").show("fade", fadeOptions);
    });

    $w("#button3").onClick((event) => {
        $w('#button3').hide()

        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button4").show("glide", animationOptions);
    });

    $w("#button4").onClick((event) => {
        $w('#button4').hide()

        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button5").show("puff", animationOptions);
    });

    $w("#button5").onClick((event) => {
        $w('#button5').hide()

        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button6").show("spin", animationOptions);
    });

    $w("#button6").onClick((event) => {
        $w('#button6').hide()

        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button7").show("bounce", animationOptions);
    });

    $w("#button7").onClick((event) => {
        $w("#button1").hide()

		$w("#box1").hide()

        let fadeOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#button1").show("fade", fadeOptions);
    });

});
