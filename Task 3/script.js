// for(let i = 0; i < 5; i++) {
//   const div = document.createElement("div");
//   div.classList.add("mydiv");
//   document.body.appendChild(div);
// }
// const myDivs = document.querySelectorAll(".mydiv");
// let clicksCount = 0;
// const clickCountDiv = document.createElement("div");
// const randomHexColorCode = () => {
//   let n = (Math.random() * 0xfffff * 1000000).toString(16);
//   return "#" + n.slice(0, 6);
// };
// randomHexColorCode();
// myDivs.forEach((div) => {
//   div.addEventListener("click", () => {
//     clicksCount++;
//     div.style.backgroundColor = randomHexColorCode();
//     clickCountDiv.textContent = `Total Clicks: ${clicksCount}`;
//   });
// });

const myDivs = document.querySelectorAll(".my-div");
let clicksCount = 0;
const clickCountDiv = document.createElement("div");
const resetBtn = document.getElementById("resetBtn");
const progressBar = document.querySelector(".progress-bar");
const gradients = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
  "bg-dark",
];

function getRandomGradient() {
  const index = Math.floor(Math.random() * gradients.length);
  return gradients[index];
}

myDivs.forEach((div) => {
  addDivClickListener(div);
  div.classList.add("bg-gradient");
});

function addDivClickListener(div) {
  div.addEventListener("click", function handler() {
    gradients.forEach((g) => div.classList.remove(g));
    div.classList.remove("bg-gradient");

    const randomGradient = getRandomGradient();
    div.classList.add(randomGradient, "bg-gradient");

    clicksCount++;
    clickCountDiv.textContent = `Total Clicks: ${clicksCount}`;
    progressBar.style.width = `${(clicksCount / 6) * 100}%`;
    if (clicksCount === 6) {
      const modal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    }
    div.removeEventListener("click", handler);
  });
}

document.body.appendChild(clickCountDiv);

resetBtn.addEventListener("click", () => {
  clicksCount = 0;
  clickCountDiv.textContent = `Total Clicks: ${clicksCount}`;
  progressBar.style.width = `0%`;

  myDivs.forEach((div) => {
    gradients.forEach((g) => {
      g.split(" ").forEach((cls) => div.classList.remove(cls));
    });
    addDivClickListener(div);
  });
});
