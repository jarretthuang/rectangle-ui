import { Component, OnInit } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matDarkModeRound, matLightModeRound } from "@ng-icons/material-icons/round";

@Component({
  selector: "app-mode-toggle",
  standalone: true,
  imports: [NgIconComponent],
  template: `
    <button
      class="relative flex rounded bg-transparent p-2 transition-all duration-300 hover:bg-mono-300 dark:hover:bg-mono-900"
      (click)="toggleTheme()">
      <ng-icon class="text-xl" [name]="isDarkMode ? 'matDarkModeRound' : 'matLightModeRound'"></ng-icon>
    </button>
  `,
  viewProviders: [provideIcons({ matLightModeRound, matDarkModeRound })],
})
export class ModeToggleComponent implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    // Check the current theme in localStorage (if exists) or use system preference
    const storedTheme = localStorage.getItem("theme");
    this.isDarkMode =
      storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("theme", this.isDarkMode ? "dark" : "light");
    this.updateTheme();
  }

  updateTheme(): void {
    const rootElement = document.documentElement; // `html` element
    if (this.isDarkMode) {
      rootElement.classList.add("dark"); // Tailwind's dark mode
    } else {
      rootElement.classList.remove("dark");
    }
  }
}
