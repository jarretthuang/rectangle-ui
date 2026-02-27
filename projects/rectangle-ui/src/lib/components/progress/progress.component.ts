import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "rui-progress", imports: [NgStyle],
  template: `<div class="h-2 w-full overflow-hidden rounded-full bg-primary-200 dark:bg-primary-800"><div class="h-full rounded-full bg-primary-500 transition-all duration-200 dark:bg-primary-400" [ngStyle]="{ width: width }"></div></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  protected get width(): string { const clamped = Math.min(this.max, Math.max(0, this.value)); return `${(clamped / this.max) * 100}%`; }
}
