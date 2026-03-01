import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "rui-skeleton",
  imports: [NgStyle],
  template: `
    <div
      class="animate-pulse rounded-xl bg-primary-200/70 dark:bg-primary-800/70"
      [ngStyle]="{ width: width, height: height }"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input() width: string = "100%";
  @Input() height: string = "1rem";
}
