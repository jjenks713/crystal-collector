$(document).ready(function () {
    // set variables
    var targetNumber = "";
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var number = Array(4).fill(0).map(makeARandomNumber);
    var crystalImg = ["./assets/pics/blue-gem.png", "./assets/pics/green-gem.png", "./assets/pics/red-gem.png", "./assets/pics/yel-gem.png"]



    // show wins, loss, countery
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
    console.log(number);


    function resetCrystals() {
        for (var i = 0; i < number.length; i++) {
            var crystals = $("<img>");
            crystals.addClass("crystals");
            crystals.attr("value", number[i]);
            crystals.attr("src", crystalImg[i]);
            $(".crystals").empty();
            $("#crys").append(crystals);
        }
    }
    resetCrystals();



    function reset() {
        randomNumber();
        number = Array(4).fill(0).map(makeARandomNumber);
        makeARandomNumber()
        counter = 0;
        $("#target-number").html(targetNumber);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#num-picked").html(counter);
        console.log(number)
    }


    $(".crystals").on("click", function () {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#num-picked").html(counter);
        if (counter == targetNumber) {
            wins++;
            reset();
            
        }
        else if (counter > targetNumber) {
            losses++;
            reset();
            
        };

        console.log(crystalValue)
    });
})