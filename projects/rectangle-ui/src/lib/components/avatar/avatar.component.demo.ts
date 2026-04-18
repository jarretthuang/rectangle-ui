import { Component } from "@angular/core";
import { AvatarComponent } from "./avatar.component";
@Component({
  selector: "rui-avatar-demo",
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <div class="flex flex-col items-center gap-2 text-xs text-primary-700 dark:text-primary-200">
        <rui-avatar src="/avatar-demo.svg" alt="Avatar demo illustration" fallback="AD"></rui-avatar>
        <span>Image</span>
      </div>

      <div class="flex flex-col items-center gap-2 text-xs text-primary-700 dark:text-primary-200">
        <rui-avatar fallback="AH"></rui-avatar>
        <span>Initials</span>
      </div>
    </div>
  `,
  imports: [AvatarComponent],
})
export class AvatarDemoComponent {}
