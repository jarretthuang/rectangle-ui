import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BadgeComponent } from "@/components/badge";
import { HeaderComponent } from "../app.components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, BadgeComponent, HeaderComponent],
  template: `
    <app-header></app-header>
    <main class="min-h-screen w-full p-5">
      <rectangle-ui-badge>Badge</rectangle-ui-badge>
    </main>
  `,
})
export class AppComponent {}
