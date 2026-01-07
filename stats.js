const stats = JSON.parse(localStorage.getItem("sonnyStats"));

Object.entries(stats).forEach(([id, s]) => {
  const percent = (s.owned / s.total) * 100;
  // render progress bar
});


document.addEventListener("DOMContentLoaded", () => {
    const owned = JSON.parse(localStorage.getItem("sonnyOwned") || "[]");
    const totalPossible = sonnySeries.reduce((sum, series) => sum + series.items.length, 0);
    
    const percentage = ((owned.length / totalPossible) * 100).toFixed(1);
    
    document.getElementById("stat-total").textContent = owned.length;
    document.getElementById("stat-percent").textContent = `${percentage}%`;
    
    // Optional: Breakdown by series
    const breakdown = document.getElementById("series-breakdown");
    sonnySeries.forEach(series => {
        const seriesOwned = series.items.filter(item => owned.includes(item.name)).length;
        const p = document.createElement("p");
        p.textContent = `${series.name}: ${seriesOwned} / ${series.items.length}`;
        breakdown.appendChild(p);
    });
});