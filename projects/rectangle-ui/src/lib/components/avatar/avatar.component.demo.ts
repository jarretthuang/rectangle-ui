import { Component } from "@angular/core";
import { AvatarComponent } from "./avatar.component";
@Component({
  selector: "rui-avatar-demo",
  template: `
    <div class="flex items-center gap-3">
      <rui-avatar fallback="JD"></rui-avatar>
      <rui-avatar fallback="AH"></rui-avatar>
    </div>
  `,
  imports: [AvatarComponent],
})
export class AvatarDemoComponent {}
