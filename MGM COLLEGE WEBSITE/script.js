var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
// Wait for the DOM content to load before adding the event listener
document.addEventListener("DOMContentLoaded", function() {
  // Find the search input element
  var searchInput = document.getElementById("mySearch");
  // Check if the search input exists
  if (searchInput) {
    // Add the event listener for keyup event
    searchInput.addEventListener("keyup", searchFunction);
  }
});

// Define the search function
function searchFunction() {
  var input, filter, div, h2, a, i, txtValue;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  div = document.querySelectorAll(".views-row");

  // Loop through all items, hide those that don't match the search query
  for (i = 0; i < div.length; i++) {
    h2 = div[i].querySelector("a"); // Assuming the title is inside an anchor tag inside each "views-row" element
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}

function getFileNameFromPath(path) {
  return path.split('/').pop(); // Get the last segment of the path
}
// Toggle responsive navigation menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}