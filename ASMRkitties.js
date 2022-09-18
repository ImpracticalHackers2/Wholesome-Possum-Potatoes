// Zoey's Code
// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
    $w('#group1').hide()
    $w('#group2').hide()
    $w('#group3').hide()

    $w("#circle1").onClick((event) => {
        $w("#group2").hide("fly ", animationOptions);
        $w("#group3").hide("fly ", animationOptions);
        let animationOptions = {
            "duration": 1,
            "delay": 0
        };

        $w("#group1").show("fly ", animationOptions);
        $w('#audioPlayer1').play()
        setTimeout(() => {$w("#group1").hide("fade"); }, 3500);
    });

    $w("#circle2").onClick((event) => {
        $w("#group1").hide("fly ", animationOptions);
        $w("#group3").hide("fly ", animationOptions);
        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#group2").show("fly ", animationOptions);
        $w('#audioPlayer2').play()
        setTimeout(() => {$w("#group2").hide("fade"); }, 14000);
    });

    $w("#circle4").onClick((event) => {
        $w("#group1").hide("fly ", animationOptions);
        $w("#group2").hide("fly ", animationOptions);
        let animationOptions = {
            "duration": 500,
            "delay": 0
        };

        $w("#group3").show("fly ", animationOptions);
        $w('#audioPlayer3').play()
        setTimeout(() => {$w("#group3").hide("fade"); }, 5000);
    });

});
