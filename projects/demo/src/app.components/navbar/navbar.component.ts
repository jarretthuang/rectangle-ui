import { Component } from "@angular/core";
import { allComponentPages, readmePage } from "../../server/pages";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  template: `
    <nav class="fixed top-14 flex h-[calc(100vh-3.5rem)] w-40 flex-col gap-6 py-12 pl-2 pr-12">
      <ul class="flex flex-col text-sm">
        <h3 class="text-base font-semibold">Introduction</h3>
        <a routerLink="{{ readmePage.id }}" routerLinkActive="font-semibold">
          <li class="hover-outline cursor-pointer p-2">Read me</li>
        </a>
      </ul>
      <ul class="flex flex-col text-sm">
        <h3 class="text-base font-semibold">Components</h3>
        @for (component of allComponents; track component.id) {
          <a routerLink="{{ component.id }}" routerLinkActive="font-semibold">
            <li class="hover-outline cursor-pointer p-2">{{ component.name }}</li>
          </a>
        }
        <li class="hover-outline cursor-pointer p-2">More...</li>
      </ul>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  protected readonly readmePage = readmePage;
  protected readonly allComponents = allComponentPages;
}
