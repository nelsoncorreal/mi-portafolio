let likeCounts = JSON.parse(localStorage.getItem("likeCounts")) || {};

function addLike(projectId) {
    if (!likeCounts[projectId]) {
        likeCounts[projectId] = 0;
    }
    likeCounts[projectId]++;
    document.getElementById(`like-count-${projectId}`).textContent = likeCounts[projectId];

    // Guarda el conteo actual de likes en el localStorage
    localStorage.setItem("likeCounts", JSON.stringify(likeCounts));
}

// Inicialización: carga el conteo de likes del localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    for (let projectId in likeCounts) {
        document.getElementById(`like-count-${projectId}`).textContent = likeCounts[projectId];
    }
});
