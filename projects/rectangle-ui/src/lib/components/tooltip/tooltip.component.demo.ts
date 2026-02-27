import { Component } from "@angular/core";
import { TooltipComponent } from "./tooltip.component";
@Component({selector:"rui-tooltip-demo",template:`<rui-tooltip text="Copy to clipboard"><button class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700">Hover me</button></rui-tooltip>`,imports:[TooltipComponent]})
export class TooltipDemoComponent{}
