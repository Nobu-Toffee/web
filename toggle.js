function toggleSection(button) {
    const paragraph = button.nextElementSibling;
    if (paragraph.style.display === "none" || !paragraph.style.display) {
        paragraph.style.display = "block";
        button.textContent = "Ocultar";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Mostrar más";
    }
}
