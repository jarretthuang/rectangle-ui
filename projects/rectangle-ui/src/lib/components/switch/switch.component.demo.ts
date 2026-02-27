import { Component } from "@angular/core";
import { SwitchComponent } from "./switch.component";
@Component({
  selector: "rui-switch-demo",
  template: `
    <div class="flex items-center gap-3">
      <rui-switch [(checked)]="enabled"></rui-switch>
      <span class="text-sm">{{ enabled ? "Enabled" : "Disabled" }}</span>
    </div>
  `,
  imports: [SwitchComponent],
})
export class SwitchDemoComponent {
  enabled = false;
}
