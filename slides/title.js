import { Animation, Color, Element } from "../types.js";

export const slide = {
  background_color: Color.Background,
  elements: [
    {
      type: Element.Text,
      value: "Ignis",
      font_size: 72,
      color: Color.Foreground,
      position: [0, -0.2],
      anchor: [0, 0],
    },
  ],
  keyframes: [
    [{}],
    [
      {
        type: Animation.FadeIn,
        element: 0,
      },
    ],
  ],
};
