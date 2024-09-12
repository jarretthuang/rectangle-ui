import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideUpDownAnimation = [
  trigger("slideUpDown", [
    state(
      "down",
      style({
        height: "*",
        opacity: 1,
        visibility: "visible",
      })
    ),
    state(
      "up",
      style({
        height: "0px",
        opacity: 0,
        visibility: "hidden",
      })
    ),
    transition("down => up", [animate("200ms ease-in")]),
    transition("up => down", [animate("200ms ease-out")]),
  ]),
];
