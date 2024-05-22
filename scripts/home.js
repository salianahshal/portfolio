document.addEventListener("DOMContentLoaded", function () {
  // Get the brand name element
  var brandName = document.getElementById("brandName");

  // Add click event listener to the brand name element
  brandName.addEventListener("click", function () {
    // Navigate to the index.html page
    window.location.href = "index.html";
  });
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("view-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
