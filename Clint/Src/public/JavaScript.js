const cursor = document.querySelector(".cursor");
let timeout;

// Follow cursor on move
document.addEventListener("mousemove", (e) => {
  let x = e.clientX; // Use clientX instead of pageX
  let y = e.clientY; // Use clientY instead of pageY
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // Clear any existing timeout
  clearTimeout(timeout);

  // Cursor effect when mouse stops
  function mouseStopped() {
    cursor.style.display = "none";
  }

  // Set a new timeout
  timeout = setTimeout(mouseStopped, 2000);
});

// Cursor effect on mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});


document.addEventListener("click", () => {
  // Toggle a class that changes the cursor size
  cursor.classList.add("large-cursor");
  if (cursor) {
    // Change cursor size temporarily
    cursor.style.height = "20px";
    cursor.style.width = "20px";
  }

  // Reset cursor size after a delay (e.g., 500ms)
  setTimeout(() => {
    cursor.classList.remove("large-cursor");
    cursor.style.height = "";
    cursor.style.width = "";
  }, 200);
});

// Profile photo transition timing
window.onload = function() {
  setTimeout(function() {
    document.getElementsByClassName('background_image')[0].style.opacity = 1;
  }, 500); // 1000 milliseconds = 1 seconds
};
//download icon

// Select the elements
const cvButton = document.querySelector(".cvButton");
const cvDownloadIcon = document.querySelector(".cvButton i");
const resumeButton = document.querySelector(".resumeButton");
const resumeDownloadIcon = document.querySelector(".resumeButton i");


//CV download function
cvButton.addEventListener("click", function() {
  const link = document.createElement('a');
  link.href = 'CV & RESUME/CV.pdf'; 
  link.download = 'CV & RESUME/CV.pdf';
  link.click();
  cvButton.style.background="transparent";
  cvButton.style.color="#08ff99";
  cvDownloadIcon.style.background="transparent";
  cvDownloadIcon.style.color="#08ff99";
});
//Resume Download function
resumeButton.addEventListener("click",function(){
  const link = document.createElement("a");
  link.href="CV.pdf";
  link.download="CV.pdf";
  link.click();
  resumeButton.style.background="transparent";
  resumeButton.style.color="#08ff99";
  resumeDownloadIcon.style.background="transparent";
  resumeDownloadIcon.style.color="#08ff99";
});
//Social media icon function for linkup
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const github = document.querySelector(".github");
const linkedin = document.querySelector(".linkedin");

facebook.addEventListener("click",function(){
  const link = document.createElement("a");
  link.href="https://www.facebook.com/tarikulislam3639";
  link.click();
});
github.addEventListener("click",function(){
  const link = document.createElement("a");
  link.href="https://github.com/Tarikul3639";
  link.click();
});
twitter.addEventListener("click",function(){
  const link = document.createElement("a");
  link.href="https://x.com/Tarikul3639";
  link.click();
});
linkedin.addEventListener("click",function(){
  const link = document.createElement("a");
  link.href="https://www.linkedin.com/in/tarikul-islam-a439a0253";
  link.click();
});
// Nab bar section
const nav_bar = document.querySelector(".nav_bar");
window.addEventListener("scroll", function() {
  nav_bar.style.position="fixed";
  nav_bar.style.left="0";
  nav_bar.style.top="0";
});
// Contact_Me_animated_button
const Contact_Me_animated_button=document.querySelector(".Contact_Me_animated_button");
Contact_Me_animated_button.addEventListener("click",function(){
  setTimeout(function(){
    Object.assign(Contact_Me_animated_button.style, {
      border: "2px solid #08ff99",
      color: '#08ff99',
      background:"#1c1b22"
      // boxShadow: "0 0 10px #08ff99, 0 0 40px #08ff99, 0 0 80px #08ff99"
    });
    
  },0);
  setTimeout(function(){
    Object.assign(Contact_Me_animated_button.style, {
      border: "",
      color: '',
      boxShadow: "",
      background:""
    });
    
  },5000);
 
});
// Scrolling animation..

//About section scrolling animation
const profile_of_about_section = this.document.querySelector('.profile_of_about_section');
const all_text_of_about_section = document.querySelector(".all_text_of_about_section");
const profile_of_about_section_svg = document.querySelector(".profile_of_about_section svg");
window.addEventListener("scroll",function(){
  
  
  if (400 <= this.scrollY && 800 >= this.scrollY) {

  profile_of_about_section.style.marginRight="";
  profile_of_about_section.style.transition="1s";

  all_text_of_about_section.style.marginLeft="";
    all_text_of_about_section.style.transition="1s";
    
}
else{
  profile_of_about_section.style.marginRight="8rem";
  all_text_of_about_section.style.marginLeft="-2rem";

}
});
// Project Section scrolling animation
const project_section_h1 = document.querySelector(".project_section h1");
const project_section_h2 = document.querySelector(".project_section h2");
const project1_image = document.querySelector(".project1 img");
const project2_image = document.querySelector(".project2 img");
const project3_image = document.querySelector(".project3 img");

window.addEventListener("scroll",function(){
  
  if(1000<= scrollY && 1500>=scrollY){
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

// Contact section scrolling animation
const contact_box = document.querySelector(".contact_box");
const contact_me_1 = document.querySelector(".contact_1");
const contact_me_2 = document.querySelector(".contact_2");
const contact_me_3 = document.querySelector(".contact_3");

window.addEventListener("scroll", function()
 {
  
  if(scrollY >= 1600 && scrollY <= 2000){
    contact_me_1.style.marginLeft="";
    contact_me_1.style.transition="1s";
    contact_me_2.style.marginLeft="";
    contact_me_2.style.transition="1s";
    contact_me_3.style.marginLeft="";
    contact_me_3.style.transition="1s";
    contact_box.style.transform = "";
    contact_box.style.transition="1s";
   }
   else{
    contact_me_1.style.marginLeft="-7rem";
    contact_me_2.style.marginLeft="-5.9rem";
    contact_me_3.style.marginLeft="-4.7rem";
    contact_box.style.transform = "skew(15deg, 5deg)";
    contact_box.style.transition="1s";
   }
}
);

// Home page Button Click Event
const HOME = document.querySelector(".HOME");
const Nav_Bar_Home_Image = document.querySelector(".Nav_Bar_Home_Image");

// Function to handle the scroll
function scrollToHome() {
  window.scrollTo({
    top: HOME.offsetTop - 50 * 16, // 50rem converted to pixels (assuming 1rem = 16px)
    behavior: "smooth", // Optional: adds smooth scrolling effect
  });

}

// Add event listeners to both elements
Nav_Bar_Home_Image.addEventListener("click", scrollToHome);
HOME.addEventListener("click", scrollToHome);

window.addEventListener("scroll", function() {
  if (scrollY >= 0 && scrollY <= 410) {
    HOME.classList.add("active");
  } else {
    HOME.classList.remove("active");
  }
});
// ABOUT page Button Click Event
const ABOUT = document.querySelector(".ABOUT");

ABOUT.addEventListener("click", function() {
  const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
  const scrollToPosition = 38.2 * remToPx;
  
  window.scrollTo({
    top: scrollToPosition, 
    behavior: 'smooth' 
  });
});

window.addEventListener("scroll",function(){
  if(scrollY >= 450 && scrollY <= 950){
   ABOUT.classList.add("active");
  }
  else{
   ABOUT.classList.remove("active");
  }
 });
 
// Project Section Button Event
const PROJECT = document.querySelector(".PROJECT");
PROJECT.addEventListener("click", function() {
  const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
  const scrollToPosition = 80 * remToPx;
  
  window.scrollTo({
    top: scrollToPosition, 
    behavior: 'smooth' 
  });
});
window.addEventListener("scroll",function(){
  if(scrollY >= 950 && scrollY <= 1500){
    PROJECT.classList.add("active");
  }
  else{
    PROJECT.classList.remove("active");
  }
 });

const CONTACT = document.querySelector(".CONTACT");

// Contact section button Events  
function callMe() {
  const scrollToPosition = document.documentElement.scrollHeight;
  window.scrollTo({
    top: scrollToPosition, 
    behavior: 'smooth' 
  });
}
CONTACT.addEventListener("click", callMe);

window.addEventListener("scroll",function(){
  if(scrollY >= 1490 && scrollY <= 2000){
    CONTACT.classList.add("active");
  }
  else{
    CONTACT.classList.remove("active");
  }
 });

// Option selection option color change
 document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector(".select_option");
  
  selectElement.addEventListener('change', function() {
    if (this.value === "Web development"|| this.value == "App development") {
      this.style.color = "#ffffffe7";
    } else {
      this.style.color = ""; // Reset color if another option is selected
    }
  });
});






   






