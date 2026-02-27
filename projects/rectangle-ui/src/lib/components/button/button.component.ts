import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass } from "@angular/common";

const BUTTON_TEXT = "cursor-pointer select-none text-sm font-semibold";
const BUTTON_LAYOUT = "inline-flex w-fit items-center justify-center rounded-xl px-3 py-2";
const BUTTON_ANIMATION = "transition-colors duration-200 ease-in-out";
const BUTTON_DISABLED = "disabled:cursor-not-allowed disabled:opacity-60";

const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "border border-primary-400 bg-primary-100 text-primary-900 enabled:hover:bg-primary-200 enabled:active:bg-primary-200 dark:border-primary-800 dark:bg-primary-900 dark:text-primary-100 dark:enabled:hover:bg-primary-900/50 dark:enabled:active:bg-primary-900/50",
  secondary:
    "border border-primary-300 bg-transparent text-primary-900 enabled:hover:bg-primary-100 enabled:active:bg-primary-100 dark:border-primary-700 dark:text-primary-100 dark:enabled:hover:bg-primary-900/40 dark:enabled:active:bg-primary-900/40",
  danger:
    "border border-red-300 bg-red-50 text-red-700 enabled:hover:bg-red-100 enabled:active:bg-red-100 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300 dark:enabled:hover:bg-red-900/40 dark:enabled:active:bg-red-900/40",
};

@Component({
  selector: "rui-button",
  imports: [NgClass],
  template: `
    <button type="button" [disabled]="disabled" [ngClass]="styleClasses" (click)="buttonClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Visual style variant for the button.
   */
  @Input() variant: ButtonVariant = "primary";

  /**
   * Whether the button is disabled.
   */
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Emits when the button is clicked.
   */
  @Output() buttonClick = new EventEmitter<void>();

  protected get styleClasses(): string[] {
    return [BUTTON_VARIANT_CLASSES[this.variant], BUTTON_TEXT, BUTTON_LAYOUT, BUTTON_ANIMATION, BUTTON_DISABLED];
  }
}

export type ButtonVariant = "primary" | "secondary" | "danger";
