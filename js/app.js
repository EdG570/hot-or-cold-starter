
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
        randomNum();
    });

    /*--- Generates random number between 1 and 100 ---*/
    var secretNum;

    function randomNum() {
      secretNum = Math.floor(Math.random() * 100) + 1;
      console.log(secretNum);
    }

    randomNum();


    /*-----Store user guess -------*/
    var userGuess = '';
    var numGuesses = 0;

    $("form").submit(function(event) {
      event.preventDefault();
      
      /*--Stores user input and parses to a number --*/
      userGuess = $('input[name="userGuess"]').val();
      $(this).children('#userGuess').val('');

      if(isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
        $("#feedback").replaceWith('<h2 id="#feedback">Please enter a number between 1 and 100! :)</h2>');
      }
      else{

        parseInt(userGuess);
        console.log(userGuess);
      };

      numGuesses++;
      $('#count').replaceWith('<span id="count">' + numGuesses + '</span>');

      howClose(userGuess);

      return userGuess;

     });

         
     
    /*--Compares userGuess and secretNum--*/
    function howClose(userGuess) {
        if(userGuess == secretNum) {
          $("#feedback").replaceWith('<h2 id="#feedback">Congratulations! You got it!</h2>');
        }

        else if(Math.abs((userGuess - secretNum)) <= 10) {
          $("#feedback").replaceWith('<h2 id="#feedback">You are hot!</h2>');
        }

        else if(Math.abs((userGuess - secretNum)) <= 20) {
          $("#feedback").replaceWith('<h2 id="#feedback">You are warm!</h2>');
        }

        else if(Math.abs((userGuess - secretNum)) <= 30) {
          $("#feedback").replaceWith('<h2 id="#feedback">You are cool!</h2>');
        }

        else if(Math.abs((userGuess - secretNum)) <= 40) {
          $("#feedback").replaceWith('<h2 id="#feedback">You are cold!</h2>');
        }

        else {
          $("#feedback").replaceWith('<h2 id="#feedback">You are ICE cold!</h2>');
        }
      };

});


