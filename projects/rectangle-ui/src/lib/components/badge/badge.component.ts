import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { tw } from "@/utils/tailwind";

@Component({
  selector: "rectangle-ui-badge",
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="styleClasses">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
})
export class BadgeComponent {
  styleClasses = [
    // background color
    tw`bg-primary-1000 hover:bg-primary-1000/80 dark:bg-primary-100 dark:hover:bg-primary-100/80`,
    // text color
    tw`text-sm font-semibold text-mono-200 dark:text-mono-900`,
    // sizing and spacing
    tw`flex w-fit rounded-xl px-3 py-2`,
    // animation
    tw`transition-colors duration-200 ease-in-out`,
  ];
}
