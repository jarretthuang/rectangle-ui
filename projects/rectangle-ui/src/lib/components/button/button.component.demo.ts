import { Component } from "@angular/core";
import { ButtonComponent } from "@/components/button/button.component";

@Component({
  selector: "rectangle-ui-button-demo",
  standalone: true,
  template: `
    <rectangle-ui-button>Button</rectangle-ui-button>
  `,
  imports: [ButtonComponent],
})
export class ButtonDemoComponent {}
