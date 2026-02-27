import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "rui-label",
  template: `<label [attr.for]="forId" class="text-sm font-semibold text-primary-900 dark:text-primary-100"><ng-content></ng-content></label>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent { @Input() forId?: string; }
