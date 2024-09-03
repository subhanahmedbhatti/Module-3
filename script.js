// script.js



function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.menu-item');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Initially show the first section
document.addEventListener('DOMContentLoaded', function() {
    showSection('chicken');
});

