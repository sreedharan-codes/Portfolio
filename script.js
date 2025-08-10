// Typing effect
const text = "Software Developer | Tech Enthusiast | Problem Solver";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
window.onload = typeWriter;

// Fade-in on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggleBtn = document.querySelector(".dark-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀ Light" : "🌙 Dark";
});
