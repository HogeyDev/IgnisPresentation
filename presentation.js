/* prettier-ignore */
/* eslint-disable */
// import { Animation, Color, Component } from "../types.js";

const presentation = {
    background_color: Color.Background,
    elements: [
        {
            type: Component.Text,
            name: "title",
            value: "Ignis",
            font_size: 5,
            color: Color.Red,
            position: [0, -0.2],
            anchor: [0, 0],
            gradient: [Color.Red, Color.Orange],
            gradient_direction: "to right",
        },
        {
            type: Component.Text,
            name: "upper_subtitle",
            value: "The",
            font_size: 2,
            color: Color.Comment,
            position: [0, -0.4],
            anchor: [0, 0],
            gradient: [Color.Comment, Color.Foreground],
            gradient_direction: "to bottom right",
        },
        {
            type: Component.Text,
            name: "lower_subtitle",
            value: "Programming Language",
            font_size: 2,
            color: Color.Comment,
            position: [0, 0.15],
            anchor: [0, 0],
            max_width: 0.3,
            gradient: [Color.Comment, Color.Foreground],
            gradient_direction: "to top right",
            style_overrides: {
                whiteSpace: "normal",
            },
        },
        {
            type: Component.Image,
            name: "binary_file",
            path: "./binary_file.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [(0.1 * 9) / 16, 0.1],
        },
        {
            type: Component.Rectangle,
            name: "compiler_text_bg",
            color: Color.CurrentLine,
            position: [0, 0],
            anchor: [0, 0],
            size: [0.3, 0.25],
            border_radius: 0.02,
        },
        {
            type: Component.Image,
            name: "denied_cross",
            path: "./denied.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [(0.6 * 9) / 16, 0.6],
            layer: 10,
        },
        {
            type: Component.Image,
            name: "python_logo",
            path: "./python_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [(0.6 * 9) / 16, 0.6],
        },
        {
            type: Component.Image,
            name: "c_logo",
            path: "./c_logo.png",
            position: [0, 0],
            anchor: [0, 0],
            size: [(((0.5 * 9) / 16) * 798) / 881, 0.5],
        },
        {
            type: Component.Text,
            name: "compiler_text",
            value: "Compiler",
            font_size: 3.5,
            color: Color.Cyan,
            position: [0, 0],
            anchor: [0, 0],
            gradient: [Color.Cyan, Color.Foreground],
            gradient_direction: "to top right",
        },
        {
            type: Component.Rectangle,
            name: "lexer_background",
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [-0.6, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Rectangle,
            name: "parser_background",
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [0, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Rectangle,
            name: "codegen_background",
            color: Color.CurrentLine,
            border_radius: 0.02,
            position: [0.6, 0],
            anchor: [0, 0],
            size: [0.25, 0.25],
        },
        {
            type: Component.Text,
            name: "lexer_text",
            value: "Lexer",
            color: Color.Red,
            font_size: 3,
            position: [-0.6, 0],
            anchor: [0, 0],
            gradient: [Color.Purple, Color.Green],
            gradient_direction: "to top right",
        },
        {
            type: Component.Text,
            name: "parser_text",
            value: "Parser",
            color: Color.Green,
            font_size: 3,
            position: [0, 0],
            anchor: [0, 0],
            gradient: [Color.Green, Color.Cyan],
            gradient_direction: "to top right",
        },
        {
            type: Component.Text,
            name: "codegen_text",
            value: "CodeGen",
            color: Color.Cyan,
            font_size: 2.7,
            position: [0.6, 0],
            anchor: [0, 0],
            gradient: [Color.Cyan, Color.Foreground],
            gradient_direction: "to top right",
        },
        {
            type: Component.Text,
            name: "example_hello_world_source",
            value: 'import stdio;\n// comments are skipped\nfunc main(int) {\n\tprintln("Hello, World!");\n\treturn 0;\n}',
            color: Color.Purple,
            font_size: 1,
            position: [-0.4, 0],
            anchor: [0, 0],
            gradient: [Color.Purple, Color.Orange],
            gradient_direction: "to top right",
            style_overrides: {
                textAlign: "left",
            },
        },
        {
            type: Component.Text,
            name: "example_hello_world_tokens",
            value: 'Import { "import" }\nIdentifier { "stdio" }\nSemiColon { ";" }\nFunction { "func" }\nIdentifier { "main" }\nLeftParenthesis { "(" }\nIdentifier { "int" }\nRightParenthesis { ")" }\nLeftBrace { "{" }\nIdentifier { "println" }\nLeftParenthesis { "(" }\nString { "Hello, World!" }\nRightParenthesis { ")" }\nSemiColon { ";" }\nReturn { "return" }\nInteger { "0" }\nSemiColon { ";" }\nRightBrace { "}" }',
            color: Color.Purple,
            font_size: 1,
            position: [0.4, 0],
            anchor: [0, 0],
            max_width: 1,
            gradient: [Color.Cyan, Color.Purple],
            gradient_direction: "to top right",
        },
        {
            type: Component.Text,
            name: "example_hello_world_ast",
            value: 'Import {\n\tmodule: "stdio",\n},\nFunctionDeclaration {\n\tname: "main",\n\treturn_type: "int",\n\tprototype: [],\n\tbody: Block(\n\t\t[\n\t\t\tFunctionCall {\n\t\t\t\tname: "println",\n\t\t\t\targuments: [\n\t\t\t\t\tArgument(\n\t\t\t\t\t\tString(\n\t\t\t\t\t\t\t"Hello, World!",\n\t\t\t\t\t\t),\n\t\t\t\t\t),\n\t\t\t\t],\n\t\t\t},\n\t\t\tReturn(\n\t\t\t\tInteger(\n\t\t\t\t\t0,\n\t\t\t\t),\n\t\t\t),\n\t\t],\n\t),\n},',
            font_size: 0.8,
            color: Color.Red,
            position: [0.27, 0],
            anchor: [0, 0],
            gradient: [Color.Red, Color.Purple],
            gradient_direction: "to bottom right",
            style_overrides: {
                textAlign: "left",
            },
        },
        {
            type: Component.Text,
            name: "simple_ast_decl",
            value: 'VariableDeclaration {\n\tvariable_type: "int",\n\tname: "x",\n\tis_static: false\n}',
            font_size: 1.0,
            color: Color.Orange,
            position: [-0.18, 0],
            anchor: [-1, 1],
            style_overrides: {
                textAlign: "left",
            }
        },
        {
            type: Component.Text,
            name: "simple_ast_assign",
            value: 'VariableAssignment {\n\tname: "x",\n\tvalue: Integer(42)\n}',
            font_size: 1.0,
            color: Color.Orange,
            position: [-0.18, 0],
            anchor: [-1, -1],
            style_overrides: {
                textAlign: "left",
            }
        },
        {
            type: Component.Text,
            name: "simple_ast_block",
            value: 'Block(\n\t[\n\n\n\n\n\n\n\n\n\n\t]\n)',
            font_size: 1.0,
            color: Color.Orange,
            position: [-0.34, -0.03],
            anchor: [-1, 0],
            style_overrides: {
                textAlign: "left",
            },
        },
        {
            type: Component.Text,
            name: "simple_ast_source",
            value: "let x: int = 42;",
            font_size: 3.0,
            gradient: [Color.Pink, Color.Orange],
            gradient_direction: "to top right",
            position: [0, 0],
            anchor: [0, 0],
        },
        {
            type: Component.Text,
            name: "example_stack",
            value: "0x2a\n0xff\n0x00\n0x00\n0x00\n0x00\n0x00\n0x00\n0x00\n0x00\n0x00\n0x00",
            font_size: 1.5,
            color: Color.Foreground,
            position: [-0.6, 0.2],
            anchor: [0, 0],
            style_overrides: {
                textAlign: "left",
            },
        },
        {
            type: Component.Text,
            name: "example_rbp",
            value: ">",
            font_size: 1.5,
            color: Color.Red,
            position: [-0.73, -0.3175], // moving down a line of text means shimmying by 0.1125
            anchor: [0, 0],
            style_overrides: {
                textAlign: "left",
            },
        },
        {
            type: Component.Text,
            name: "example_rsp",
            value: "     >",
            font_size: 1.5,
            color: Color.Green,
            position: [-0.73, -0.3175],
            anchor: [0, 0],
            style_overrides: {
                textAlign: "left",
            },
        },
    ],
    keyframes: [
        [ /* keyframe: 0 */ ],
        [
            // keyframe: 1
            { name: "title", type: Action.FadeIn, delay: 0.3 },
            { name: "title", type: Action.SlideIn, direction: Cardinal.East },
            { name: "upper_subtitle", type: Action.FadeIn, delay: 0.3 },
            { name: "lower_subtitle", type: Action.FadeIn, delay: 0.3 },
        ],
        [
            // keyframe: 2
            { name: "title", type: Action.Move, destination: [-0.95, -0.95], anchor: [-1, -1], delay: 1.0, duration: 1.5 },
            { name: "title", type: Action.Resize, font_size: 3, delay: 1.0, duration: 1.5 },
            { name: "upper_subtitle", type: Action.FadeOut, duration: 0.5 },
            { name: "lower_subtitle", type: Action.FadeOut, delay: 0.3, duration: 0.5 },
        ],
        [
            // keyframe: 3
            { name: "python_logo", type: Action.Show },
            { name: "python_logo", type: Action.SlideIn, direction: Cardinal.North },
        ],
        [
            // keyframe: 4
            { name: "denied_cross", type: Action.FadeIn },
            { name: "denied_cross", type: Action.Resize, size: [(0.35 * 9) / 16, 0.35] },
        ],
        [
            // keyframe: 5
            { name: "denied_cross", type: Action.SlideOut, direction: Cardinal.East },
            { name: "denied_cross", type: Action.SlideOut, direction: Cardinal.North },
            { name: "python_logo", type: Action.SlideOut, direction: Cardinal.East },
            { name: "python_logo", type: Action.SlideOut, direction: Cardinal.North },

            { name: "c_logo", type: Action.Show, delay: 0.2 },
            { name: "c_logo", type: Action.SlideIn, direction: Cardinal.South, delay: 0.2 },
            { name: "c_logo", type: Action.SlideIn, direction: Cardinal.West, delay: 0.2 },
        ],
        [
            // keyframe: 6
            { name: "c_logo", type: Action.FadeOut, duration: 0.3 },

            { name: "compiler_text_bg", type: Action.FadeIn, duration: 0.75, delay: 0.4 },
            { name: "compiler_text", type: Action.FadeIn, duration: 0.75, delay: 0.4 },

            { name: "title", type: Action.Move, destination: [-0.35, 0], anchor: [1, 0], delay: 0.4 },
            { name: "title", type: Action.Move, destination: [0, 0], anchor: [0, 0], delay: 1.5, duration: 0.5 },
            { name: "title", type: Action.Resize, font_size: 1.5, delay: 1.5, duration: 0.5 },

            { name: "title", type: Action.Hide, delay: 2.5 },
            { name: "binary_file", type: Action.Show, delay: 1.5 },
            { name: "binary_file", type: Action.Resize, size: [(0.2 * 9) / 16, 0.2], delay: 1.75, duration: 0.5 },
            { name: "binary_file", type: Action.Move, destination: [0.35, 0], anchor: [-1, 0], delay: 1.75, duration: 0.5 },
        ],
        [
            // keyframe: 7
            { name: "binary_file", type: Action.SlideOut, direction: Cardinal.East },
            { name: "binary_file", type: Action.FadeOut },
            { name: "compiler_text_bg", type: Action.SlideOut, direction: Cardinal.West },
            { name: "compiler_text_bg", type: Action.FadeOut },
            { name: "compiler_text", type: Action.SlideOut, direction: Cardinal.West },
            { name: "compiler_text", type: Action.FadeOut },

            { name: "codegen_background", type: Action.FadeIn, delay: 1.1 },
            { name: "codegen_background", type: Action.SlideIn, direction: Cardinal.West, delay: 1.1, time_curve: (t) => 1 - Math.pow(1 - t, 4) },
            { name: "parser_background", type: Action.FadeIn, delay: 1.3 },
            { name: "parser_background", type: Action.SlideIn, direction: Cardinal.West, delay: 1.3, time_curve: (t) => 1 - Math.pow(1 - t, 4) },
            { name: "lexer_background", type: Action.FadeIn, delay: 1.5 },
            { name: "lexer_background", type: Action.SlideIn, direction: Cardinal.West, delay: 1.5, time_curve: (t) => 1 - Math.pow(1 - t, 4) },

            { name: "lexer_text", type: Action.FadeIn, delay: 2.2, duration: 0.7 },
            { name: "parser_text", type: Action.FadeIn, delay: 2.3, duration: 0.7 },
            { name: "codegen_text", type: Action.FadeIn, delay: 2.4, duration: 0.7 },
        ],
        [
            // keyframe: 8
            { name: "parser_background", type: Action.FadeOut, duration: 0.5 },
            { name: "parser_text", type: Action.FadeOut, duration: 0.5 },
            { name: "codegen_background", type: Action.FadeOut, duration: 0.5 },
            { name: "codegen_text", type: Action.FadeOut, duration: 0.5 },

            { name: "lexer_background", type: Action.Move, destination: [-0.8, -0.8], delay: 0.2 },
            { name: "lexer_background", type: Action.Resize, size: [0.15, 0.15], delay: 0.2 },
            { name: "lexer_text", type: Action.Move, destination: [-0.8, -0.8], delay: 0.2 },
            { name: "lexer_text", type: Action.Resize, font_size: 9 / 5, delay: 0.2 },
        ],
        [
            // keyframe: 9
            { name: "example_hello_world_source", type: Action.FadeIn },
            { name: "example_hello_world_source", type: Action.SlideIn, direction: Cardinal.West },
        ],
        [
            // keyframe: 10
            { name: "example_hello_world_tokens", type: Action.FadeIn },
            { name: "example_hello_world_tokens", type: Action.SlideIn, direction: Cardinal.East, time_curve: (t) => 1 - Math.pow(1 - t, 2) },
        ],
        [
            // keyframe: 11
            { name: "example_hello_world_source", type: Action.SlideOut, direction: Cardinal.South },

            { name: "example_hello_world_tokens", type: Action.SlideOut, direction: Cardinal.South },

            { name: "lexer_background", type: Action.SlideOut, direction: Cardinal.West },
            { name: "lexer_text", type: Action.SlideOut, direction: Cardinal.West },

            { name: "parser_background", type: Action.Show },
            { duration: 0, name: "parser_background", type: Action.Move, destination: [-0.8, -0.8] },
            { duration: 0, name: "parser_background", type: Action.Resize, size: [0.15, 0.15] },
            { name: "parser_text", type: Action.Show },
            { duration: 0, name: "parser_text", type: Action.Move, destination: [-0.8, -0.8] },
            { duration: 0, name: "parser_text", type: Action.Resize, font_size: 9 / 5 },

            { name: "parser_background", type: Action.SlideIn, direction: Cardinal.East },
            { name: "parser_text", type: Action.SlideIn, direction: Cardinal.East },

            { name: "simple_ast_source", type: Action.FadeIn, delay: 0.3 },
        ],
        [
            // keyframe: 12
            { name: "simple_ast_source", type: Action.Move, destination: [0, -0.8], duration: 0.8 },
            { name: "simple_ast_source", type: Action.Resize, font_size: 2.0 },

            { name: "simple_ast_decl", type: Action.FadeIn, delay: 0.3 },
            { name: "simple_ast_assign", type: Action.FadeIn, delay: 0.3 },
            { name: "simple_ast_block", type: Action.FadeIn, delay: 0.3 },
        ],
        [
            // keyframe: 13
            { name: "simple_ast_block", type: Action.FadeOut, duration: 0.5 },
            { name: "simple_ast_decl", type: Action.Move, destination: [-0.3, 0], anchor: [0, 0], delay: 0.3 },
            { name: "simple_ast_assign", type: Action.Move, destination: [0.3, 0], anchor: [0, 0], delay: 0.3 },
        ],
        [
            // keyframe: 14
            { name: "parser_text", type: Action.Move, destination: [-0.8, -0.7] },
            { name: "parser_text", type: Action.FadeOut, duration: 0.6 },

            { duration: 0, name: "codegen_text", type: Action.Resize, font_size: 9 / 5 },
            { duration: 0, name: "codegen_text", type: Action.Move, destination: [-0.8, -0.9] },
            { name: "codegen_text", type: Action.Move, destination: [-0.8, -0.8] },
            { name: "codegen_text", type: Action.FadeIn, duration: 0.6, delay: 0.4 },

            { name: "simple_ast_decl", type: Action.SlideOut, direction: Cardinal.West },
            { name: "simple_ast_assign", type: Action.SlideOut, direction: Cardinal.East },
            { name: "simple_ast_source", type: Action.SlideOut, direction: Cardinal.North },

            { name: "example_stack", type: Action.Show, delay: 1 },
            { name: "example_rsp", type: Action.Show, delay: 1.2 },
            { name: "example_rbp", type: Action.Show, delay: 1.4 },

            { name: "example_stack", type: Action.SlideIn, direction: Cardinal.West, duration: 1.1, delay: 1 },
            { name: "example_rsp", type: Action.SlideIn, direction: Cardinal.West, duration: 1, delay: 1.2 },
            { name: "example_rbp", type: Action.SlideIn, direction: Cardinal.West, duration: 0.9, delay: 1.4 },
        ],
        [
            // keyframe: 15
        ],
    ],
};
