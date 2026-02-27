import { ChangeDetectionStrategy, Component, Input, model } from "@angular/core";

@Component({
  selector: "rui-dialog",
  template: `
    <button
      type="button"
      class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700"
      (click)="open.set(true)">
      {{ triggerLabel }}
    </button>

    @if (open()) {
      <div class="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
        <div
          class="w-full max-w-md rounded-xl border border-primary-300 bg-primary-100 p-4 shadow-xl dark:border-primary-800 dark:bg-primary-900">
          <div class="mb-2 text-base font-semibold text-primary-900 dark:text-primary-100">{{ title }}</div>
          <ng-content></ng-content>
          <div class="mt-4 flex justify-end">
            <button
              type="button"
              class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700"
              (click)="open.set(false)">
              Close
            </button>
          </div>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @Input() title: string = "Dialog";
  @Input() triggerLabel: string = "Open dialog";

  open = model(false);
}
