import { ChangeDetectionStrategy, Component, Input, model } from "@angular/core";

export type RadioOption = { label: string; value: string };
@Component({selector:"rui-radio-group",template:`<div class="space-y-2">@for (option of options; track option.value) {<label class="flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary-900 dark:text-primary-100"><input type="radio" name="radio-group" class="h-4 w-4 accent-primary-500" [checked]="value() === option.value" (change)="value.set(option.value)"/><span>{{ option.label }}</span></label>}</div>`,changeDetection:ChangeDetectionStrategy.OnPush})
export class RadioGroupComponent{ @Input() options: RadioOption[] = []; value = model<string>(""); }
