$(document).ready(function () {
    // set variables
    var targetNumber = "";
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var number = [];
    var crystalImg = ["./assets/pics/blue-gem.png", "./assets/pics/green-gem.png", "./assets/pics/red-gem.png", "./assets/pics/yel-gem.png"]

    // show wins, loss, counter
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#num-picked").text(counter);

    // pick random target number
    function randomNumber() {
        targetNumber = [Math.floor(Math.random() * 50) + 50];
        console.log(targetNumber);
        $("#target-number").text(targetNumber);
    }
    randomNumber();

    // set random number for array
    function makeARandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
        
    }
    makeARandomNumber();

    // push random number to array
    function pushNumberToArray() {
        number = Array(4).fill(0).map(makeARandomNumber);
    }
    
    // set number value to crystal ID
    function resetCrystals() {
        $("#crys").empty();
        pushNumberToArray()
        for (var i = 0; i < number.length; ++i) {
            var crystals = $("<img>");
            crystals.addClass("crystals");
            crystals.attr("value", number[i]);
            crystals.attr("src", crystalImg[i]);
            $("#crys").append(crystals);
        }
    }
    resetCrystals();
    

    // reset function called after Crystal number exceeds target number
    function reset() {
        randomNumber();
        makeARandomNumber();
        counter = 0;
        $("#target-number").html(targetNumber);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#num-picked").html(counter);
    }
    console.log(number);
    
    // on click function linked to crystal ID
    $("#crys").on("click", "img", function () {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#num-picked").html(counter);
        if (counter == targetNumber) {
            wins++;
            reset();
            resetCrystals();            
        }
        else if (counter > targetNumber) {
            losses++;
            reset();
            resetCrystals();
        };
        console.log(crystalValue);
    });
})