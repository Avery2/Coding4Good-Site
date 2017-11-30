$(document).ready(function(){
  $("a").click(function(event) {

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

  $("#proposal").click(function(event){
    var wind = window.open("/proposal", "popupWindow", "width=900,height=600,scrollbars=yes");
  });
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("buttontop").style.display = "block";
    } else {
      $("buttontop").style.display = "none";
    }
  }
});







//var email_address, name, major, orgnization, title, description;
