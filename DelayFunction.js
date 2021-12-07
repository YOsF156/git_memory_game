
let deley = (ms) => {
  let time = new Date().getTime();
  let exp = time;
  while (exp < time + ms) {
    exp = new Date().getTime();
  }
};

for (let i = 10; i > 0; i--) {
  console.log(i);
  deley(1000);
}
console.log("boooom!!!");
