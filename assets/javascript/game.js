$(document).ready(function() {

        var targetNumber = "";
        var counter = 0;
        var wins = 0;
        var losses = 0;
        var number = [Math.floor(Math.random() * 15) + 1];
        var number1 = [Math.floor(Math.random() * 15) + 1];
        var number2 = [Math.floor(Math.random() * 15) + 1];
        var number3 = [Math.floor(Math.random() * 15) + 1];



        
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#num-picked").text(counter);

        function randomNumber() {
            targetNumber = [Math.floor(Math.random() * 50) + 50];
            console.log(targetNumber)
            $("#target-number").text(targetNumber);
        }       
        randomNumber()
        
        function resetCrystals() {
            for (var i = 0; i < number.length; i++) {
                var crystals = $("<img>");
                crystals.addClass("crystals");
                crystals.attr("src", "./assets/pics/blue-gem.png", "./assets/pics/red-gem.png", "./assets/pics/yel-gem.png", "./assets/pics/green-gem.png");
                crystals.attr("value", number[i]);
                $("#crys").html(crystals);
                console.log(crystals)
            }
        }
        resetCrystals()

    
        function Reset() {
            randomNumber ();
            counter = 0;
            $("#target-number").html(targetNumber);
            $("#wins").html("Wins: " + wins);
            $("#losses").html("Losses: " + losses);
            $("#num-picked").html(counter);
            $(".crystals").empty();
            resetCrystals ();
        }

        $(".crystals").on("click", function() {
            var crystalValue = ($(this).attr("value"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;       
            $("#num-picked").html(counter);     
            if (counter == targetNumber) {
                wins++;
                Reset();
            }
            else if (counter > targetNumber) {
                losses++;
                Reset();
            };
            
            console.log(crystalValue)
        });
        

        

})