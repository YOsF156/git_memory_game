const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = getRandom(0, arr.length);
    let a2 = getRandom(0, arr.length);
    console.log(a1 + "  " + a2);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function main() {
  create_card_element(cards[0])
}
main();

function check(i1, i2) {
  if (i1 != i2 && cards[i1].name == cards[i2].name) {
    return true;
  }
  return false
}

 function create_card_element(card) {
     const board= document.getElementById("board");
     const cardEl = document.createElement("div")
     cardEl.innerHTML= card.name;
     board.appendChild(cardEl)
     
 }

