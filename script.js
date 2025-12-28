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
  // Create series title
  const seriesTitle = document.createElement("h2");
  seriesTitle.textContent = series;
  collectionDiv.appendChild(seriesTitle);

  // Create container for this series
  const seriesContainer = document.createElement("div");
  seriesContainer.className = "series";

  // Create cards
    sonnySeries[series].forEach(sonny => {
    const card = document.createElement("div");
    card.className = "sonny";

    if (sonny.secret) {
        const star = document.createElement("img");
        star.src = "images/star.png";
        star.className = "secret-star";
        star.alt = "Secret";
        card.appendChild(star);
}

  // Create images
    const img = document.createElement("img");
    img.src = sonny.img;
    img.alt = sonny.name;

    const label = document.createElement("p");
    label.textContent = sonny.name;

    const heart = document.createElement("img");
    heart.src = "images/heart-empty.png";
    heart.className = "heart";
    heart.alt = "Add to wishlist"

    heart.addEventListener("click", () => {
        heart.src =
            heart.src.includes("heart-empty.png")
                ? "images/heart-filled.png"
                : "images/heart-empty.png";
});

card.appendChild(heart);


    const button = document.createElement("button");
    button.textContent = "Not owned";

    button.addEventListener("click", () => {
      button.textContent =
        button.textContent === "Not owned"
          ? "Owned"
          : "Not owned";
    });

    card.appendChild(img);
    card.appendChild(label);
    card.appendChild(heart);
    card.appendChild(button);
    seriesContainer.appendChild(card);
  });

  collectionDiv.appendChild(seriesContainer);
}


