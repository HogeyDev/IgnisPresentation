// import { Animation, Color, Element } from "../types.js";

const presentation = {
    background_color: Color.Background,
    elements: [
        {
            type: Element.Text,
            value: "Ignis",
            font_size: 3,
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
            style_override: {
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
            position: [0, 0.1],
            anchor: [0, 0],
            max_width: 0.3,
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Comment}, ${Color.Foreground})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
    ],
    keyframes: [
        [],
        [
            { element: 0, type: Animation.FadeIn },
            { element: 0, type: Animation.SlideIn, direction: Direction.Right, delay: 0.3 },
            { element: 1, type: Animation.FadeIn },
            { element: 2, type: Animation.FadeIn },
        ],
    ],
};
