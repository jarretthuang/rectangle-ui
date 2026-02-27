import { Component } from "@angular/core";
import { ButtonComponent } from "@/components/button/button.component";

@Component({
  selector: "rui-button-demo",
  template: `
    <div class="flex flex-wrap items-center gap-3">
      <rui-button variant="primary" (buttonClick)="onButtonClicked('Primary')">Primary</rui-button>
      <rui-button variant="secondary" (buttonClick)="onButtonClicked('Secondary')">Secondary</rui-button>
      <rui-button variant="danger" (buttonClick)="onButtonClicked('Danger')">Danger</rui-button>
    </div>
  `,
  imports: [ButtonComponent],
})
export class ButtonDemoComponent {
  onButtonClicked(variant: string) {
    console.log(`${variant} button clicked`);
  }
}
