import { Component, HostBinding } from "@angular/core";
import { ProgressComponent } from "./progress.component";

@Component({
  selector: "rui-progress-demo",
  template: `
    <div class="space-y-2">
      <rui-progress [value]="25"></rui-progress>
      <rui-progress [value]="66"></rui-progress>
      <rui-progress [value]="90"></rui-progress>
    </div>
  `,
  imports: [ProgressComponent],
})
export class ProgressDemoComponent {
  @HostBinding("class") hostClasses = "block w-full max-w-md";
}
