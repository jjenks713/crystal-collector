$(document).ready(function() {

        var targetNumber = "";
        var counter = 0;
        var wins = 0;
        var losses = 0;
        var number = [0, 0, 0, 0];



        
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#num-picked").text(counter);

        function randomNumber() {
            targetNumber = [Math.floor(Math.random() * 50) + 50];
            console.log(targetNumber);
            $("#target-number").text(targetNumber);
        }       
        randomNumber();

        function crystalValues(max, min) {
            for (var i; i < 3; i++) {
            number.push[Math.floor(Math.random() * max) + min];
            }
            return number;
        }
        crystalValues(1,15);

        function resetCrystals() {
            for (var i = 0; i < number.length; i++) {
                var crystals = $("<img>");
                var crystals2 = $("<img>");
                var crystals3 = $("<img>");
                var crystals4 = $("<img>");
                crystals.addClass("crystals");
                crystals.attr("src", "./assets/pics/blue-gem.png", "./assets/pics/red-gem.png", "./assets/pics/yel-gem.png", "./assets/pics/green-gem.png");
                // crystals2.attr("src", "./assets/pics/red-gem.png");
                // crystals3.attr("src", "./assets/pics/yel-gem.png");
                // crystals4.attr("src", "./assets/pics/green-gem.png");
                crystals.attr("value", number[i]);
                $("#crys").append(crystals);
                $(".crystals").empty();
                console.log(crystals + crystals2 + crystals3 + crystals4);
            }
        }
        resetCrystals();

    
        function Reset() {
            randomNumber();
            // crystalValues();
            counter = 0;
            $("#target-number").html(targetNumber);
            $("#wins").html("Wins: " + wins);
            $("#losses").html("Losses: " + losses);
            $("#num-picked").html(counter);
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