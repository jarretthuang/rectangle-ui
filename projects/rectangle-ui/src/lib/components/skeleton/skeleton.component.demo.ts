import { Component, HostBinding } from "@angular/core";
import { SkeletonComponent } from "./skeleton.component";

@Component({
  selector: "rui-skeleton-demo",
  template: `
    <div class="w-full max-w-md rounded-2xl border border-primary-300 bg-primary-50 p-4 dark:border-primary-800 dark:bg-primary-900/40">
      <div class="flex items-center gap-3">
        <rui-skeleton width="3rem" height="3rem"></rui-skeleton>
        <div class="flex-1 space-y-2">
          <rui-skeleton width="45%" height="1rem"></rui-skeleton>
          <rui-skeleton width="70%" height="0.875rem"></rui-skeleton>
        </div>
      </div>

      <div class="mt-4 space-y-2">
        <rui-skeleton height="1rem"></rui-skeleton>
        <rui-skeleton width="92%" height="1rem"></rui-skeleton>
        <rui-skeleton width="78%" height="1rem"></rui-skeleton>
      </div>
    </div>
  `,
  imports: [SkeletonComponent],
})
export class SkeletonDemoComponent {
  @HostBinding("class") hostClasses = "flex w-full justify-center";
}
