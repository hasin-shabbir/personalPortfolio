const experienceTarget = document.querySelectorAll("#experience-item");
window.addEventListener("scroll", function() {
  experienceTarget.forEach(exElem => {
    var exPosition=exElem.getBoundingClientRect();
    if (exPosition.top >= 0 && exPosition.bottom <= window.innerHeight) {
      exElem.style.visibility="visible";
    }
  });
});
