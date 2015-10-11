
$(document).ready(function(){
	  
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*-- Resets Game --*/
    $('.new').click(function newGame(){
        location.reload();
    });

    /*--- Generates random number between 1 and 100 ---*/
    var secretNum;

    function randomNum() {
      secretNum = Math.floor(Math.random() * 100) + 1;
    }

    randomNum();


    /*-----Store, validate, and append user guess -------*/
    var userGuess = '';
    var numGuesses = 0;
    var prevGuess = '';
    var score = 1000;

    $("form").submit(function(event) {
      event.preventDefault();
      
      /*--Stores user input and parses to a number --*/
      userGuess = $('input[name="userGuess"]').val();
      $(this).children('#userGuess').val('');

      userGuess = parseInt(userGuess);

      if(isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        $("#feedback").html('Please enter a number between 1 and 100! :)');
      }
      else{
        numGuesses++;
        $('#count').html(numGuesses);
        howClose(userGuess);
      };

      $('#guessList').append('<li>' + userGuess + '</li>')

      return userGuess;

     });

         
     
    /*--Compares current guesses, previous guesses and 
    the randomly generated game number with conditional
    statements--*/
    

    function howClose(userGuess) {

        if(numGuesses === 1 && userGuess === secretNum){
          $("#feedback").html('Are you clairvoyant? You got it on the first try!');
          playQueen();
        }

        else if(userGuess === secretNum) {
          $("#feedback").html('Congratulations! You got it!');
          playQueen();
        }

        else if(prevGuess) {
            if(Math.abs(userGuess - secretNum) > Math.abs(prevGuess - secretNum)) {
              $("#feedback").html("You're getting colder!");
            }

            else {
              $("#feedback").html("You're getting warmer!");
            }
        }

        else if(Math.abs((userGuess - secretNum)) <= 5) {
          $("#feedback").html('You are smoking hot!');
        }

        else if(Math.abs((userGuess - secretNum)) <= 10) {
          $("#feedback").html('You are hot!');
        }

        else if(Math.abs((userGuess - secretNum)) <= 20) {
          $("#feedback").html('You are warm!');
        }

        else if(Math.abs((userGuess - secretNum)) <= 30) {
          $("#feedback").html('You are cool!');
        }

        else if(Math.abs((userGuess - secretNum)) <= 40) {
          $("#feedback").html('You are cold!');
        }

        else {
          $("#feedback").html('You are ICE cold!');
        }

        prevGuess = userGuess;

        adjustScore();

        //return prevGuess;

      };

      /*---Subtracts 50 from the starting score for incorrect guesses----*/
        function adjustScore() {
          if(userGuess !== secretNum) {
            var newScore = score - (50 * numGuesses);
            $('#points').children('p').html(newScore);
            return newScore;
          }

        }

        function playQueen() {
          $('#queen-song')[0].volume=0.5;
          $('#queen-song')[0].load();
          $('#queen-song')[0].play();
    }

});


