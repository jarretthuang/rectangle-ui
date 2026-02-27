import { Component } from "@angular/core";
import { RadioGroupComponent } from "./radio-group.component";
@Component({
  selector: "rui-radio-group-demo",
  template: `
    <rui-radio-group [options]="sizes" [(value)]="selected"></rui-radio-group>
    <p class="mt-2 text-sm">selected: {{ selected }}</p>
  `,
  imports: [RadioGroupComponent],
})
export class RadioGroupDemoComponent {
  selected = "sm";
  sizes = [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
  ];
}
