console.log('Hi! Welcome to my portfolio site')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
//Get the button:
mybutton = document.getElementById("myBtn");

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
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/////////adoptive design//////////
var href = window.location.href.split("/")
var html_location = href[href.length-1]

if (window.innerWidth >= 640 && html_location !== "index5.html") {
    window.location = "index.html";
}

if (window.innerWidth < 641 && html_location !== "index.html") {
    window.location = "index2.html";
}



/////using different stylesheet for mobile/////
function adjustStyle(width) {
  width = parseInt(width);
  if (width < 640) {
    $("#size-stylesheet").attr("href", "css/style5.css");
  } else if (width < 641) {
    $("#size-stylesheet").attr("href", "css/style4.css");
  }
}

$(function() {
  adjustStyle($(this).width());
  $(window).resize(function() {
    adjustStyle($(this).width());
  });
});
