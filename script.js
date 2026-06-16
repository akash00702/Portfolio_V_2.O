// Typing Animation
const words = [
  "Akash Chandra Ghosh",
  "Software Developer",
  "Full Stack Developer",
  "Python Developer",
  "Django Developer",
  "Machine Learning Enthusiast",
  "Data Analyst",
  "Problem Solver",
  "DSA Learner",
  "Open Source Contributor",
  "Tech Explorer",
];

let i = 0;

setInterval(()=>{
document.getElementById("typingText").innerText = words[i];
i = (i + 1) % words.length;
},2000);


// Scroll Reveal
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(sec=>{
let top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("active");
}
});
});


// Skill Bar Animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".bar span").forEach(bar=>{
bar.style.width = bar.getAttribute("data-width");
});
});


// Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
topBtn.style.display =
window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = ()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};