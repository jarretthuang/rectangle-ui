import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { NgClass } from "@angular/common";
import { DropdownModel } from "@/components/dropdown/dropdown.model";

const DROPDOWN_ITEM_BACKGROUND = "bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800";
const DROPDOWN_ITEM_TEXT = "cursor-pointer select-none text-sm font-semibold text-primary-900 dark:text-primary-100";
const DROPDOWN_ITEM_LAYOUT = "flex w-full items-center px-4 py-2";
const DROPDOWN_ITEM_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
    selector: "rui-dropdown-item",
    imports: [NgClass],
    template: `
    <li class="list-none">
      <button type="button" (click)="onSelect()" [ngClass]="styleClasses">
        <ng-content></ng-content>
      </button>
    </li>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
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
    DROPDOWN_ITEM_BACKGROUND,
    DROPDOWN_ITEM_TEXT,
    DROPDOWN_ITEM_LAYOUT,
    DROPDOWN_ITEM_ANIMATION,
  ];
}
