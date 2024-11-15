import { slide as title } from "./slides/title.js";
import { Color, Element } from "./types.js";

window.onload = () => {
  loadSlide(title);
};

let keyframe = 0;
let current_slide = null;
function loadSlide(slide) {
  current_slide = slide;
  runKeyframe(0);
  draw();
}

function draw() {
  document.body.innerHTML = "";
  document.body.style.backgroundColor =
    current_slide.background || Color.Background;
  for (const elem of current_slide.elements) {
    const html_element = createPhysicalElement(elem);
    document.body.appendChild(html_element);
  }
}

function createPhysicalElement(elem) {
  switch (elem.type) {
    case Element.Text:
      let phys = document.createElement("div");

      phys.style.fontFamily = "sans-serif";
      phys.style.fontSize = `${elem.font_size}px`;
      phys.innerText = elem.value;

      phys.style.color = elem.color;

      const [x, y] = [
        (window.innerWidth * (elem.position[0] + 1)) / 2,
        (window.innerHeight * (elem.position[1] + 1)) / 2,
      ];
      const [anchorX, anchorY] = [
        (elem.anchor[0] + 1) / 2,
        (elem.anchor[1] + 1) / 2,
      ];
      phys.style.position = "absolute";
      phys.style.left = `${x}px`;
      phys.style.top = `${y}px`;
      phys.style.transform = `translate(${-anchorX * 100}%, ${
        -anchorY * 100
      }%)`;

      return phys;
  }
}

function runKeyframe(index) {
  console.log(index, current_slide.keyframes);
  for (const anim of current_slide.keyframes[index]) {
    console.log(anim);
  }
}
function advance() {
  keyframe++;
  runKeyframe(index);
}

window.onresize = draw;
