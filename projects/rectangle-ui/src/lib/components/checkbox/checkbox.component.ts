import { booleanAttribute, ChangeDetectionStrategy, Component, Input, model } from "@angular/core";

@Component({
  selector: "rui-checkbox",
  template: `
    <label
      class="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary-900 dark:text-primary-100">
      <input
        type="checkbox"
        class="h-4 w-4 rounded border-primary-500 accent-primary-500"
        [disabled]="disabled"
        [checked]="checked()"
        (change)="onChange($event)" />
      <ng-content></ng-content>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input({ transform: booleanAttribute }) disabled = false;
  checked = model(false);
  onChange(e: Event) {
    this.checked.set((e.target as HTMLInputElement).checked);
  }
}
