//Sonny Series Array//

const sonnySeries = [
{
    id: "fruit",
    name: "Fruit Series",
    items: [
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
        {name: "Sprout", img: "images/Sprout.png", secret: true}
    ]
},

{
    id: "animal1",
    name: "Animal Series 1",
    items: [
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
        {name: "Squirrel", img: "images/squirrel.png", secret: true}
    ]
},

{
    id: "flower",
    name: "Flower Series",
    items: [
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
        {name: "Bee", img: "images/Bee.png", secret: true}
    ]
},

{
    id: "vegetable",
    name: "Vegetable Series",
    items: [
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
        {name: "Shiitake", img: "images/Shiitake.png", secret: true}
    ]
}
];

//Load HTML FIRST!//
// ... keep your sonnySeries array at the top as is ...

// We wrap everything in this to make sure the HTML is loaded first
document.addEventListener("DOMContentLoaded", () => {
  const collection = document.getElementById("collection");
  const navList = document.getElementById("seriesNav");
  const countSpan = document.getElementById("count");

  let ownedTotal = 0;

  // ONLY run this part if we are on the page with the seriesNav (Sidebar)
  if (navList) {
    sonnySeries.forEach(series => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      
      // IMPORTANT: Changed this so it always points back to index.html sections
      a.href = `index.html#${series.id}`; 
      a.textContent = series.name;
      a.className = "series-shortcut";
      
      li.appendChild(a);
      navList.appendChild(li);

      // ONLY render cards if the collection div exists (Home Page)
      if (collection) {
        renderSeries(series);
      }
    });
  }

  // Update the count on load based on what's in localStorage
  if (countSpan) {
    const ownedList = JSON.parse(localStorage.getItem("sonnyOwned") || "[]");
    ownedTotal = ownedList.length;
    countSpan.textContent = ownedTotal;
  }
});

function renderSeries(series) {
  const title = document.createElement("h2");
  title.id = series.id; // This is the 'anchor' the sidebar links jump to
  title.textContent = series.name;

  const container = document.createElement("div");
  container.className = "series";

  series.items.forEach(item => {
    container.appendChild(createCard(item, series.id));
  });

  const collection = document.getElementById("collection");
  collection.append(title, container);
}


// --- Sonny Angel Card Creation ---
function createCard(item, seriesId) {
  const card = document.createElement("div");
  card.className = "sonny";

  // HEART LOGIC (Favorites)
  const heart = document.createElement("img");
  const isFav = JSON.parse(localStorage.getItem("sonnyFavs") || "[]").includes(item.name);
  heart.src = isFav ? "images/heart-filled.png" : "images/heart-empty.png";
  heart.className = "heart";
  
  heart.onclick = () => {
    let favs = JSON.parse(localStorage.getItem("sonnyFavs") || "[]");
    if (favs.includes(item.name)) {
      favs = favs.filter(name => name !== item.name);
      heart.src = "images/heart-empty.png";
    } else {
      favs.push(item.name);
      heart.src = "images/heart-filled.png";
    }
    localStorage.setItem("sonnyFavs", JSON.stringify(favs));
  };

  // IMAGE & LABEL
  const img = document.createElement("img");
  img.src = item.img;
  img.className = "sonny-img";
  const label = document.createElement("p");
  label.textContent = item.name;

  // SECRET STAR
  if (item.secret) {
    const star = document.createElement("img");
    star.src = "images/star.png";
    star.className = "secret-star";
    card.appendChild(star);
  }
  // OWNED BUTTON
  const button = document.createElement("button");
  button.textContent = "Not owned";
    button.onclick = () => {
    const isOwned = button.textContent === "Owned";
    const newStatus = !isOwned; // If it was owned, it's now NOT owned
    
    button.textContent = newStatus ? "Owned" : "Not owned";
    button.style.backgroundColor = newStatus ? "#b5ead7" : "#FFC9DE";
    
    // Update the master list in LocalStorage
    saveOwnedStatus(item.name, newStatus);
    
    // NOW: Re-count that list and update the sidebar immediately
    const updatedList = JSON.parse(localStorage.getItem("sonnyOwned") || "[]");
    const countSpan = document.getElementById("count");
    if (countSpan) {
        countSpan.textContent = updatedList.length;
    }
    };

  card.append(heart, img, label, button);
  return card;
}

function saveOwnedStatus(name, status) {
  // 1. Get the current list from memory
  let ownedList = JSON.parse(localStorage.getItem("sonnyOwned") || "[]");

  if (status === true) {
    // 2. Add the name if it's not already there
    if (!ownedList.includes(name)) {
      ownedList.push(name);
    }
  } else {
    // 3. Remove the name if you uncheck "Owned"
    ownedList = ownedList.filter(n => n !== name);
  }

  // 4. Save the updated list back to memory
  localStorage.setItem("sonnyOwned", JSON.stringify(ownedList));
}
