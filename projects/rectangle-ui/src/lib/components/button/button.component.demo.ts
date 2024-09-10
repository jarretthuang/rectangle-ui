import { Component } from "@angular/core";
import { ButtonComponent } from "@/components/button/button.component";

@Component({
  selector: "rui-button-demo",
  standalone: true,
  template: `
    <rui-button>Button</rui-button>
  `,
  imports: [ButtonComponent],
})
export class ButtonDemoComponent {}
