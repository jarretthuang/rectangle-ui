import { ChangeDetectionStrategy, Component, Input, model } from "@angular/core";
@Component({
  selector: "rui-popover",
  template: `
    <div class="relative inline-block">
      <button
        type="button"
        class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700"
        (click)="toggle()">
        {{ triggerLabel }}
      </button>
      @if (isOpen()) {
        <div
          class="absolute left-0 top-full z-20 mt-2 min-w-48 rounded-xl border border-primary-300 bg-primary-100 p-3 text-sm text-primary-900 shadow-lg dark:border-primary-800 dark:bg-primary-900 dark:text-primary-100">
          <ng-content></ng-content>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  @Input() triggerLabel: string = "Open";
  isOpen = model(false);
  toggle() {
    this.isOpen.update((v) => !v);
  }
}
