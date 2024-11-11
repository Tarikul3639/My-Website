

document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  window.addEventListener("scroll", function () {
    if (mediaQuery.matches) {
      console.log(this.scrollY);

// Follow cursor on move
document.addEventListener("mousemove", (e) => {
  function mouseStopped() {
    cursor.style.display = "none";
  }

  // Set a new timeout
  timeout = setTimeout(mouseStopped, 500);
});
      // Check if the media query matches
      // Contact Box
      if (window.scrollY >= 1800) {
        contact_box.style.transform = "";
        contact_box.style.transition = "1s";
      } else {
        contact_box.style.transform = "rotateY(20deg)";
        contact_box.style.transition = "1s";
      }
      if (window.scrollY >= 1800) {
        contact_me_1.style.marginLeft = "";
        contact_me_1.style.transition = "1.5s";
        contact_me_2.style.marginLeft = "";
        contact_me_2.style.transition = "1.5s";
        contact_me_3.style.marginLeft = "";
        contact_me_3.style.transition = "1.5s";
      } else {
        contact_me_1.style.marginLeft = "20%";
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
  
  const scrollToPosition = 850;

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
  const scrollToPosition = 1700;
  
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
// Project Section scrolling animation
const project_section_h1 = document.querySelector(".project_section h1");
const project_section_h2 = document.querySelector(".project_section h2");
const project1_image = document.querySelector(".project1 img");
const project2_image = document.querySelector(".project2 img");
const project3_image = document.querySelector(".project3 img");

window.addEventListener("scroll",function(){
  
  if(1000<= scrollY && 1800>=scrollY){
    project_section_h1.style.marginLeft=""
    project_section_h1.style.transition="1s"
    project_section_h2.style.marginLeft=""
    project_section_h2.style.transition="1s"
    project1_image.style.transform = "";
    project1_image.style.transition = "1s";
    project2_image.style.transform = "";
    project2_image.style.transition = "1s";
    project3_image.style.transform = "";
    project3_image.style.transition = "1s";
}
else{
  project_section_h1.style.marginLeft="10rem"
    project_section_h2.style.marginLeft="-10rem"
  project1_image.style.transform = "skew(-15deg, -5deg)";
  project2_image.style.transform = "skew(-15deg, -5deg)";
  project3_image.style.transform = "skew(-15deg, -5deg)";
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
  if(scrollY >= 1590){
    SIDE_CONTACT.classList.add("active");
  }
  else{
    SIDE_CONTACT.classList.remove("active");
  }
 });




//Contact Me click event
document.querySelector(".contact_1").addEventListener("click",
  function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const phoneNumber = '01909290959';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(whatsappURL, '_blank');
});
document.querySelector(".contact_2").addEventListener("click", function(event) {
  event.preventDefault();

  const email = 'tarikulislam3639@gmail.com';
  const mailtoURL = `mailto:${email}`;

  window.location.href = mailtoURL;
});

document.querySelector(".contact_3").addEventListener("click", function(event) {
  event.preventDefault(); // Call preventDefault directly from the event object
  const location = `https://maps.app.goo.gl/82fJpeNFM8iJ4Ngf6`;
  window.open(location, '_blank'); // Open the location in a new tab
});


});
