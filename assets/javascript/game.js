$(document).ready(function () {


    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/sounds/themesong.mp3");

    // Theme Button
    $(".theme-button").on("click", function () {
        audioElement.play();
    });
    $(".pause-button").on("click", function () {
        audioElement.pause();
    });


    //Onlick function
    var Characters = {
        character1: {
            name: "Obiwan Kanobi",
            healthp: 170,
            attackp: 25,
            counterp: 10
        },
        character2: {
            name: "Rey",
            healthp: 130,
            attackp: 25,
            counterp: 10
        },
        character3: {
            name: "Yoda",
            healthp: 185,
            attackp: 25,
            counterp: 10
        },
        character4: {
            name: "Darth Vader",
            healthp: 200,
            attackp: 25,
            counterp: 10
        },
    }
    var myAttacker = null
    var myDefender = null
    var myArrayAttacker = null
    var others = null
    var original = null
    var characterCopy=null

        $(document).on("click", "figure", function () {
          if ($(this).parent().hasClass("characters")) {
            $(this).addClass("attacker")
            myAttacker = $(this)
            myArrayAttacker = characterCopy[myAttacker.attr("id")]
            $(".mt-5").text("Your character is " + Characters[$(this).attr("id")].name)
            var others = $(".characters").children().not('.attacker');
            $(".enermy").append(others)
    
           
          } else if ($(this).parent().hasClass("enermy")) {
            myDefender = $(this)
            myArrayDefender = Characters[myDefender.attr("id")]
            if ($(".defender").children().length == 0) {
              $(".defender").append($(this))
            }
            others = $(".enermy").children()
           
          }
        })

        $(".buttonA").on("click", function () {
            
            var currentAttackHealth = myAttacker.find("figcaption").find("p").html()
            var currentDefenderHealth = myDefender.find("figcaption").find("p").html()
            currentDefenderHealth = currentDefenderHealth - myArrayAttacker.attackp
            currentAttackHealth = currentAttackHealth - myArrayDefender.counterp
            myAttacker.find("figcaption").find("p").html(currentAttackHealth)
            myDefender.find("figcaption").find("p").html(currentDefenderHealth)
            //attacker wins
            
            if (currentDefenderHealth<0){
                alert("The defender has died!")
                $(".defender").empty()
                myArrayAttacker.attackp +=10
            } 

            //defender wins
            if(currentAttackHealth<0){
                alert("You have died.Try playing again!")
              }

            //When win
            if ($(".enermy").children().length ==0 && $(".defender").children().length ==0){
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                modal.style.display="block";
                span.onclick=function(){
                    modal.style.display="none";
                }
            window.onclick=function(event){
                if(event.target == modal){
                    modal.style.display = "none";
                }
            }
            }

        })
        $(".buttonR").on("click", function () {
            $(".characters").empty()
            $(".defender").empty()
            $(".enermy").empty()
            $(".characters").append(original)
            characterCopy=JSON.parse(JSON.stringify(Characters));
         
            myAttacker = null
            myDefender = null
            myArrayAttacker = null
            myArrayDefender = null
            others = null
             play()
        })

    var play = function () {
        original = $(".characters").children().clone()
        characterCopy =JSON.parse(JSON.stringify(Characters));
        
    }

    play()


})
