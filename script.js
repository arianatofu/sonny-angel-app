const sonnySeries = {
  "Fruit Series": [
    {name: "Strawberry", img: "images/Strawberry.png", secret: false},
    {name: "Peach", img: "images/Peach.png", secret: false},
    {name: "Apple", img: "images/Apple.png", secret: false},
    {name: "Raspberry", img: "images/Raspberry.png", secret: false},
    {name: "Orange", img: "images/Orange.png", secret: false},
    {name: "Pear", img: "images/Pear.png", secret: false},
    {name: "Grape", img: "images/Grape.png", secret: false},
    {name: "Watermelon", img: "images/Watermelon.png", secret: false},
    {name: "Melon", img: "images/Melon.png", secret: false},
    {name: "Durian", img: "images/Durian.png", secret: false},
    {name: "Dragonfruit", img: "images/Dragonfruit.png", secret: false},
    {name: "Pineapple", img: "images/Pineapple.png", secret: false},
    {name: "Sprout", img: "images/Sprout.png", secret: true},
  ],
  "Animal Series": [
    "Rabbit",
    "Bear",
    "Cat"
  ],
  "Flower Series": [
    "Rose",
    "Tulip"
  ],
  "Vegetable Series": [
    "Carrot",
    "Bok Choy"
  ]
};

const collectionDiv = document.getElementById("collection");

for (const series in sonnySeries) {
  // 1. Create a clean ID for the sidebar to jump to
  const seriesId = series.toLowerCase().replace(/\s+/g, '-');

  // 2. Create and append the Series Title
  const seriesTitle = document.createElement("h2");
  seriesTitle.textContent = series;
  seriesTitle.id = seriesId; // Matches the sidebar <a href="#fruit-series">
  collectionDiv.appendChild(seriesTitle);

  const seriesContainer = document.createElement("div");
  seriesContainer.className = "series";

  sonnySeries[series].forEach(sonny => {
    const card = document.createElement("div");
    card.className = "sonny";

    // 💡 NEW: Check if 'sonny' is an object or just a string
    const sName = typeof sonny === "object" ? sonny.name : sonny;
    const sImg = typeof sonny === "object" ? sonny.img : "images/placeholder.png";
    const isSecret = typeof sonny === "object" ? sonny.secret : false;

    // Heart Icon
    const heart = document.createElement("img");
    heart.src = "images/heart-empty.png";
    heart.className = "heart";
    heart.addEventListener("click", () => {
      heart.src = heart.src.includes("heart-empty.png")
        ? "images/heart-filled.png"
        : "images/heart-empty.png";
    });
    card.appendChild(heart);

    // Sonny Image
    const img = document.createElement("img");
    img.src = sImg; 
    img.alt = sName;
    img.className = "sonny-img";
    card.appendChild(img);

    // Name label
    const label = document.createElement("p");
    label.textContent = sName;
    card.appendChild(label);

    // Secret star (only if it's an object and secret is true)
    if (isSecret) {
      const star = document.createElement("img");
      star.src = "images/star.png";
      star.className = "secret-star";
      card.appendChild(star);
    }

    // Owned button
    const button = document.createElement("button");
    button.textContent = "Not owned";
    button.onclick = () => {
      button.textContent = button.textContent === "Not owned" ? "Owned" : "Not owned";
      button.style.backgroundColor = button.textContent === "Owned" ? "#b5ead7" : "#FFC9DE";
    };
    card.appendChild(button);

    seriesContainer.appendChild(card);
  });

  collectionDiv.appendChild(seriesContainer);
}