import { Component, HostBinding } from "@angular/core";
import { AccordionComponent } from "./accordion.component";

@Component({
  selector: "rui-accordion-demo",
  template: `
    <div class="w-full max-w-md">
      <rui-accordion [items]="items"></rui-accordion>
    </div>
  `,
  imports: [AccordionComponent],
})
export class AccordionDemoComponent {
  @HostBinding("class") hostClasses = "flex w-full justify-center self-start";

  items = [
    { title: "Can I cancel anytime?", content: "Yes, you can cancel from billing settings." },
    { title: "Do you offer support?", content: "Yes, email and chat support are included." },
  ];
}
