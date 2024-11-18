// import { Animation, Color, Component } from "../types.js";

const presentation = {
    background_color: Color.Background,
    elements: [
        {
            type: Component.Text,
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
            type: Component.Text,
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
            type: Component.Text,
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
                whiteSpace: "normal",
            }
        },
        {
            type: Component.Image,
            path: "./binary_file.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.1 * 9/16, 0.1],
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            position: [0, 0],
            anchor: [0, 0],
            size: [0.3, 0.25],
            border_radius: 0.02,
        },
        {
            type: Component.Image,
            path: "./denied.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.6 * 9/16, 0.6],
            style_overrides: {
                zIndex: 10,
            },
        },
        {
            type: Component.Image,
            path: "./python_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.6 * 9/16, 0.6],
        },
        {
            type: Component.Image,
            path: "./c_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [0.5 * 9/16 * 798 / 881, 0.5],
        },
        {
            type: Component.Text,
            value: "Compiler",
            font_size: 3.5,
            color: Color.Cyan,
            position: [0, 0],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Cyan}, ${Color.Foreground})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            },
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [-0.6, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [0, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [0.6, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Text,
            value: "Lexer",
            color: Color.Red,
            font_size: 3,
            position: [-0.6, 0],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Purple}, ${Color.Green})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            },
        },
        {
            type: Component.Text,
            value: "Parser",
            color: Color.Green,
            font_size: 3,
            position: [0, 0],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Green}, ${Color.Cyan})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            },
        },
        {
            type: Component.Text,
            value: "CodeGen",
            color: Color.Cyan,
            font_size: 2.7,
            position: [0.6, 0],
            anchor: [0, 0],
            style_overrides: {
                background: `linear-gradient(to top right, ${Color.Cyan}, ${Color.Foreground})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            },
        },
        {
            type: Component.Text,
            value: "import stdio;\n// comments are skipped\nfunc main(int) {\n\tprintln(\"Hello, World!\");\n\treturn 0;\n}",
            color: Color.Purple,
            font_size: 1,
            position: [-0.9, 0],
            anchor: [-1, 0],
            style_overrides: {
                textAlign: "left",
                background: `linear-gradient(to top right, ${Color.Purple}, ${Color.Orange})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            },
        },
        {
            type: Component.Text,
            value: "Import { \"import\" }\nIdentifier { \"stdio\" }\nSemiColon { \";\" }\nFunction { \"func\" }\nIdentifier { \"main\" }\nLeftParenthesis { \"(\" }\nIdentifier { \"int\" }\nRightParenthesis { \")\" }\nLeftBrace { \"{\" }\nIdentifier { \"println\" }\nLeftParenthesis { \"(\" }\nString { \"Hello, World!\" }\nRightParenthesis { \")\" }\nSemiColon { \";\" }\nReturn { \"return\" }\nInteger { \"0\" }\nSemiColon { \";\" }\nRightBrace { \"}\" }",
            color: Color.Purple,
            font_size: 1,
            position: [0.6, 0],
            anchor: [-0.5, 0],
            max_width: 1,
            style_overrides: {
                // textAlign: "right",
                background: `linear-gradient(to top right, ${Color.Cyan}, ${Color.Purple})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            border_radius: 0.02,
            size: [0, 0],
            position: [-0.9, 0],
            anchor: [-0.9, 0],
            style_overrides: {
                zIndex: -1,
            }
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            border_radius: 0.02,
            size: [0, 0],
            position: [0.6, 0],
            anchor: [-0.4, 0],
            style_overrides: {
                zIndex: -1,
            }
        },
        {
            type: Component.Rectangle,
            color: Color.None,
            size: [0.105, 0.04],
            position: [-0.901, -0.194],
            anchor: [-0.95, 0],
            border_size: 0.005,
            border_color: Color.Yellow,
        },
        {
            type: Component.Rectangle,
            color: Color.None,
            size: [0.16, 0.116],
            position: [0.535, -0.71],
            anchor: [-1, -1],
            border_size: 0.005,
            border_color: Color.Yellow,
        },
        {
            type: Component.Rectangle,
            color: Color.CurrentLine,
            position: [0.27, 0],
            size: [0.4, 0.88],
            anchor: [0, 0],
            border_radius: 0.02,
        },
        {
            type: Component.Text,
            value: "Import {\n\tmodule: \"stdio\",\n},\nFunctionDeclaration {\n\tname: \"main\",\n\treturn_type: \"int\",\n\tprototype: [],\n\tbody: Block(\n\t\t[\n\t\t\tFunctionCall {\n\t\t\t\tname: \"println\",\n\t\t\t\targuments: [\n\t\t\t\t\tArgument(\n\t\t\t\t\t\tString(\n\t\t\t\t\t\t\t\"Hello, World!\",\n\t\t\t\t\t\t),\n\t\t\t\t\t),\n\t\t\t\t],\n\t\t\t},\n\t\t\tReturn(\n\t\t\t\tInteger(\n\t\t\t\t\t0,\n\t\t\t\t),\n\t\t\t),\n\t\t],\n\t),\n},",
            font_size: 0.8,
            color: Color.Red,
            position: [0.27, 0],
            anchor: [0, 0],
            style_overrides: {
                textAlign: "left",
                background: `linear-gradient(to bottom right, ${Color.Red}, ${Color.Purple})`,
                backgroundClip: "text",
                webkitTextFillColor: "transparent",
            }
        },
    ],
    keyframes: [
        [],
        [
            { element: 0, type: Action.FadeIn, delay: 0.3 },
            { element: 0, type: Action.SlideIn, direction: Cardinal.East },
            { element: 1, type: Action.FadeIn, delay: 0.3 },
            { element: 2, type: Action.FadeIn, delay: 0.3 },
        ],
        [
            { element: 0, type: Action.Move, destination: [-0.95, -0.95], anchor: [-1, -1], delay: 1.0, duration: 1.5 },
            { element: 0, type: Action.Resize, font_size: 3, delay: 1.0, duration: 1.5 },
            { element: 1, type: Action.FadeOut, duration: 0.5 },
            { element: 2, type: Action.FadeOut, delay: 0.3, duration: 0.5 },
        ],
        [
            { element: 6, type: Action.Show },
            { element: 6, type: Action.SlideIn, direction: Cardinal.North },
        ],
        [
            { element: 5, type: Action.FadeIn },
            { element: 5, type: Action.Resize, size: [0.3 * 9/16, 0.3] },
        ],
        [
            { element: 5, type: Action.SlideOut, direction: Cardinal.East },
            { element: 5, type: Action.SlideOut, direction: Cardinal.North },
            { element: 6, type: Action.SlideOut, direction: Cardinal.East },
            { element: 6, type: Action.SlideOut, direction: Cardinal.North },

            { element: 7, type: Action.Show, delay: 0.2 },
            { element: 7, type: Action.SlideIn, direction: Cardinal.South, delay: 0.2 },
            { element: 7, type: Action.SlideIn, direction: Cardinal.West, delay: 0.2 },
        ],
        [
            { element: 7, type: Action.FadeOut, duration: 0.3 },

            { element: 4, type: Action.FadeIn, duration: 0.75, delay: 0.4 },
            { element: 8, type: Action.FadeIn, duration: 0.75, delay: 0.4 },

            { element: 0, type: Action.Move, destination: [-0.35, 0], anchor: [1, 0], delay: 0.4 },
            { element: 0, type: Action.Move, destination: [0, 0], anchor: [0, 0], delay: 1.5, duration: 0.5 },
            { element: 0, type: Action.Resize, font_size: 1.5, delay: 1.5, duration: 0.5 },
            
            { element: 0, type: Action.Hide, delay: 2.5 },
            { element: 3, type: Action.Show, delay: 1.5 },
            { element: 3, type: Action.Resize, size: [0.2 * 9/16, 0.2], delay: 1.75, duration: 0.5 },
            { element: 3, type: Action.Move, destination: [0.35, 0], anchor: [-1, 0], delay: 1.75, duration: 0.5 },
        ],
        [
            { element: 3, type: Action.SlideOut, direction: Cardinal.East },
            { element: 3, type: Action.FadeOut },
            { element: 4, type: Action.SlideOut, direction: Cardinal.West },
            { element: 4, type: Action.FadeOut },
            { element: 8, type: Action.SlideOut, direction: Cardinal.West },
            { element: 8, type: Action.FadeOut },

            { element: 11, type: Action.FadeIn, delay: 1.1 },
            { element: 11, type: Action.SlideIn, direction: Cardinal.West, delay: 1.1, time_curve: (t) => 1 - Math.pow(1 - t, 4) },
            { element: 10, type: Action.FadeIn, delay: 1.3 },
            { element: 10, type: Action.SlideIn, direction: Cardinal.West, delay: 1.3, time_curve: (t) => 1 - Math.pow(1 - t, 4) },
            { element: 9, type: Action.FadeIn, delay: 1.5 },
            { element: 9, type: Action.SlideIn, direction: Cardinal.West, delay: 1.5, time_curve: (t) => 1 - Math.pow(1 - t, 4) },

            { element: 12, type: Action.FadeIn, delay: 2.2, duration: 0.7 },
            { element: 13, type: Action.FadeIn, delay: 2.3, duration: 0.7 },
            { element: 14, type: Action.FadeIn, delay: 2.4, duration: 0.7 },
        ],
        [
            { element: 10, type: Action.FadeOut, duration: 0.5 },
            { element: 13, type: Action.FadeOut, duration: 0.5 },
            { element: 11, type: Action.FadeOut, duration: 0.5 },
            { element: 14, type: Action.FadeOut, duration: 0.5 },

            { element: 9, type: Action.Move, destination: [-0.8, -0.8], delay: 0.2 },
            { element: 9, type: Action.Resize, size: [0.15, 0.15], delay: 0.2 },
            { element: 12, type: Action.Move, destination: [-0.8, -0.8], delay: 0.2 },
            { element: 12, type: Action.Resize, font_size: 9/5, delay: 0.2 },
        ],
        [
            { element: 15, type: Action.FadeIn },
            { element: 15, type: Action.SlideIn, direction: Cardinal.West },
            { duration: 0, element: 17, type: Action.Resize, size: [0.25, 0.27] },
            { element: 17, type: Action.FadeIn },
            { element: 17, type: Action.SlideIn, direction: Cardinal.West },
        ],
        [
            { element: 16, type: Action.FadeIn },
            { element: 16, type: Action.SlideIn, direction: Cardinal.East, time_curve: (t) => 1 - Math.pow(1 - t, 2) },
            { duration: 0, element: 18, type: Action.Resize, size: [0.23, 0.73] },
            { element: 18, type: Action.FadeIn },
            { element: 18, type: Action.SlideIn, direction: Cardinal.East, time_curve: (t) => 1 - Math.pow(1 - t, 2) },
        ],
        [
            { element: 19, type: Action.FadeIn },
            { element: 20, type: Action.FadeIn },
        ],
        [
            { element: 19, type: Action.Move, destination: [-0.901, -0.038], duration: 0.3 },
            { element: 19, type: Action.Resize, size: [0.13, 0.04], duration: 0.3 },

            { element: 20, type: Action.Move, destination: [0.5, -0.48], duration: 0.3 },
            { element: 20, type: Action.Resize, size: [0.195, 0.24], duration: 0.3 },
        ],
        [
            { element: 19, type: Action.Move, destination: [-0.815, 0.045], duration: 0.3 },
            { element: 19, type: Action.Resize, size: [0.193, 0.04], duration: 0.3 },

            { element: 20, type: Action.Move, destination: [0.495, 0], duration: 0.3 },
            { element: 20, type: Action.Resize, size: [0.2, 0.191], duration: 0.3 },
        ],
        [
            { element: 19, type: Action.Move, destination: [-0.82, 0.121], duration: 0.3 },
            { element: 19, type: Action.Resize, size: [0.072, 0.035], duration: 0.3 },

            { element: 20, type: Action.Move, destination: [0.545, 0.39], duration: 0.3 },
            { element: 20, type: Action.Resize, size: [0.15, 0.115], duration: 0.3 },
        ],
        [
            { element: 19, type: Action.Move, destination: [-0.907, 0.2], duration: 0.3 },
            { element: 19, type: Action.Resize, size: [0.01, 0.035], duration: 0.3 },

            { element: 20, type: Action.Move, destination: [0.545, 0.62], duration: 0.3 },
            { element: 20, type: Action.Resize, size: [0.15, 0.041], duration: 0.3 },
        ],
        [
            { element: 19, type: Action.FadeOut, duration: 0.6 },
            { element: 20, type: Action.FadeOut, duration: 0.6 },

            { element: 15, type: Action.SlideOut, direction: Cardinal.West, delay: 0.6 },
            { element: 17, type: Action.SlideOut, direction: Cardinal.West, delay: 0.6 },

            { element: 16, type: Action.Move, destination: [-0.715, 0.15], anchor: [0, 0], delay: 0.5 },
            { element: 18, type: Action.Move, destination: [-0.715, 0.15], anchor: [0, 0], delay: 0.5 },

            { element: 9, type: Action.SlideOut, direction: Cardinal.West, delay: 0.8 },
            { element: 12, type: Action.SlideOut, direction: Cardinal.West, delay: 0.8 },

            { element: 10, type: Action.Show, delay: 0.6 },
            { duration: 0, element: 10, type: Action.Move, destination: [-0.8, -0.8] },
            { duration: 0, element: 10, type: Action.Resize, size: [0.15, 0.15] },
            { element: 13, type: Action.Show, delay: 0.6 },
            { duration: 0, element: 13, type: Action.Move, destination: [-0.8, -0.8] },
            { duration: 0, element: 13, type: Action.Resize, font_size: 9/5 },

            { element: 10, type: Action.SlideIn, direction: Cardinal.East, delay: 0.6 },
            { element: 13, type: Action.SlideIn, direction: Cardinal.East, delay: 0.6 },

            { element: 21, type: Action.FadeIn, delay: 0.7 },
            { element: 21, type: Action.SlideIn, direction: Cardinal.East, delay: 0.7 },

            { element: 22, type: Action.FadeIn, delay: 0.7 },
            { element: 22, type: Action.SlideIn, direction: Cardinal.East, delay: 0.7 },
        ]
    ],
};