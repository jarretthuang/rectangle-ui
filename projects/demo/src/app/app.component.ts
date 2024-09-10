import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../app.components/header/header.component";
import { PageComponent } from "../app.components/page/page.component";
import { allComponentPages, readmePage } from "../server/pages";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, PageComponent, RouterLink],
  template: `
    <app-header></app-header>
    <main class="flex h-full w-full gap-4 p-5">
      <nav class="fixed top-14 flex h-[calc(100vh-3.5rem)] w-40 flex-col gap-6 py-12 pl-2 pr-12">
        <ul class="flex flex-col text-sm">
          <h3 class="text-base font-semibold">Introduction</h3>
          <li class="hover-outline cursor-pointer p-2"><a routerLink="{{ readmePage.id }}">Read me</a></li>
        </ul>
        <ul class="flex flex-col text-sm">
          <h3 class="text-base font-semibold">Components</h3>
          @for (component of allComponents; track component.id) {
            <li class="hover-outline cursor-pointer p-2">
              <a routerLink="{{ component.id }}">{{ component.name }}</a>
            </li>
          }
          <li class="hover-outline cursor-pointer p-2">More...</li>
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
