import { Component } from "@angular/core";
import { BreadcrumbComponent } from "./breadcrumb.component";
@Component({
  selector: "rui-breadcrumb-demo",
  template: `
    <rui-breadcrumb [items]="items"></rui-breadcrumb>
  `,
  imports: [BreadcrumbComponent],
})
export class BreadcrumbDemoComponent {
  items = [
    { label: "Home", href: "#" },
    { label: "Components", href: "#" },
    { label: "Breadcrumb" },
  ];
}
