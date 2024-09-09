import { Component } from "@angular/core";
import { BadgeComponent } from "@/components/badge";

@Component({
  standalone: true,
  template: `
    <rectangle-ui-badge>Badge</rectangle-ui-badge>
  `,
  imports: [BadgeComponent],
})
export class BadgeDemoComponent {}
