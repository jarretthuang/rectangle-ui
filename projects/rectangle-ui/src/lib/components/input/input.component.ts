import { booleanAttribute, ChangeDetectionStrategy, Component, Input, model } from "@angular/core";
import { NgClass } from "@angular/common";
import { matClose } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";

const INPUT_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 focus:bg-primary-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:focus:bg-primary-900/50";
const INPUT_TEXT = "text-sm font-semibold text-primary-900 placeholder:text-primary-700/70 dark:text-primary-100 dark:placeholder:text-primary-300/70";
const INPUT_LAYOUT = "w-full rounded-xl px-3 py-2 pr-9 outline-none";
const INPUT_ANIMATION = "transition-colors duration-200 ease-in-out";
const CLEAR_BUTTON_LAYOUT =
  "absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-primary-700 hover:bg-primary-300/60 dark:text-primary-300 dark:hover:bg-primary-800";

@Component({
  selector: "rui-input",
  imports: [NgClass, IconComponent],
  template: `
    <div class="relative w-full">
      <input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [value]="value()"
        [ngClass]="styleClasses"
        (input)="onInput($event)" />

      @if (value() && !disabled) {
        <button
          type="button"
          aria-label="Clear input"
          [ngClass]="clearButtonClasses"
          (click)="clear()">
          <rui-icon [icon]="matClose"></rui-icon>
        </button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  /**
   * The input type.
   */
  @Input() type: "text" | "email" | "password" = "text";

  /**
   * Placeholder text when there is no value.
   */
  @Input() placeholder: string = "Type here";

  /**
   * Whether the input is disabled.
   */
  @Input({ transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Current input value.
   */
  value = model<string>("");

  protected readonly styleClasses: string[] = [INPUT_BACKGROUND, INPUT_TEXT, INPUT_LAYOUT, INPUT_ANIMATION];
  protected readonly clearButtonClasses: string[] = [CLEAR_BUTTON_LAYOUT];
  protected readonly matClose = matClose;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }

  clear() {
    this.value.set("");
  }
}
