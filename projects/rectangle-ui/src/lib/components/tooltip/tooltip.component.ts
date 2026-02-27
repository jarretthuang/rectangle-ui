import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from "@angular/core";
@Component({
  selector: "rui-tooltip",
  template: `
    <span class="relative inline-flex" (mouseenter)="open()" (mouseleave)="close()">
      <ng-content></ng-content>
      @if (isOpen()) {
        <span
          class="absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary-900 px-2 py-1 text-xs font-semibold text-primary-100 dark:bg-primary-100 dark:text-primary-900">
          {{ text }}
        </span>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input() text: string = "Tooltip";
  protected isOpen = signal(false);
  open() {
    this.isOpen.set(true);
  }
  close() {
    this.isOpen.set(false);
  }
  @HostListener("focusin") onFocusIn() {
    this.open();
  }
  @HostListener("focusout") onFocusOut() {
    this.close();
  }
}
