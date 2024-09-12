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
import { tw } from "@/utils/tailwind";
import { matArrowDropDown, matArrowDropUp } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";
import { DropdownModel } from "@/components/dropdown/dropdown.model";
import { DropdownItemComponent } from "@/components/dropdown/dropdown.item.component";
import { slideUpDownAnimation } from "@/utils/animations/slide";

@Component({
  selector: "rui-dropdown",
  standalone: true,
  imports: [NgClass, IconComponent],
  animations: [slideUpDownAnimation],
  template: `
    <div class="relative w-full">
      <div [ngClass]="styleClasses" (click)="toggleDropdown()">
        <span class="px-2">
          {{ selectedItem()?.label ?? placeholder }}
        </span>
        <rui-icon [icon]="isExpanded ? matArrowDropUp : matArrowDropDown"></rui-icon>
      </div>
      <ul
        class="absolute left-0 z-10 mt-1 w-full overflow-y-auto overflow-x-hidden rounded-lg border-[1px] border-mono-300 dark:border-mono-800"
        [@slideUpDown]="isExpanded ? 'down' : 'up'">
        <ng-content select="rui-dropdown-item"></ng-content>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    // background
    tw`border-[1px] border-mono-400 bg-mono-100 hover:bg-mono-200 dark:border-mono-800 dark:bg-mono-900 dark:hover:bg-mono-900/50`,
    // text
    tw`cursor-pointer select-none text-sm font-semibold text-mono-900 dark:text-mono-100`,
    // sizing and spacing
    tw`flex w-full items-center justify-between rounded-lg px-2 py-2`,
    // animation
    tw`transition-colors duration-200 ease-in-out`,
  ];

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this._elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isExpanded = false;
    }
  }
}
