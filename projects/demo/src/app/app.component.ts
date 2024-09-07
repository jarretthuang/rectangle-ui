import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BadgeComponent } from "rectangle-ui";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, BadgeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
