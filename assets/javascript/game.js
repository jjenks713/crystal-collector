$(document).ready(function() {

        var targetNumber = "";
        var counter = 0;
        var wins = 0;
        var losses = 0;
        var images = ["./assets/pics/blue-gem.png", "./assets/pics/green-gem.png", "./assets/pics/red-gem.png", "./assets/pics/yel-gem.png"];



        
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        // $("#num-picked").text(counter);

        function randomNumber() {
            targetNumber = [Math.floor(Math.random() * 50) + 50];
            console.log(targetNumber)
            $("#target-number").text(targetNumber);
        }       
        randomNumber()
        
        function resetCrystals() {
            for (var i = 0; i < images.length; i++) {
                var crystals = $("<img>");
                crystals.addClass("crystals");
                crystals.attr("src", images[i]);
                crystals.attr("value", (Math.floor(Math.random() * 20) + 1));
                $("#crys").append(crystals);
                console.log(crystals.attr)
            }
        }
        resetCrystals()

    
        function Reset () {
            randomNumber ();
            counter = 0;
            $("#target-number").html(targetNumber);
            $("#wins").html("Wins: " + wins);
            $("#losses").html("Losses: " + losses);
            $("#num-picked").html(counter);
            $(".crystals").empty();
            resetCrystals ();
        }

        function crystalClick() {
            $("#num-picked").text(counter);
            var crystalValue = ($(this).attr("value"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;            
            if (counter == targetNumber) {
                wins++;
                Reset();
            }
            else if (counter > targetNumber) {
                losses++;
                Reset();
            };
            console.log(crystalValue)
        };
        
        crystalClick()
    
    
        $(document).on("click", ".crystals", crystalClick);
        

})