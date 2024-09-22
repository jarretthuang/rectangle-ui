import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../app.components/header/header.component";
import { PageComponent } from "../app.components/page/page.component";
import { allComponentPages, readmePage } from "../server/pages";
import { NavbarComponent } from "../app.components/navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeaderComponent,
    PageComponent,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
  ],
  template: `
    <app-header></app-header>
    <main class="flex h-full w-full max-w-6xl p-5">
      <app-navbar></app-navbar>
      <main class="mr-0 min-h-screen w-full flex-1 py-5 md:pl-32">
        <router-outlet></router-outlet>
      </main>
    </main>
  `,
})
export class AppComponent {
  protected readonly allComponents = allComponentPages;
  protected readonly readmePage = readmePage;
}
