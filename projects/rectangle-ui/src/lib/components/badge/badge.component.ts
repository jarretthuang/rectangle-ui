import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { tw } from "@/utils/tailwind";

@Component({
  selector: "rui-badge",
  standalone: true,
  imports: [NgClass],
  template: `
    <div [ngClass]="styleClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  styleClasses = [
    // background
    tw`bg-primary-1000 hover:bg-primary-1000/80 dark:bg-primary-100 dark:hover:bg-primary-100/80`,
    // text
    tw`text-sm font-semibold text-mono-200 dark:text-mono-900`,
    // sizing and spacing
    tw`flex w-fit rounded-2xl px-3 py-1.5`,
    // animation
    tw`transition-colors duration-200 ease-in-out`,
  ];
}
