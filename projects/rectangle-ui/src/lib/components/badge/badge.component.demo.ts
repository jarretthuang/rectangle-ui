import { Component } from "@angular/core";
import { BadgeComponent } from "@/components/badge/badge.component";

@Component({
  selector: "rectangle-ui-badge-demo",
  standalone: true,
  template: `
    <rectangle-ui-badge>Badge</rectangle-ui-badge>
  `,
  imports: [BadgeComponent],
})
export class BadgeDemoComponent {}
