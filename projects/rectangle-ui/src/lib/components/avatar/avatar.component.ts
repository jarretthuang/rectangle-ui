import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "rui-avatar",
  template: `
    <div
      class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary-300 bg-primary-200 text-sm font-semibold text-primary-900 dark:border-primary-700 dark:bg-primary-800 dark:text-primary-100">
      @if (src) {
        <img [src]="src" [alt]="alt" class="h-full w-full object-cover" />
      } @else {
        <span>{{ fallback }}</span>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt: string = "avatar";
  @Input() fallback: string = "?";
}
