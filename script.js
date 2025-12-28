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
    {name: "Rabbit", img: "images/new_rabbit_01-1.jpg", secret: false},
    {name: "White Bear", img: "images/new_whitebear_01-1.jpg", secret: false},
    {name: "Dalmatian", img: "images/new_dalmatian_01-1.jpg", secret: false},
    {name: "Elephant", img: "images/new_elephant_01-1.jpg", secret: false},
    {name: "Panda", img: "images/new_panda_01-1.jpg", secret: false},
    {name: "Sloth", img: "images/new_sloth_01-1.jpg", secret: false},
    {name: "Cockerel", img: "images/new_cockerel_01-1.jpg", secret: false},
    {name: "Frog", img: "images/new_frog_01-1.jpg", secret: false},
    {name: "Koala", img: "images/new_koala_01-1.jpg", secret: false},
    {name: "Monkey", img: "images/new_monkey_01-1.jpg", secret: false},
    {name: "Owl", img: "images/new_owl_01-1.jpg", secret: false},
    {name: "Squirrel", img: "images/squirrel.png", secret: true},
  ],
  "Flower Series": [
    {name: "Rose", img: "images/Rose.png", secret: false},
    {name: "Cherry Blossom", img: "images/CherryBlossom.png", secret: false},
    {name: "Poppy", img: "images/Poppy.png", secret: false},
    {name: "Sunflower", img: "images/Sunflower.png", secret: false},
    {name: "Cactus", img: "images/Cactus.png", secret: false},
    {name: "Morning Glory", img: "images/MorningGlory.png", secret: false},
    {name: "Lily Bell", img: "images/LilyBell.png", secret: false},
    {name: "Hydrangea", img: "images/Hydrangea.png", secret: false},
    {name: "Pansy", img: "images/Pansy.png", secret: false},
    {name: "Carnation", img: "images/Carnation.png", secret: false},
    {name: "Acorn", img: "images/Acorn.png", secret: false},
    {name: "Tulip", img: "images/Tulip.png", secret: false},
    {name: "Bee", img: "images/Bee.png", secret: true},
  ],
  "Vegetable Series": [
    {name: "Carrot", img: "images/Carrot.png", secret: false},
    {name: "Tomato", img: "images/Tomato.png", secret: false},
    {name: "Garlic", img: "images/Garlic.png", secret: false},
    {name: "Zucchini", img: "images/Zucchini.png", secret: false},
    {name: "Onion", img: "images/Onion.png", secret: false},
    {name: "Radish", img: "images/Radish.png", secret: false},
    {name: "Green Pepper", img: "images/GreenPepper.png", secret: false},
    {name: "Eggplant", img: "images/Eggplant.png", secret: false},
    {name: "Bok Choy", img: "images/BokChoy.png", secret: false},
    {name: "Cauliflower", img: "images/Cauliflower.png", secret: false},
    {name: "Cabbage", img: "images/Cabbage.png", secret: false},
    {name: "Shiitake", img: "images/Shiitake.png", secret: true},
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