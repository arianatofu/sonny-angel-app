document.addEventListener("DOMContentLoaded", () => {
  const shelf = document.getElementById("collection-shelf");
  const ownedNames = JSON.parse(localStorage.getItem("sonnyOwned") || "[]");

  // Loop through all series to find owned items
  sonnySeries.forEach(series => {
    // Filter out only the items you own in this specific series
    const myOwnedInSeries = series.items.filter(item => ownedNames.includes(item.name));

    if (myOwnedInSeries.length > 0) {
      const title = document.createElement("h2");
      title.textContent = series.name;
      
      const container = document.createElement("div");
      container.className = "series";

      myOwnedInSeries.forEach(item => {
        // Reuse your createCard function here!
        container.appendChild(createCard(item, series.id));
      });

      shelf.append(title, container);
    }
  });

  if (ownedNames.length === 0) {
    shelf.innerHTML = "<p class='empty-msg'>Your shelf is empty! Go mark some angels as owned. 🌸</p>";
  }
});