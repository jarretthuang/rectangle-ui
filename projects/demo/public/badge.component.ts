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
    tw`bg-primary-900/90 hover:bg-primary-900 active:bg-primary-900 dark:bg-primary-100/95 dark:hover:bg-primary-100 dark:active:bg-primary-100`,
    tw`text-xs font-semibold text-primary-200 dark:text-primary-800`,
    tw`flex w-fit rounded-lg p-2 transition-all duration-200`,
  ];
}
