/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var responsive = document.getElementById("topNav");
    if (responsive.className === "topnav") {
        responsive.className += " responsive";
    } else {
        responsive.className = "topnav";
    }
}


/* Make nav background change colour, and logo fade out on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".topnav,h1.intro,h2.intro").addClass("active"); //adds the active class to topnav and banner logo
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".topnav,h1.intro,h2.intro").removeClass("active");
	}
});

// Shrink logo on scroll 
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$("img.logo").addClass("active"); //adds the active class to topnav and banner logo
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$("img.logo").removeClass("active");
	}
});

//Make information tiles appear
$(window).on("scroll", function() {
	if($(window).scrollTop() > 600) {
		$(".info-tiles").addClass("active"); //adds the active class to topnav and banner logo
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".info-tiles").removeClass("active");
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

