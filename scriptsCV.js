document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("idIngles");
    const credentialId = progressBar.querySelector(".credential-id");

    progressBar.addEventListener("mouseenter", function() {
        credentialId.style.display = "inline";
    });

    progressBar.addEventListener("mouseleave", function() {
        credentialId.style.display = "none";
    });
});