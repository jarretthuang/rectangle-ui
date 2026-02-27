import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({selector:"rui-badge-group",template:`<div class="flex flex-wrap gap-2">@for (chip of chips; track chip) {<span class="rounded-full border border-primary-300 bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-900 dark:border-primary-700 dark:bg-primary-900 dark:text-primary-100">{{chip}}</span>}</div>`,changeDetection:ChangeDetectionStrategy.OnPush})
export class BadgeGroupComponent{ @Input() chips:string[]=[]; }
