$(document).ready(function() {
  
 // moblie nav
    //js--nav-icon
    // js--main-nav
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      
     // nav.slideToggle(200);
     nav.animate({width: 'toggle'});
      
      if (icon.hasClass('ion-ios-menu')) {
          icon.addClass('ion-ios-close');
          icon.removeClass('ion-ios-menu');
      } else {
          icon.addClass('ion-ios-menu');
          icon.removeClass('ion-ios-close');
      }        
    });



    

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 5;
//   document.documentElement.scrollTop = 0;
// }

    
    });
    
    