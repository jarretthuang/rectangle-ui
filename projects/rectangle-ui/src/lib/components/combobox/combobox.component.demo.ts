import { Component } from "@angular/core";
import { ComboboxComponent } from "@/components/combobox/combobox.component";

@Component({
  selector: "rui-combobox-demo",
  imports: [ComboboxComponent],
  template: `
    <div class="max-w-sm">
      <rui-combobox
        placeholder="Pick a framework"
        [options]="frameworks"></rui-combobox>
    </div>
  `,
})
export class ComboboxDemoComponent {
  frameworks = [
    { label: "Angular", value: "angular" },
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ];
}
