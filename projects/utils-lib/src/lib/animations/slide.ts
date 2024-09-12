import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideUpDownAnimation = [
  trigger("slideUpDown", [
    state(
      "in",
      style({
        height: "*",
        opacity: 1,
        visibility: "visible",
      })
    ),
    state(
      "out",
      style({
        height: "0px",
        opacity: 0,
        visibility: "hidden",
      })
    ),
    transition("in => out", [animate("300ms ease-in")]),
    transition("out => in", [animate("300ms ease-out")]),
  ]),
];
