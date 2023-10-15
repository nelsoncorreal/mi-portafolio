let likeCounts = {};

function addLike(projectId) {
    if (!likeCounts[projectId]) {
        likeCounts[projectId] = 0;
    }
    likeCounts[projectId]++;
    document.getElementById(`like-count-${projectId}`).textContent = likeCounts[projectId];
}
