import { Component } from "@angular/core";
import { BadgeComponent } from "@/components/badge/badge.component";

@Component({
  selector: "rui-badge-demo",
  template: `
    <rui-badge>Badge</rui-badge>
  `,
  imports: [BadgeComponent],
})
export class BadgeDemoComponent {}
