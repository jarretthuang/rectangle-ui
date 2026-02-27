import { Component } from "@angular/core";
import { BadgeGroupComponent } from "./badge-group.component";
@Component({selector:"rui-badge-group-demo",template:`<rui-badge-group [chips]="chips"></rui-badge-group>`,imports:[BadgeGroupComponent]})
export class BadgeGroupDemoComponent{chips=["Angular","Tailwind","Design System","Accessible"]}
