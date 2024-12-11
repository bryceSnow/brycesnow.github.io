// Joshua Snowden 2024
document.addEventListener("DOMContentLoaded", function() {
    nav_press("about"); // defaults to the about section on the load of page
});


function nav_press(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active')); // hide all sections
    document.getElementById(id).classList.add('active'); // reveal section by id
}