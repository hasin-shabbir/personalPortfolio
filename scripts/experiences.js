// script to make visible an experience item as it comes into the viewport
const experienceTarget = document.querySelectorAll("#experience-item");
window.addEventListener("scroll", function() {
  experienceTarget.forEach(exElem => {
    var exPosition=exElem.getBoundingClientRect();
    if (exPosition.top >= 0 && exPosition.bottom <= window.innerHeight) {
      exElem.style.visibility="visible";
    }
  });
});
