import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { BadgeComponent } from "@/components/badge";
import { HeaderComponent } from "../app.components/header/header.component";
import { PageComponent } from "../app.components/page/page.component";
import { allComponentPages, readmePage } from "../page.metadata";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, BadgeComponent, HeaderComponent, HeaderComponent, PageComponent, RouterLink],
  template: `
    <app-header></app-header>
    <main class="flex h-full w-full gap-4 p-5">
      <nav class="fixed top-14 flex h-[calc(100vh-3.5rem)] w-40 flex-col gap-8 px-2 py-12">
        <ul class="flex flex-col gap-3 text-sm">
          <h2 class="text-base font-semibold">Introduction</h2>
          <li><a routerLink="{{ readmePage.id }}">Read me</a></li>
        </ul>
        <ul class="flex flex-col gap-3 text-sm">
          <h2 class="text-base font-semibold">Components</h2>
          @for (component of allComponents; track component.id) {
            <li>
              <a routerLink="{{ component.id }}">{{ component.name }}</a>
            </li>
          }
          <li>More...</li>
        </ul>
      </nav>
      <main class="mr-0 min-h-screen w-full flex-1 py-5 pl-40">
        <router-outlet></router-outlet>
      </main>
    </main>
  `,
})
export class AppComponent {
  protected readonly allComponents = allComponentPages;
  protected readonly readmePage = readmePage;
}
