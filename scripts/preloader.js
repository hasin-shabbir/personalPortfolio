//remove the preloader after a set time interval
var docState=document.readyState;

var load=document.getElementsByClassName("loader-container");
if(docState!=="uninitialized"){removeLoader();};

function removeLoader(){
  setTimeout(function(){
    load[0].classList.add("hidden");
    load[0].style.zIndex="-999";
  }, 2500);
};
