import { Component } from "@angular/core";
import { AccordionComponent } from "./accordion.component";
@Component({
  selector: "rui-accordion-demo",
  template: `
    <rui-accordion [items]="items"></rui-accordion>
  `,
  imports: [AccordionComponent],
})
export class AccordionDemoComponent {
  items = [
    { title: "Can I cancel anytime?", content: "Yes, you can cancel from billing settings." },
    { title: "Do you offer support?", content: "Yes, email and chat support are included." },
  ];
}
