function toggleMenu(){
  const nav = document.getElementById("menu");
  if(nav.style.display === "flex"){
    nav.style.display = "none";
  }else{
    nav.style.display = "flex";
  }
}
const socials = document.querySelectorAll(".social");

socials.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.1)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
  });
});
const resumeBtn = document.querySelector(".resume-btn");

resumeBtn.addEventListener("mouseenter", () => {
  resumeBtn.style.letterSpacing = "1px";
});

resumeBtn.addEventListener("mouseleave", () => {
  resumeBtn.style.letterSpacing = "0";
});