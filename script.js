const block = document.querySelector(".block");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const elem = document.createElement("div");

  elem.classList.add("elem");
  elem.style.backgroundColor = generateColor();
  block.appendChild(elem);
});

function generateColor() {
  let str = "#";

  for (let i = 1; i <= 6; i++) {
    str += Math.floor(Math.random() * 16).toString(16);
  }

  return str;
}
