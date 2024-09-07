import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { tw } from "utils-lib";

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
    tw`bg-primary-800/90 dark:bg-primary-200/90 hover:bg-primary-800 dark:hover:bg-primary-200`,
    tw`text-primary-200 dark:text-primary-800 text-xs font-semibold`,
    tw`flex w-fit rounded-lg p-2 duration-200`,
  ];
}
