import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";
import { NgIconComponent } from "@ng-icons/core";

@Component({
    selector: "rui-icon",
    imports: [NgIconComponent],
    template: `
    <ng-icon class="text-xl" [title]="tooltip ?? ''" [svg]="icon"></ng-icon>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @HostBinding("class") hostClass: string = "flex aspect-square";

  /**
   * The icon SVG.
   */
  @Input({ required: true }) icon!: string;

  /**
   * The tooltip to display when hovering over the icon.
   */
  @Input() tooltip: string | undefined;
}
