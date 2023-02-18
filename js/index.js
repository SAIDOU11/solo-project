let cards = []; // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
  name: "Saidou",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chips + " $";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
console.log(cards);

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
console.log(getRandomCard());

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  getRandomCard();
  renderGame();
  console.log(cards);
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;

  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
