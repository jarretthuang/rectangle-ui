import { Component } from "@angular/core";
import { CheckboxComponent } from "./checkbox.component";
@Component({selector:"rui-checkbox-demo",template:`<rui-checkbox [(checked)]="agreed">Accept terms</rui-checkbox><p class="mt-2 text-sm">agreed: {{agreed}}</p>`,imports:[CheckboxComponent]})
export class CheckboxDemoComponent{agreed=false;}
