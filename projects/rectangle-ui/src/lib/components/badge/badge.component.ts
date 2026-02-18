import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgClass } from "@angular/common";

const BADGE_BACKGROUND =
  "bg-primary-1000 hover:bg-primary-1000/80 active:bg-primary-1000/80 dark:bg-primary-100 dark:hover:bg-primary-100/80 dark:active:bg-primary-100/80";
const BADGE_TEXT = "text-sm font-semibold text-primary-200 dark:text-primary-900";
const BADGE_LAYOUT = "flex w-fit rounded-2xl px-3 py-1.5";
const BADGE_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
    selector: "rui-badge",
    imports: [NgClass],
    template: `
    <div [ngClass]="styleClasses">
      <ng-content></ng-content>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  protected readonly styleClasses: string[] = [BADGE_BACKGROUND, BADGE_TEXT, BADGE_LAYOUT, BADGE_ANIMATION];
}
