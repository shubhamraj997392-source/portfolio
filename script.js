// reveal animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// skill animation
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if(top < window.innerHeight){
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully! 🚀");
  this.reset();
});
// Dark Light Mode
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
});