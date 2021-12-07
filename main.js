const cards = [
  { name: `A` },
  { name: `B` },
  { name: `C` },
  { name: `D` },
  { name: `E` },
  { name: `F` },
  { name: `G` },
  { name: `H` },
  { name: `I` },
  { name: `J` },
  { name: `K` },
  { name: `L` },
  { name: `M` },
  { name: `N` },
  { name: `O` },
  { name: `P` },
  { name: `Q` },
  { name: `R` },
  { name: `S` },
  { name: `T` },
  { name: `U` },
  { name: `V` },
  { name: `W` },
  { name: `X` },
  { name: `Y` },
  { name: `Z` },
  { name: `A` },
  { name: `B` },
  { name: `C` },
  { name: `D` },
  { name: `E` },
  { name: `F` },
  { name: `G` },
  { name: `H` },
  { name: `I` },
  { name: `J` },
  { name: `K` },
  { name: `L` },
  { name: `M` },
  { name: `N` },
  { name: `O` },
  { name: `P` },
  { name: `Q` },
  { name: `R` },
  { name: `S` },
  { name: `T` },
  { name: `U` },
  { name: `V` },
  { name: `W` },
  { name: `X` },
  { name: `Y` },
  { name: `Z` },
];
function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

let deley = (ms) => {
  let time = new Date().getTime();
  let exp = time;
  while (exp < time + ms) {
    exp = new Date().getTime();
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}
function main() {
  console.log([...cards]);
  shuffle(cards);
  console.log(cards);
}
 
function chack(a, b) {
  console.log(a);
  console.log(b);
  return a.name == b.name && a != b;
}
let i=0
let compare=[]

let compareF= (obj)=> {
  compare[i]=obj;
  i++
  console.log(compare);
if (compare.length==2) {
    if (!(compare[0].innerHTML==compare[1].innerHTML&& compare[0].id!= compare[1].id)){
  setTimeout(()=> {// time delay for exucte the inner code lines
    compare[0].innerHTML="";
    compare[1].innerHTML="";
  }, 1500);
    } 
    setTimeout(()=> {// add time delay, bacuse the code keep going from the first delay and delete the argument from array "compare"
      compare=[]
      i=0
    }, 1880);

}
}

const cardClicked = (evn) => {
  // console.log(evn.target.innerHTML);
  if (i!=2) {
    const cardEl= evn.target;
    const idx = cardEl.id;
    cardEl.innerHTML= cards[idx].name;
    console.log(idx);
    compareF(cardEl)
  }
};
// let chack = (arr,i,j) => i != j && arr[i].name === arr[j].name

function creatCardElement(idx) {
  const board = document.getElementById("board");
  // console.log(board);
  // document.querySelector("")
  const cardEl = document.createElement("div");
  // cardEl.innerHTML = card.name;
  cardEl.id = idx;
  cardEl.className = "card";
  cardEl.onclick = cardClicked;
  board.appendChild(cardEl);
}

function main() {
  shuffle(cards);
  for (let idx in cards) {
    creatCardElement(idx);
  }
}

function f() {
  alert("fgsfgs");
}
// console.log(
//   chack(cards[randRange(0, cards.length)], cards[randRange(0, cards.length)])
// );
window.onload = () => {
  main();
};
