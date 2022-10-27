/*
    Name: Cameron Hulse
    Date: 10/27/22
    Project: JS Interview Question
*/


/*
Adding event listener for the DOM to be loaded.
This is essentially the same as JQuery's $( document ).ready()
*/
document.addEventListener("DOMContentLoaded", () => {
    //Getting HTML document elements.
    var playButton = document.getElementById("play-button");

    //Adding event listener for button click.
    playButton.addEventListener("click", () => {
        generateNumber((val) => {
            if(val >= 1 && val <= 1000){
                alert("Nice job! You won!");
            }else{
                alert("Too bad! You've lost!");
            }
        });
    });
});

/*
Generate number function. This must be its own function to avoid asynchronous issues 
like the win check running before the number generation is complete.
*/
function generateNumber(callBack){
    var numberValue = document.getElementById("number-value");
    var i = 0;
    var intervalTimer = setInterval(() => {
        if(i <= 20){
            tempNumber = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
            numberValue.innerHTML = tempNumber;
            i++;
        }else{
            var number = tempNumber;
            clearInterval(intervalTimer);
            callBack(number);
        }
    }, 100);
}