// import { slide as title } from "./slides/title.js";
// import { Animation, Color, Element } from "./types.js";

const SLIDES = 1;

window.onload = () => {
    force_draw = true;
    loadSlide(presentation);
    draw();
};

let keyframe = 0;
let keyframe_counter = 0;
let current_slide = null;
function loadSlide(slide) {
    current_slide = slide;
    addKeyframe(0);
}

let force_draw = true;
function draw() {
    if (keyframe_queue.length > 0 || force_draw) {
        force_draw = false;
        const display_slide = getAnimatedSlide(current_slide);
        // console.log(display_slide);
        document.body.innerHTML = "<div class=\"counter\"></div>";
        document.body.style.backgroundColor =
            display_slide.background ?? Color.Background;
        for (const elem of display_slide.elements) {
            const html_element = createPhysicalElement(elem);
            document.body.appendChild(html_element);
        }
        const counter = document.querySelector(".counter");
        counter.style.fontSize = "36px";
        counter.style.color = Color.Foreground;
        counter.style.fontFamily = "sans-serif";
        counter.style.position = "absolute";
        counter.style.left = `${window.innerWidth}px`;
        counter.style.top = `${window.innerHeight}px`;
        counter.style.transform = "translate(-110%, -110%)";
        counter.innerText = keyframe_counter;
    }

    window.requestAnimationFrame(draw);
}

function createPhysicalElement(elem) {
    let phys = document.createElement(elem.type == Element.Image ? "img" : "div");

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
    phys.style.opacity = elem.opacity ?? 0;
    
    switch (elem.type) {
        case Element.Text:
            if (elem.max_width ?? 1) phys.style.maxWidth = `${elem.max_width * window.innerWidth}px`;
            if (elem.max_height ?? 1) phys.style.maxHeight = `${elem.max_height * window.innerHeight}px`;

            phys.style.fontFamily = "sans-serif";
            phys.style.fontSize = `${elem.font_size * 24 * window.innerHeight / 720}px`;
            phys.style.textAlign = elem.text_align ?? "center";
            phys.innerText = elem.value;

            phys.style.color = elem.color;
            break;
        case Element.Rectangle:
            phys.style.backgroundColor = elem.color;
            phys.style.width = `${elem.size[0] * window.innerWidth}px`;
            phys.style.height = `${elem.size[1] * window.innerHeight}px`;
            phys.style.borderRadius = `${elem.border_radius * window.innerHeight}px`;
            break;
        case Element.Image:
            phys.src = elem.path;
            phys.style.width = `${elem.size[0] * window.innerWidth}px`;
            phys.style.height = `${elem.size[1] * window.innerHeight}px`;
            break;
    }
    
    if ("style_overrides" in elem) {
        Object.assign(phys.style, elem.style_overrides);
    }

    return phys;
}

const keyframe_queue = [];
function addKeyframe(index) {
    // console.log("Populated keyframe queue");
    for (const anim of current_slide.keyframes[index]) {
        keyframe_queue.push({
            ...anim,
            start_time: performance.now() + (anim.delay ?? 0) * 1000, // milliseconds
            duration: anim.duration ?? 1.0, // seconds
            curve: anim.time_curve ?? function (t) { if (t < 0.5) { return 2 * t * t; } else { return 1 - 2 * (1 - t) * (1 - t); } },
        });
    }
    keyframe_counter++;
}

function getAnimatedSlide(slide) {
    let deep = JSON.parse(JSON.stringify(slide));

    for (let i = 0; i < keyframe_queue.length; i++) {
        const anim = keyframe_queue[i];
        let t = (performance.now() - anim.start_time) / (anim.duration * 1000); // convert millis to seconds and then get percentage of total duration
        if (t < 0) continue;
        let finished = t >= 1.0;
        if (finished) {
            t = 1.0;
            finished = true;
        }
 
        let curved_t = anim.curve(t);
        let deep_element = deep.elements[anim.element];
        switch (anim.type) {
            case Animation.FadeIn:
                deep_element.opacity = curved_t;
                break;
            case Animation.FadeOut:
                deep_element.opacity = 1 - curved_t;
                break;
            case Animation.SlideIn:
                switch (anim.direction) {
                    case Direction.Up:
                        deep_element.anchor[1] = deep_element.anchor[1] * curved_t + (1 - curved_t);
                        deep_element.position[1] = deep_element.position[1] * curved_t - 1.1 * (1 - curved_t);
                        break;
                    case Direction.Down:
                        deep_element.anchor[1] = deep_element.anchor[1] * curved_t - (1 - curved_t);
                        deep_element.position[1] = deep_element.position[1] * curved_t + 1.1 * (1 - curved_t);
                        break;
                    case Direction.Left:
                        deep_element.anchor[0] = deep_element.anchor[0] * curved_t + (1 - curved_t);
                        deep_element.position[0] = deep_element.position[0] * curved_t - 1.1 * (1 - curved_t);
                        break;
                    case Direction.Right:
                        deep_element.anchor[0] = deep_element.anchor[0] * curved_t - (1 - curved_t);
                        deep_element.position[0] = deep_element.position[0] * curved_t + 1.1 * (1 - curved_t);
                        break;
                    default: console.error("Unknown direction:", anim.direction); break;
                }
                break;
            case Animation.SlideOut:
                switch (anim.direction) {
                    case Direction.Up:
                        deep_element.anchor[1] = deep_element.anchor[1] * (1 - curved_t) + curved_t;
                        deep_element.position[1] = deep_element.position[1] * (1 - curved_t) - 1.1 * curved_t;
                        break;
                    case Direction.Down:
                        deep_element.anchor[1] = deep_element.anchor[1] * (1 - curved_t) - curved_t;
                        deep_element.position[1] = deep_element.position[1] * (1 - curved_t) + 1.1 * curved_t;
                        break;
                    case Direction.Left:
                        deep_element.anchor[0] = deep_element.anchor[0] * (1 - curved_t) + curved_t;
                        deep_element.position[0] = deep_element.position[0] * (1 - curved_t) - 1.1 * curved_t;
                        break;
                    case Direction.Right:
                        deep_element.anchor[0] = deep_element.anchor[0] * (1 - curved_t) - curved_t;
                        deep_element.position[0] = deep_element.position[0] * (1 - curved_t) + 1.1 * curved_t;
                        break;
                    default: console.error("Unknown direction:", anim.direction); break;
                }
                break;
            case Animation.Show:
                deep_element.opacity = 1;
                finished = true;
                break;
            case Animation.Hide:
                deep_element.opacity = 0;
                finished = true;
                break;
            case Animation.Move:
                if ("destination" in anim) {
                    deep_element.position = [
                        deep_element.position[0] * (1 - curved_t) + anim.destination[0] * curved_t,
                        deep_element.position[1] * (1 - curved_t) + anim.destination[1] * curved_t,
                    ];
                }
                if ("anchor" in anim) {
                    deep_element.anchor = [
                        deep_element.anchor[0] * (1 - curved_t) + anim.anchor[0] * curved_t,
                        deep_element.anchor[1] * (1 - curved_t) + anim.anchor[1] * curved_t,
                    ];
                }
                break;
            case Animation.Resize:
                if ("font_size" in anim) {
                    deep_element.font_size = deep_element.font_size * (1 - curved_t) + anim.font_size * curved_t;
                }
                if ("size" in anim) {
                    deep_element.size[0] = deep_element.size[0] * (1 - curved_t) + anim.size[0] * curved_t;
                    deep_element.size[1] = deep_element.size[1] * (1 - curved_t) + anim.size[1] * curved_t;
                }
                break;
        }

        if (finished) {
            slide.elements[anim.element] = JSON.parse(JSON.stringify(deep_element));
            keyframe_queue.splice(i, 1);
            i--; // makes sure that i will stay the same
        }
    }
    return deep;

}

function advance() {
    if (keyframe_queue.length > 0) { fastForward(); return; }
    if (++keyframe >= current_slide.keyframes.length) return;
    addKeyframe(keyframe);
}

function fastForward() {
    for (let anim of keyframe_queue) {
        anim.duration = 0;
    }
}

document.onmousedown = advance;

document.onkeydown = (e) => {
    if (e.key == "ArrowRight") advance();
}

window.onresize = () => {
    force_draw = true;
    draw();
};
window.requestAnimationFrame(draw);
