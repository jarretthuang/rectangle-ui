import { booleanAttribute, ChangeDetectionStrategy, Component, Input, model } from "@angular/core";
import { NgClass } from "@angular/common";

const TEXTAREA_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 focus:bg-primary-200 disabled:cursor-not-allowed disabled:opacity-60 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:focus:bg-primary-900/50";
const TEXTAREA_TEXT =
  "text-sm font-semibold text-primary-900 placeholder:text-primary-700/70 dark:text-primary-100 dark:placeholder:text-primary-300/70";
const TEXTAREA_LAYOUT = "w-full min-h-24 max-h-80 resize-y rounded-xl px-3 py-2 outline-none";
const TEXTAREA_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
  selector: "rui-textarea",
  imports: [NgClass],
  template: `
    <textarea
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value()"
      [ngClass]="styleClasses"
      (input)="onInput($event)"></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  @Input() placeholder: string = "Write something";
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  value = model<string>("");
  protected readonly styleClasses: string[] = [
    TEXTAREA_BACKGROUND,
    TEXTAREA_TEXT,
    TEXTAREA_LAYOUT,
    TEXTAREA_ANIMATION,
  ];
  onInput(event: Event) {
    this.value.set((event.target as HTMLTextAreaElement).value);
  }
}
