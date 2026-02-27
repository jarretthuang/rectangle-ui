import { booleanAttribute, ChangeDetectionStrategy, Component, Input, model } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({selector:"rui-switch",imports:[NgClass],template:`<button type="button" [disabled]="disabled" [ngClass]="buttonClasses" (click)="toggle()"><span [ngClass]="thumbClasses"></span></button>`,changeDetection:ChangeDetectionStrategy.OnPush})
export class SwitchComponent{ @Input({transform:booleanAttribute}) disabled=false; checked=model(false); protected get buttonClasses(){return ["inline-flex h-6 w-11 items-center rounded-full p-1 transition-colors",this.checked()?"bg-primary-500":"bg-primary-300 dark:bg-primary-700",this.disabled?"opacity-60 cursor-not-allowed":"cursor-pointer"];} protected get thumbClasses(){return ["h-4 w-4 rounded-full bg-white transition-transform",this.checked()?"translate-x-5":"translate-x-0"];} toggle(){if(this.disabled) return; this.checked.update(v=>!v);} }
