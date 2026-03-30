import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "rui-progress",
  imports: [NgStyle],
  template: `
    <div
      role="progressbar"
      [attr.aria-valuemin]="0"
      [attr.aria-valuemax]="safeMax"
      [attr.aria-valuenow]="currentValue"
      class="h-2 w-full overflow-hidden rounded-full bg-primary-200 dark:bg-primary-800">
      <div
        class="h-full rounded-full bg-primary-500 transition-all duration-200 dark:bg-primary-400"
        [ngStyle]="{ width: width }"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @HostBinding("class") hostClasses = "block w-full";

  @Input() value: number = 0;
  @Input() max: number = 100;

  protected get width(): string {
    return `${(this.currentValue / this.safeMax) * 100}%`;
  }

  protected get currentValue(): number {
    if (!Number.isFinite(this.value)) {
      return 0;
    }

    return Math.min(this.safeMax, Math.max(0, this.value));
  }

  protected get safeMax(): number {
    if (!Number.isFinite(this.max) || this.max <= 0) {
      return 100;
    }

    return this.max;
  }
}
