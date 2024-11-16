// import { Animation, Color, Element } from "../types.js";

const presentation = {
    background_color: Color.Background,
    elements: [
        {
            type: Element.Text,
            value: "Ignis",
            font_size: 5,
            color: Color.Red,
            position: [0, -0.2],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to right, ${Color.Red}, ${Color.Orange})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
        {
            type: Element.Text,
            value: "The",
            font_size: 2,
            color: Color.Comment,
            position: [0, -0.4],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to bottom right, ${Color.Comment}, ${Color.Foreground})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
        {
            type: Element.Text,
            value: "Programming Language",
            font_size: 2,
            color: Color.Comment,
            position: [0, 0.15],
            anchor: [0, 0],
            max_width: 0.3,
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Comment}, ${Color.Foreground})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
        {
            type: Element.Image,
            path: "./binary_file.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.1 * window.innerHeight / window.innerWidth, 0.1],
        },
        {
            type: Element.Rectangle,
            color: Color.Cyan,
            position: [0, 0],
            anchor: [0, 0],
            size: [0.3, 0.25],
            border_radius: 0.02,
        },
        {
            type: Element.Image,
            path: "./denied.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.6 * window.innerHeight / window.innerWidth, 0.6],
            style_overrides: {
                zIndex: 10,
            },
        },
        {
            type: Element.Image,
            path: "./python_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.6 * window.innerHeight / window.innerWidth, 0.6],
        },
        {
            type: Element.Image,
            path: "./c_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.5 * window.innerHeight / window.innerWidth * 798 / 881, 0.5],
        },
    ],
    keyframes: [
        [],
        [
            { element: 0, type: Animation.FadeIn, delay: 0.3 },
            { element: 0, type: Animation.SlideIn, direction: Direction.Right },
            { element: 1, type: Animation.FadeIn, delay: 0.3 },
            { element: 2, type: Animation.FadeIn, delay: 0.3 },
        ],
        [
            { element: 0, type: Animation.Move, destination: [-0.95, -0.95], anchor: [-1, -1], delay: 1.0, duration: 1.5 },
            { element: 0, type: Animation.Resize, font_size: 3, delay: 1.0, duration: 1.5 },
            { element: 1, type: Animation.FadeOut, duration: 0.5 },
            { element: 2, type: Animation.FadeOut, delay: 0.3, duration: 0.5 },
        ],
        [
            { element: 6, type: Animation.Show },
            { element: 6, type: Animation.SlideIn, direction: Direction.Up },
        ],
        [
            { element: 5, type: Animation.FadeIn },
            { element: 5, type: Animation.Resize, size: [0.3 * window.innerHeight / window.innerWidth, 0.3] },
        ],
        [
            { element: 5, type: Animation.SlideOut, direction: Direction.Right },
            { element: 5, type: Animation.SlideOut, direction: Direction.Up },
            { element: 6, type: Animation.SlideOut, direction: Direction.Right },
            { element: 6, type: Animation.SlideOut, direction: Direction.Up },

            { element: 7, type: Animation.Show, delay: 0.2 },
            { element: 7, type: Animation.SlideIn, direction: Direction.Down, delay: 0.2 },
            { element: 7, type: Animation.SlideIn, direction: Direction.Left, delay: 0.2 },
        ],
        [
            { element: 7, type: Animation.FadeOut },
        ],
        [
            { element: 4, type: Animation.FadeIn, duration: 0.75 },

            { element: 0, type: Animation.Move, destination: [-0.35, 0], anchor: [1, 0] },
            { element: 0, type: Animation.Move, destination: [0, 0], anchor: [0, 0], delay: 1.1, duration: 0.5 },
            { element: 0, type: Animation.Resize, font_size: 1.5, delay: 1.1, duration: 0.5 },

            { element: 3, type: Animation.Show, delay: 1.1 },
            { element: 3, type: Animation.Resize, size: [0.2 * window.innerHeight / window.innerWidth, 0.2], delay: 1.35, duration: 0.5 },
            { element: 3, type: Animation.Move, destination: [0.35, 0], anchor: [-1, 0], delay: 1.35, duration: 0.5 },
        ],
    ],
};