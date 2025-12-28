const sonnySeries = {
  "Fruit Series": [
    {name: "Strawberry", img: "images/Strawberry.png"},
    {name: "Peach", img: "images/Peach.png"},
    {name: "Apple", img: "images/Apple.png"},
    {name: "Raspberry", img: "images/Raspberry.png"},
    {name: "Orange", img: "images/Orange.png"},
    {name: "Pear", img: "images/Pear.png"},
    {name: "Grape", img: "images/Grape.png"},
    {name: "Watermelon", img: "images/Watermelon.png"},
    {name: "Melon", img: "images/Melon.png"},
    {name: "Durian", img: "images/Durian.png"},
    {name: "Dragonfruit", img: "images/Dragonfruit.png"},
    {name: "Pineapple", img: "images/Pineapple.png"},
    {name: "Sprout", img: "images/Sprout.png"},
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

    sonnySeries[series].forEach(sonny => {
    const card = document.createElement("div");
    card.className = "sonny";

    const img = document.createElement("img");
    img.src = sonny.img;
    img.alt = sonny.name;

    const label = document.createElement("p");
    label.textContent = sonny.name;

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
    card.appendChild(button);
    seriesContainer.appendChild(card);
  });

  collectionDiv.appendChild(seriesContainer);
}
