import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";
import { tw } from "@/utils/tailwind";
import { provideIcons } from "@ng-icons/core";
import { matArrowDropDown } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";

@Component({
  selector: "rui-dropdown",
  standalone: true,
  imports: [NgClass, IconComponent],
  template: `
    <div [ngClass]="styleClasses">
      <span class="px-2">{{ placeholder }}</span>
      <!--  TODO: selection items <ng-content></ng-content>-->
      <rui-icon [icon]="matArrowDropDown"></rui-icon>
    </div>
  `,
  viewProviders: [provideIcons({ matArrowDropDown })],
})
export class DropdownComponent {
  /**
   * The placeholder text to display when no option is selected.
   */
  @Input() placeholder: string = "Select an option";

  protected readonly styleClasses: string[] = [
    // background
    tw`border-[1px] border-mono-300 bg-mono-100 hover:bg-mono-200 dark:border-mono-800 dark:bg-mono-900 dark:hover:bg-mono-900/50`,
    // text
    tw`cursor-pointer select-none text-sm font-semibold text-mono-900 dark:text-mono-100`,
    // sizing and spacing
    tw`flex w-fit items-center rounded-lg px-2 py-2`,
    // animation
    tw`transition-colors duration-200 ease-in-out`,
  ];

  protected readonly matArrowDropDown = matArrowDropDown;
}
