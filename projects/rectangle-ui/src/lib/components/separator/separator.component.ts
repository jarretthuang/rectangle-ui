import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({ selector: "rui-separator", imports: [NgClass], template: `<div role="separator" [attr.aria-orientation]="orientation" [ngClass]="classes"></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class SeparatorComponent {
  @Input() orientation: "horizontal" | "vertical" = "horizontal";
  protected get classes(): string[] { const base = "bg-primary-300 dark:bg-primary-700"; return this.orientation === "vertical" ? [base, "h-6 w-px"] : [base, "h-px w-full"]; }
}
