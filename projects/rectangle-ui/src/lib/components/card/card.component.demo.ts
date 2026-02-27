import { Component } from "@angular/core";
import { CardComponent } from "./card.component";
@Component({selector:"rui-card-demo",template:`<rui-card><h3 class="text-base font-semibold">Team plan</h3><p class="mt-1 text-sm text-primary-700 dark:text-primary-300">Manage seats and billing in one place.</p></rui-card>`,imports:[CardComponent]})
export class CardDemoComponent {}
