// Interaction 1: Courses Button
document.getElementById("courses").addEventListener("click", function () {
  alert("Thanks for clicking on my courses!");
});


// Interaction 2: Toggle for Education
document.getElementById("programs").addEventListener("click", function () {
  let section = document.getElementById("education");

  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});


// Interaction 3: Hover Cards
let cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    cards[i].style.backgroundColor = "#e3d5ca";
  });

  cards[i].addEventListener("mouseout", function () {
    cards[i].style.backgroundColor = "var(--linen)";
  });
}


// Interaction 4: Change Header Text
document.querySelector("header h1").addEventListener("click", function () {
  this.innerHTML = "Welcome to My Portfolio!";
});


// Interaction 5: Page Load Greeting
window.addEventListener("load", function () {
  let hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  alert(message);
});


// Card Button Links
let links = [
  "https://engineeringunleashed.com/card/4842",
  "https://engineeringunleashed.com/card/4817",
  "https://engineeringunleashed.com/card/5948",
  "https://docs.google.com/presentation/d/1RCu0Ndq6VeBFWRW7r_rht3_PrZMEb7ofFQQLJOROgx4/edit?usp=sharing"
];

let buttons = document.querySelectorAll(".cardBtn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    window.open(links[i], "_blank");
  });
}