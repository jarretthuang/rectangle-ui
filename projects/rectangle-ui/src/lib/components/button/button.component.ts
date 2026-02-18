import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { NgClass } from "@angular/common";

const BUTTON_BACKGROUND =
  "bg-primary-1000 hover:bg-primary-1000/80 active:bg-primary-1000/80 dark:bg-primary-100 dark:hover:bg-primary-100/80 dark:active:bg-primary-100/80";
const BUTTON_TEXT = "cursor-pointer select-none text-sm font-semibold text-primary-200 dark:text-primary-900";
const BUTTON_LAYOUT = "flex w-fit rounded-xl px-3 py-2";
const BUTTON_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
    selector: "rui-button",
    imports: [NgClass],
    template: `
    <button type="button" [ngClass]="styleClasses" (click)="buttonClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /**
   * Emits when the button is clicked.
   */
  @Output() buttonClick = new EventEmitter<void>();

  protected readonly styleClasses: string[] = [BUTTON_BACKGROUND, BUTTON_TEXT, BUTTON_LAYOUT, BUTTON_ANIMATION];
}
