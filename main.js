const color1 = document.querySelector("input.color-1");
const color2 = document.querySelector("input.color-2");
const textColor = document.querySelector("input.text-color");
const deg = document.querySelector("input.color-degree");
const body = document.body;
const text = document.querySelector(".head h1");

color1.value = "#f06292";

color2.value = "#c21856";

deg.value = 320;

body.style.backgroundImage = `linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value})`;

color1.addEventListener("change", () => {
  body.style.backgroundImage = `linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value})`;
});

color2.addEventListener("change", () => {
  body.style.backgroundImage = `linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value})`;
});

deg.addEventListener("change", () => {
  body.style.backgroundImage = `linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value})`;
});

textColor.value = "#eeeeee";

text.style.color = textColor.value;

textColor.addEventListener("change", () => {
  text.style.color = textColor.value;
});
