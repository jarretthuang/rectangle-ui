import { Component } from "@angular/core";
import { InputComponent } from "@/components/input/input.component";

@Component({
  selector: "rui-input-demo",
  template: `
    <div class="max-w-sm">
      <rui-input placeholder="Email" type="email"></rui-input>
    </div>
  `,
  imports: [InputComponent],
})
export class InputDemoComponent {}
