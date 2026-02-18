import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  model,
  QueryList,
} from "@angular/core";
import { NgClass } from "@angular/common";
import { matArrowDropDown, matArrowDropUp } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";
import { DropdownModel } from "@/components/dropdown/dropdown.model";
import { DropdownItemComponent } from "@/components/dropdown/dropdown.item.component";
import { slideUpDownAnimation } from "@/utils/animations/slide";

const DROPDOWN_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 active:bg-primary-200 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:active:bg-primary-900/50";
const DROPDOWN_TEXT = "cursor-pointer select-none text-sm font-semibold text-primary-900 dark:text-primary-100";
const DROPDOWN_LAYOUT = "flex w-full items-center justify-between rounded-lg px-2 py-2";
const DROPDOWN_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
    selector: "rui-dropdown",
    imports: [NgClass, IconComponent],
    animations: [slideUpDownAnimation],
    template: `
    <div class="relative w-full">
      <button type="button" [ngClass]="styleClasses" (click)="toggleDropdown()">
        <span class="px-2">
          {{ selectedItem()?.label ?? placeholder }}
        </span>
        <rui-icon [icon]="isExpanded ? matArrowDropUp : matArrowDropDown"></rui-icon>
      </button>
      <ul
        class="absolute left-0 z-10 mt-1 w-full overflow-y-auto overflow-x-hidden rounded-lg border-[1px] border-primary-300 dark:border-primary-800"
        [@slideUpDown]="isExpanded ? 'down' : 'up'">
        <ng-content select="rui-dropdown-item"></ng-content>
      </ul>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  @ContentChildren(DropdownItemComponent) items: QueryList<DropdownItemComponent> | undefined;

  /**
   * The placeholder text to display when no option is selected.
   */
  @Input() placeholder: string = "Select an option";

  /**
   * The currently selected item.
   */
  selectedItem = model<DropdownModel | undefined>();

  /**
   * The dropdown state.
   */
  isExpanded = false;

  /**
   * Whether the component has finished initial rendering.
   */
  finishedRendering = false;

  constructor(private _elementRef: ElementRef) {
    afterRender(() => {
      this.finishedRendering = true;
      this.items?.forEach((item) => {
        item.itemSelected.subscribe((model) => {
          this.selectedItem.set(model);
          this.isExpanded = false;
        });
      });
    });
  }

  /**
   * Toggles the dropdown state.
   */
  toggleDropdown() {
    this.isExpanded = !this.isExpanded;
  }

  protected readonly matArrowDropUp = matArrowDropUp;
  protected readonly matArrowDropDown = matArrowDropDown;

  protected readonly styleClasses: string[] = [
    DROPDOWN_BACKGROUND,
    DROPDOWN_TEXT,
    DROPDOWN_LAYOUT,
    DROPDOWN_ANIMATION,
  ];

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this._elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isExpanded = false;
    }
  }
}
