import { Component } from "@angular/core";
import { DropdownComponent } from "@/components/dropdown/dropdown.component";

@Component({
  selector: "rui-dropdown-demo",
  standalone: true,
  template: `
    <rui-dropdown [placeholder]="'Select a Pokémon'"></rui-dropdown>
  `,
  imports: [DropdownComponent],
})
export class DropdownDemoComponent {}
