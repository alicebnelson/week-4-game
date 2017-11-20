$( document ).ready(function() {
    
    var neggNumber = Math.floor(Math.random()* 102 + 19);
    var yourNumber = 0;
    var wins = 0;
    var losses = 0;

    $("#neggNumber").text(neggNumber);
    $("#yourNumber").text(yourNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
 

    //for each element the negg class, add a random value
    $(".negg").each(function(){
        $(this).attr("value", Math.floor(Math.random()* 12 + 1));
    })

    //I made this function so I could put it in the if and else if statement
    function randomValueGenerated (){
      $(".negg").each(function(){
        $(this).attr("value", Math.floor(Math.random()* 12 + 1));})  
    }

    //I had this code before but I knew I was repeating myself. That's where the above function with .each comes in
   // $("#negg1").attr("value", Math.floor(Math.random()* 12 + 1));
   // $("#negg2").attr("value", Math.floor(Math.random()* 12 + 1));
   // $("#negg3").attr("value", Math.floor(Math.random()* 12 + 1));
   // $("#negg4").attr("value", Math.floor(Math.random()* 12 + 1));

    $(".negg").click(function(){
        yourNumber += Number($(this).attr("value"));
        $("#yourNumber").text(yourNumber);

            if (neggNumber === yourNumber){ //if the negg number = yournumber, you win, displays are updated, and other numbers are randomly generated
                wins++;
                $("#wins").text(wins); //I have to update the input everytime
                neggNumber = Math.floor(Math.random()* 102 + 19); //I need to generate another random number
                $("#neggNumber").text(neggNumber);
                randomValueGenerated();
                yourNumber = 0;
                $("#yourNumber").text(yourNumber);

            } else if (neggNumber < yourNumber) {//if yournumber is greater than neggnumber , you lose, displays are updated, and other numbers are randomly generated
                losses++;
                $("#losses").text(losses);
                neggNumber = Math.floor(Math.random()* 102 + 19);
                $("#neggNumber").text(neggNumber);
                randomValueGenerated();
                yourNumber = 0;
                $("#yourNumber").text(yourNumber);
            }


    });


    

    
});

//my psuedocode at the start of this exercise 
//must have variables for neggNumber, yourNumber, wins, losses
//when page loads, neggs are each assigned a random number
//when page loads, negg number is generated
//when on click, the neggs increase by random number & your number increases as well
//when yourNumber = NeggNumber, wins++, yourNumber = 0, neggNumber randomly generated, neggs randomy generated
//when yourNumber > NeggNumber, losses++, yourNumber = 0, neggNumber randomly genorated, neggs randomy generated