import wixData from 'wix-data';
import { timeline } from 'wix-animations';
import { formFactor } from 'wix-window';

var username = "baked";
var secret = "potato";

var thoughtsGathered;
var currentThought;

$w.onReady(function () {
    $w('#tossText').hide()
    $w('#reuseUsername').hide()
});

export function badThoughtsSubmission(event) {
    username = $w('#usernameInput').value
    secret = $w('#secretInput').value

    $w('#reuseUsername').show()

}

export function flushThought(event) {
    // animate words going down 
    let animationOptions = {
        "duration": 500,
        "delay": 0,
        "direction": "bottom"
    };

    $w("#tossText").hide("fly", animationOptions).then(() => {
        if (thoughtsGathered.length > 0) {
            currentThought = thoughtsGathered.pop()
            updateCurrentthought(currentThought)
        }
    })

	$w('#thoughtsRemaining').text = "Thoughts Remaining: " + thoughtsGathered.length

}

export function collectThoughts(event) {
    // Get all the thoughts from the database with the username and secret
    $w('#thoughtsRemaining').text = "Gathering thoughts please wait..."

    wixData.query("jobApplication05")
        .eq("firstName", username)
        .eq("lastName", secret)
        .find()
        .then((results) => {
            console.log(results.items);

            $w('#thoughtsRemaining').text = "Thoughts Remaining: " + results.items.length

            thoughtsGathered = results.items

            if (thoughtsGathered.length > 0) {
                currentThought = thoughtsGathered.pop()
                updateCurrentthought(currentThought)
            }
        });

    console.log("after query")
}

export function reuseUsername(event) {
    $w('#usernameInput').value = username
    $w('#secretInput').value = secret

}

function updateCurrentthought(currentThought) {
    let tempText = currentThought.shortAnswerField
    $w('#tossText').text = tempText
    $w('#tossText').show()
}
