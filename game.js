$(document).ready(function(){
  

    var theUnselected= [];
    
   
//first click
 selectedChar = $("figure").click(function(){
    $("h3").text("Your character")
    if (selectedChar = "#obiwan"){
        $("#obiwan").click(function(){
            $(".enermy").append($("#rey,#yoda,#ben"))})
    
        }if (selectedChar = "#rey")
            $(".enermy").append($("#obiwan,#yoda,#ben"))

 });
       
        










})






//step 1:
//when a character is clicked, it stays where it is

//the others move to "Enemy" div, their bd color change, h3 change text
//push them to empty div, hide them from (change attr class to css)

//step 2:
//in the enemy div, if a character is clicked, moves to Defender, the rest stays on the enemy line


// health code



var CharBtn = $("<button>");
