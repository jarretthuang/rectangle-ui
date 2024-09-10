import { Component } from "@angular/core";
import { matDarkModeRound, matLightModeRound } from "@ng-icons/material-icons/round";
import { IconComponent } from "@/components/icon/icon.component";

@Component({
  selector: "rui-icon-demo",
  standalone: true,
  template: `
    <div class="flex gap-2">
      <rui-icon [icon]="matLightModeRound" [tooltip]="'Switch to light mode'"></rui-icon>
      <rui-icon [icon]="matDarkModeRound"></rui-icon>
    </div>
  `,
  imports: [IconComponent],
})
export class IconDemoComponent {
  protected readonly matLightModeRound = matLightModeRound;
  protected readonly matDarkModeRound = matDarkModeRound;
}
