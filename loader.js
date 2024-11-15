import { slide as title } from "./slides/title.js";
import { Animation, Color, Element } from "./types.js";

window.onload = () => {
  loadSlide(title);
};

let keyframe = 0;
let current_slide = null;
function loadSlide(slide) {
  current_slide = slide;
  runKeyframe(0);
  advance();
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
      phys.style.opacity = elem.opacity || 0;

      return phys;
  }
}

function runKeyframe(index) {
  for (const anim of current_slide.keyframes[index]) {
    switch (anim.type) {
      case Animation.Show:
        current_slide.elements[anim.element].opacity = 1;
        console.log(current_slide);
        break;
      case Animation.FadeIn:
        console.error("FadeIn not implemented");
        break;
      case Animation.FadeOut:
        console.error("FadeIn not implemented");
        break;
    }
  }
  draw();
}
function advance() {
  runKeyframe(++keyframe);
}

window.onresize = draw;
