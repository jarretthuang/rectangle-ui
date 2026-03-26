import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";
import {
  matCheckCircle,
  matError,
  matInfo,
  matWarningAmber,
} from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";

@Component({
  selector: "rui-alert",
  imports: [NgClass, IconComponent],
  template: `
    <div role="alert" [ngClass]="classes">
      <rui-icon class="shrink-0 text-current" [icon]="icon"></rui-icon>
      <div class="min-w-0 flex-1">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() variant: "info" | "success" | "warning" | "danger" = "info";

  protected get classes() {
    const base = "flex items-start gap-2 rounded-xl border px-3 py-2 text-sm font-semibold";
    const map = {
      info: "border-primary-300 bg-primary-100 text-primary-900 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-100",
      success:
        "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
      warning:
        "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
      danger:
        "border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300",
    } as const;
    return [base, map[this.variant]];
  }

  protected get icon() {
    const map = {
      info: matInfo,
      success: matCheckCircle,
      warning: matWarningAmber,
      danger: matError,
    } as const;

    return map[this.variant];
  }
}
