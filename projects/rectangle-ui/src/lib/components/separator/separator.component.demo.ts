import { Component } from "@angular/core";
import { SeparatorComponent } from "./separator.component";

@Component({ selector: "rui-separator-demo", template: `<div class="w-full max-w-md space-y-3"><p class="text-sm text-primary-900 dark:text-primary-100">Profile</p><rui-separator></rui-separator><div class="flex items-center gap-3"><span class="text-sm">Left</span><rui-separator orientation="vertical"></rui-separator><span class="text-sm">Right</span></div></div>`, imports: [SeparatorComponent] })
export class SeparatorDemoComponent {}
