// animates the skill bar as soon as the skill bars come into view
const elementTarget = document.querySelectorAll(".techSkill");
window.addEventListener("scroll", function() {
  elementTarget.forEach(elem => {
    var position=elem.getBoundingClientRect();
    //checks for if the skillbars are in the view port
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      //animates skillbars if they are in the viewport
      if(elem.classList.contains("skill-Cpp")){
        elem.classList.add("codeconCpp")
      }
      else if(elem.classList.contains("skill-Py")){
        elem.classList.add("codeconPy")
      }
      else if(elem.classList.contains("skill-HTML")){
        elem.classList.add("codeconHTML")
      }
      else if(elem.classList.contains("skill-JS")){
        elem.classList.add("codeconJS")
      }
      else if(elem.classList.contains("skill-CSS")){
        elem.classList.add("codeconCSS")
      }
      else if(elem.classList.contains("skill-Mailchimp")){
        elem.classList.add("codeconMailchimp")
      }
    }
  });
});
