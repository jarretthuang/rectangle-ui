import { ChangeDetectionStrategy, Component, Input, model } from "@angular/core";
import { NgClass } from "@angular/common";

const INPUT_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 focus:bg-primary-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:focus:bg-primary-900/50";
const INPUT_TEXT = "text-sm font-semibold text-primary-900 placeholder:text-primary-700/70 dark:text-primary-100 dark:placeholder:text-primary-300/70";
const INPUT_LAYOUT = "w-full rounded-xl px-3 py-2 outline-none";
const INPUT_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
  selector: "rui-input",
  imports: [NgClass],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value()"
      [ngClass]="styleClasses"
      (input)="onInput($event)" />
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
  @Input() disabled: boolean = false;

  /**
   * Current input value.
   */
  value = model<string>("");

  protected readonly styleClasses: string[] = [INPUT_BACKGROUND, INPUT_TEXT, INPUT_LAYOUT, INPUT_ANIMATION];

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
