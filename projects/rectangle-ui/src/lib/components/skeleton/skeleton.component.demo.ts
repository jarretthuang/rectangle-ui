import { Component } from "@angular/core";
import { SkeletonComponent } from "./skeleton.component";

@Component({
  selector: "rui-skeleton-demo",
  template: `
    <div class="w-full max-w-md space-y-2">
      <rui-skeleton height="1.25rem"></rui-skeleton>
      <rui-skeleton width="80%" height="1.25rem"></rui-skeleton>
      <rui-skeleton width="60%" height="1.25rem"></rui-skeleton>
    </div>
  `,
  imports: [SkeletonComponent],
})
export class SkeletonDemoComponent {}
