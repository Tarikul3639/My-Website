

document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(max-width: 450px)");

  window.addEventListener("scroll", function () {
    if (mediaQuery.matches) {
      // Check if the media query matches
      if (window.scrollY >= 1600) {
        contact_box.style.transform = "";
        contact_box.style.transition = "1s";
      } else {
        contact_box.style.transform = "rotateY(180deg)";
        contact_box.style.transition = "1s";
      }
      if (window.scrollY >= 1900 && window.scrollY <= 2200) {
        contact_me_1.style.marginLeft = "";
        contact_me_1.style.transition = "1.5 else";
        contact_me_2.style.marginLeft = "";
        contact_me_2.style.transition = "1.5s";
        contact_me_3.style.marginLeft = "";
        contact_me_3.style.transition = "1.5s";
      } else {
        contact_me_1.style.marginLeft = "50%";
        contact_me_2.style.marginLeft = "20%";
        contact_me_3.style.marginLeft = "-20%";
      }
    }
  });
  // SIDE Bar Customize
  // Sidebar Customize

  const fa_xmark = document.querySelector(".nav_bar .fa-xmark");
  const fa_bars = document.querySelector(".nav_bar .fa-bars");
  const Sidebar = document.querySelector(".Sidebar");
  const SIDE_HOME = document.querySelector(".SIDE_HOME");
  const SIDE_ABOUT = document.querySelector(".SIDE_ABOUT");
  const SIDE_PROJECT = document.querySelector(".SIDE_PROJECT");
  const SIDE_CONTACT = document.querySelector(".SIDE_CONTACT");

  fa_bars.addEventListener("click", function () {
    Sidebar.style.right = "0%";
    fa_bars.style.display = "none";
    fa_xmark.style.display = "block";
  });

  fa_xmark.addEventListener("click", function () {
    Sidebar.style.right = "-100%";
    fa_bars.style.display = "block";
    fa_xmark.style.display = "none";
  });


  SIDE_HOME.addEventListener("click", scrollToHome);
  // Function to handle the scroll
  function scrollToHome() {
    window.scrollTo({
      top: SIDE_HOME.offsetTop - 50 * 16, // 50rem converted to pixels (assuming 1rem = 16px)
      behavior: "smooth", // Optional: adds smooth scrolling effect
    });
    if (scrollY >= 0 && scrollY <= 410) {
      SIDE_HOME.classList.add("active");
    } else {
      SIDE_HOME.classList.remove("active");
    }
  }

  window.addEventListener("scroll", function() {
    if (scrollY >= 0 && scrollY <= 410) {
      SIDE_HOME.classList.add("active");
    } else {
      SIDE_HOME.classList.remove("active");
    }
  });


// ABOUT page Button Click Event
SIDE_ABOUT.addEventListener("click", function() {
  const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
  const scrollToPosition = 35 * remToPx;

  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
  });
});
window.addEventListener("scroll",function(){
  if(scrollY >= 450 && scrollY <= 950){
    SIDE_ABOUT.classList.add("active");
  }
  else{
    SIDE_ABOUT.classList.remove("active");
  }
 });




 // Project Section Button Event
 SIDE_PROJECT.addEventListener("click", function() {
  const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
  const scrollToPosition = 72 * remToPx;
  
  window.scrollTo({
    top: scrollToPosition, 
    behavior: 'smooth' 
  });
});
window.addEventListener("scroll",function(){
  if(scrollY >= 950 && scrollY <= 1500){
    SIDE_PROJECT.classList.add("active");
  }
  else{
    SIDE_PROJECT.classList.remove("active");
  }
 });



// Contact section button Events  
function callMe() {
  const scrollToPosition = document.documentElement.scrollHeight;
  window.scrollTo({
    top: scrollToPosition, 
    behavior: 'smooth' 
  });
}
SIDE_CONTACT.addEventListener("click", callMe);

window.addEventListener("scroll",function(){
  if(scrollY >= 1590 && scrollY <= 2500){
    SIDE_CONTACT.classList.add("active");
  }
  else{
    SIDE_CONTACT.classList.remove("active");
  }
 });

});
