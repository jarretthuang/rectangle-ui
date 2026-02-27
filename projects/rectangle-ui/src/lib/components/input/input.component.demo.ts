import { Component } from "@angular/core";
import { InputComponent } from "@/components/input/input.component";

@Component({
  selector: "rui-input-demo",
  template: `
    <div class="w-80">
      <rui-input placeholder="Email" type="email"></rui-input>
    </div>
  `,
  imports: [InputComponent],
})
export class InputDemoComponent {}
