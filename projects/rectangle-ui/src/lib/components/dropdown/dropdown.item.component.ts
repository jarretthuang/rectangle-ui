import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass } from "@angular/common";
import { tw } from "@/utils/tailwind";
import { DropdownModel } from "@/components/dropdown/dropdown.model";

@Component({
  selector: "rui-dropdown-item",
  standalone: true,
  imports: [NgClass],
  template: `
    <li (click)="onSelect()" [ngClass]="styleClasses">
      <ng-content></ng-content>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {
  /**
   * The item model.
   */
  @Input() item: DropdownModel | undefined;

  /**
   * Emits when the item is selected.
   */
  @Output() itemSelected = new EventEmitter<DropdownModel>();

  /**
   * Handles the item selection.
   */
  onSelect() {
    this.itemSelected.emit(this.item);
  }

  protected readonly styleClasses: string[] = [
    // background
    tw`bg-mono-100 hover:bg-mono-200 dark:bg-mono-900 dark:hover:bg-mono-800`,
    // text
    tw`cursor-pointer select-none text-sm font-semibold text-mono-900 dark:text-mono-100`,
    // sizing and spacing
    tw`flex w-full items-center px-4 py-2`,
    // animation
    tw`transition-colors duration-200 ease-in-out`,
  ];
}