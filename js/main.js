/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var responsive = document.getElementById("topNav");
    if (responsive.className === "topnav") {
        responsive.className += " responsive";
    } else {
        responsive.className = "topnav";
    }
}


/* Make nav background change colour on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".topnav,h1.intro").addClass("active"); //adds the active class to topnav
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".topnav,h1.intro").removeClass("active");
	}
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Pub picker JavaScript

function myPub() {
	var pubNames = ["Eagle & Child", "Wonkey Donkey", "The Gillygate", "Minster Inn", "Guy Fawkes", "Lamb & Lion", "Sutlers", "Fossgate Social", "The Hop", "The Phoenix", "Pavement Vaults", "The Habit", "Rose & Crown", "Black Swan", "White Swan", "Brigantes", "The Falcon Tap", "Brewdog"];
	var random = pubNames[Math.floor(Math.random() * pubNames.length)];
		
	document.getElementById("where").innerHTML = random;
}