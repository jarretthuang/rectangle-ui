import { Component } from "@angular/core";
import { ProgressComponent } from "./progress.component";

@Component({ selector: "rui-progress-demo", template: `<div class="w-full max-w-md space-y-2"><rui-progress [value]="25"></rui-progress><rui-progress [value]="66"></rui-progress><rui-progress [value]="90"></rui-progress></div>`, imports: [ProgressComponent] })
export class ProgressDemoComponent {}
