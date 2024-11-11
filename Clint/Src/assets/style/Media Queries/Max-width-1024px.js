// max-width: 1024px
document.addEventListener("DOMContentLoaded", function() {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    
    
    if (mediaQuery.matches) {
      // About section 
      const ABOUT = document.querySelector(".ABOUT");
  
      ABOUT.addEventListener("click", function() {
        const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
        const scrollToPosition = 35 * remToPx;
  
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      });
      // Project section
      const PROJECT = document.querySelector(".PROJECT");
      PROJECT.addEventListener("click", function() {
    const remToPx = 16; // ১ রেম সমান ১৬ পিক্সেল
    const scrollToPosition = 71 * remToPx;
    
    window.scrollTo({
      top: scrollToPosition, 
      behavior: 'smooth' 
    });
  });
    

    // max-width: 450px
    const mediaQuery450 = window.matchMedia("(max-width: 450px)");
    if (mediaQuery450.matches) {
      const profile_of_about_section_svg = document.querySelector(".profile_of_about_section svg");
      window.addEventListener("scroll", function(){
        if (400 <= this.scrollY && 800 >= this.scrollY) {
          profile_of_about_section_svg.style.height = "";
          profile_of_about_section_svg.style.transition = "1s";
        } else {
          profile_of_about_section_svg.style.height = "18rem";
        }
      });
    }
  }
  });