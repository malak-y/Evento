const nav = document.querySelector('nav');
const navToggle = document.querySelector('.fa-search');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
function changeColor() {
    // Select the element by its ID
    var element = document.getElementById("myElement");
    
    // Change the background color to a new color (e.g., red)
    element.style.backgroundColor = "red";
}