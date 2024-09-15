import { Component } from "@angular/core";
import { allComponentPages, readmePage } from "../../server/pages";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  template: `
    <nav
      class="fixed top-14 flex h-[calc(100vh-3.5rem)] w-32 flex-col gap-2 py-12 pl-2 pr-6 text-mono-700 dark:text-mono-500">
      <ul class="flex flex-col gap-1 text-sm">
        <div class="py-2 text-sm font-bold">Introduction</div>
        <a routerLink="{{ readmePage.id }}" routerLinkActive="font-semibold text-mono-800 dark:text-mono-400">
          <li class="hover-outline cursor-pointer px-2 py-1">Read me</li>
        </a>
      </ul>
      <ul class="flex flex-col gap-1 text-sm">
        <div class="py-2 text-sm font-bold">Components</div>
        @for (component of allComponents; track component.id) {
          <a routerLink="{{ component.id }}" routerLinkActive="font-semibold text-mono-800 dark:text-mono-400">
            <li class="hover-outline cursor-pointer px-2 py-1">{{ component.name }}</li>
          </a>
        }
      </ul>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  protected readonly readmePage = readmePage;
  protected readonly allComponents = allComponentPages;
}
