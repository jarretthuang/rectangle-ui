import { Component } from "@angular/core";
import { AvatarComponent } from "./avatar.component";
@Component({
  selector: "rui-avatar-demo",
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <div class="flex flex-col items-center gap-2 text-xs text-primary-700 dark:text-primary-200">
        <rui-avatar
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
          alt="Profile photo"
          fallback="JD"></rui-avatar>
        <span>Image</span>
      </div>

      <div class="flex flex-col items-center gap-2 text-xs text-primary-700 dark:text-primary-200">
        <rui-avatar fallback="AH"></rui-avatar>
        <span>Fallback</span>
      </div>

      <div class="flex flex-col items-center gap-2 text-xs text-primary-700 dark:text-primary-200">
        <rui-avatar src="/broken-avatar.png" fallback="ER"></rui-avatar>
        <span>Image error fallback</span>
      </div>
    </div>
  `,
  imports: [AvatarComponent],
})
export class AvatarDemoComponent {}
