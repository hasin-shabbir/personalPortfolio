// script to open and close the accordion
var acc = document.getElementsByClassName("accordion");
var i;
var pan = document.getElementsByClassName("panel");
var j;

// script to close any open accordion before opening a new one
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {//for any click on an accordion
    for (j=0;j<acc.length;j++){
      if(acc[j]!==this){
        // /if the any other item is open, close it
        acc[j].nextElementSibling.style.maxHeight=null;
        if(acc[j].classList.contains("active")){acc[j].classList.toggle("active");}
      }
    }
    //open the accordion that was clicked on
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
