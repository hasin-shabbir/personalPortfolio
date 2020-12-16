//change it to on document ready when the website has a lot of heavy content
var docState=document.readyState;

var load=document.getElementsByClassName("loader-container");
if(docState!=="uninitialized"){removeLoader();};

function removeLoader(){
  setTimeout(function(){
    load[0].classList.add("hidden");
    load[0].style.zIndex="-999";
  }, 2500);
};
