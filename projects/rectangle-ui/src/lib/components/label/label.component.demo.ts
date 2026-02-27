import { Component } from "@angular/core";
import { LabelComponent } from "./label.component";

@Component({
  selector: "rui-label-demo",
  template: `<div class="flex w-full max-w-md flex-col gap-2"><rui-label forId="demo-email">Email</rui-label><input id="demo-email" class="w-full rounded-xl border-[1px] border-primary-400 bg-primary-100 px-3 py-2 text-sm font-semibold text-primary-900 dark:border-primary-800 dark:bg-primary-900 dark:text-primary-100" placeholder="name@company.com" /></div>`,
  imports: [LabelComponent],
})
export class LabelDemoComponent {}
