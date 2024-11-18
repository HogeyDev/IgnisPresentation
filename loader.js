window.onload = () => {
    resizeBody();
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
        document.body.innerHTML = "<div class=\"counter\"></div>";
        document.body.style.backgroundColor =
            display_slide.background ?? Color.Background;
        document.documentElement.style.backgroundColor = "#000000";
        for (const elem of display_slide.elements) {
            if (elem.opacity <= 0 || elem.opacity === undefined) continue;
            const html_element = createPhysicalComponent(elem);
            document.body.appendChild(html_element);
        }
        const counter = document.querySelector(".counter");
        counter.style.fontSize = "36px";
        counter.style.color = Color.Foreground;
        counter.style.fontFamily = "sans-serif";
        counter.style.position = "absolute";
        counter.style.left = `${document.body.clientWidth}px`;
        counter.style.top = `${document.body.clientHeight}px`;
        counter.style.transform = "translate(-100%, -100%)";
        counter.innerText = keyframe_counter;
    }

    window.requestAnimationFrame(draw);
}

function createPhysicalComponent(elem) {
    let phys = document.createElement(elem.type == Component.Image ? "img" : "div");

    const [x, y] = [
        (document.body.clientWidth * (elem.position[0] + 1)) / 2,
        (document.body.clientHeight * (elem.position[1] + 1)) / 2,
    ];
    const [anchorX, anchorY] = [
        (elem.anchor[0] + 1) / 2,
        (elem.anchor[1] + 1) / 2,
    ];
    phys.style.position = "absolute";
    phys.style.left = `${x}px`;
    phys.style.top = `${y}px`;
    phys.style.transform = `translate(${-anchorX * 100}%, ${-anchorY * 100}%)`;
    phys.style.opacity = elem.opacity ?? 0;

    phys.style.border = `${(elem.border_size ?? 0) * document.body.clientHeight}px solid ${elem.border_color ?? Color.None}`;
    
    switch (elem.type) {
        case Component.Text:
            if (elem.max_width !== undefined) phys.style.maxWidth = `${elem.max_width * document.body.clientWidth}px`;
            if (elem.max_height !== undefined) phys.style.maxHeight = `${elem.max_height * document.body.clientHeight}px`;

            phys.style.fontFamily = "sans-serif";
            phys.style.fontSize = `${elem.font_size * 24 * document.body.clientHeight / 720}px`;
            phys.style.textAlign = elem.text_align ?? "center";
            phys.style.whiteSpace = "pre";
            phys.innerHTML = elem.value;
            phys.style.color = elem.color;
            if(elem.gradient !== undefined) {
                phys.style.background = `linear-gradient(${elem.gradient_direction}, ${elem.gradient[0]}, ${elem.gradient[1]})`;
                phys.style.backgroundClip = "text";
                phys.style.webkitTextFillColor = "transparent";
            }
            
            break;
        case Component.Rectangle:
            phys.style.backgroundColor = elem.color;
            phys.style.width = `${elem.size[0] * document.body.clientWidth}px`;
            phys.style.height = `${elem.size[1] * document.body.clientHeight}px`;
            phys.style.borderRadius = `${elem.border_radius * document.body.clientHeight}px`;
            break;
        case Component.Image:
            phys.src = elem.path;
            phys.style.width = `${elem.size[0] * document.body.clientWidth}px`;
            phys.style.height = `${elem.size[1] * document.body.clientHeight}px`;
            break;
    }
    
    if ("style_overrides" in elem) {
        Object.assign(phys.style, elem.style_overrides);
    }

    return phys;
}

const keyframe_queue = [];
function addKeyframe(index) {
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
            case Action.FadeIn:
                deep_element.opacity = curved_t;
                break;
            case Action.FadeOut:
                deep_element.opacity = 1 - curved_t;
                break;
            case Action.SlideIn:
                switch (anim.direction) {
                    case Cardinal.North:
                        deep_element.anchor[1] = deep_element.anchor[1] * curved_t + (1 - curved_t);
                        deep_element.position[1] = deep_element.position[1] * curved_t - 1.1 * (1 - curved_t);
                        break;
                    case Cardinal.South:
                        deep_element.anchor[1] = deep_element.anchor[1] * curved_t - (1 - curved_t);
                        deep_element.position[1] = deep_element.position[1] * curved_t + 1.1 * (1 - curved_t);
                        break;
                    case Cardinal.West:
                        deep_element.anchor[0] = deep_element.anchor[0] * curved_t + (1 - curved_t);
                        deep_element.position[0] = deep_element.position[0] * curved_t - 1.1 * (1 - curved_t);
                        break;
                    case Cardinal.East:
                        deep_element.anchor[0] = deep_element.anchor[0] * curved_t - (1 - curved_t);
                        deep_element.position[0] = deep_element.position[0] * curved_t + 1.1 * (1 - curved_t);
                        break;
                    default: console.error("Unknown direction:", anim.direction); break;
                }
                break;
            case Action.SlideOut:
                if (t >= 1) deep_element.opacity = 0;
                switch (anim.direction) {
                    case Cardinal.North:
                        deep_element.anchor[1] = deep_element.anchor[1] * (1 - curved_t) + curved_t;
                        deep_element.position[1] = deep_element.position[1] * (1 - curved_t) - 1.1 * curved_t;
                        break;
                    case Cardinal.South:
                        deep_element.anchor[1] = deep_element.anchor[1] * (1 - curved_t) - curved_t;
                        deep_element.position[1] = deep_element.position[1] * (1 - curved_t) + 1.1 * curved_t;
                        break;
                    case Cardinal.West:
                        deep_element.anchor[0] = deep_element.anchor[0] * (1 - curved_t) + curved_t;
                        deep_element.position[0] = deep_element.position[0] * (1 - curved_t) - 1.1 * curved_t;
                        break;
                    case Cardinal.East:
                        deep_element.anchor[0] = deep_element.anchor[0] * (1 - curved_t) - curved_t;
                        deep_element.position[0] = deep_element.position[0] * (1 - curved_t) + 1.1 * curved_t;
                        break;
                    default: console.error("Unknown direction:", anim.direction); break;
                }
                break;
            case Action.Show:
                deep_element.opacity = 1;
                finished = true;
                break;
            case Action.Hide:
                deep_element.opacity = 0;
                finished = true;
                break;
            case Action.Move:
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
            case Action.Resize:
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
        anim.start_time = performance.now();
    }
}

document.onmousedown = advance;

document.onkeydown = (e) => {
    if (e.key == "ArrowRight") advance();
}

window.onresize = () => {
    resizeBody();
    force_draw = true;
    draw();
};
window.requestAnimationFrame(draw);

function resizeBody() {
    let width, height;
    if (window.innerWidth / window.innerHeight > 16 / 9) {
      height = window.innerHeight;
      width = (height * 16) / 9;
    } else {
      width = window.innerWidth;
      height = (width * 9) / 16;
    }
    [
        document.body.style.width,
        document.body.style.height
    ] = [`${width}px`, `${height}px`];
    document.body.style.position = "absolute";
    document.body.style.left = `${(window.innerWidth - width) / 2}px`;
    document.body.style.top = `${(window.innerHeight - height) / 2}px`;
    document.body.style.zIndex = -Number.MAX_SAFE_INTEGER;
}