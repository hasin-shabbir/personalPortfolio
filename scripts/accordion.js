var acc = document.getElementsByClassName("accordion");
var i;
var pan = document.getElementsByClassName("panel");
var j;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (j=0;j<acc.length;j++){
      if(acc[j]!==this){
        acc[j].nextElementSibling.style.maxHeight=null;
        if(acc[j].classList.contains("active")){acc[j].classList.toggle("active");}
      }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
