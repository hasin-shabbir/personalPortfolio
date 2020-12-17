var subButton=document.getElementById('submit');
var it1=document.getElementById('formItem-1');
var it2=document.getElementById('formItem-2');
var it3=document.getElementById('formItem-3');

// prevent redirection from page and give an alert upon form submission
subButton.addEventListener("click", function(e) {
  //if any of the form fields is empty
  if(it1.value==="" || it2.value==="" || it3.value===""){
    //prevents default action of submit button - prevents redirection
    e.preventDefault();
    //give an alert to user
    alert('Please fill in the fields');
  }else{
    //give confirmation alert to user
    alert('Submitted! I will get back to you soon.');
  }
});
