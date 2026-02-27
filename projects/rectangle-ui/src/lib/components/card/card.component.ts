import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({selector:"rui-card",template:`<div class="rounded-xl border-[1px] border-primary-300 bg-primary-100 p-4 text-primary-900 shadow-sm dark:border-primary-800 dark:bg-primary-900 dark:text-primary-100"><ng-content></ng-content></div>`,changeDetection:ChangeDetectionStrategy.OnPush})
export class CardComponent {}
