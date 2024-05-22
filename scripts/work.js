document.addEventListener("DOMContentLoaded", function () {
  // Get the brand name element
  var brandName = document.getElementById("brandName");

  // Add click event listener to the brand name element
  brandName.addEventListener("click", function () {
    // Navigate to the index.html page
    window.location.href = "../index.html";
  });
});
