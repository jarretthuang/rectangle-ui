import { Component } from "@angular/core";
import { TabsComponent } from "./tabs.component";
@Component({
  selector: "rui-tabs-demo",
  template: `
    <rui-tabs [tabs]="tabs" [(active)]="active">
      <p>Selected: {{ active }}</p>
    </rui-tabs>
  `,
  imports: [TabsComponent],
})
export class TabsDemoComponent {
  active = "overview";
  tabs = [
    { label: "Overview", value: "overview" },
    { label: "Usage", value: "usage" },
    { label: "Billing", value: "billing" },
  ];
}
