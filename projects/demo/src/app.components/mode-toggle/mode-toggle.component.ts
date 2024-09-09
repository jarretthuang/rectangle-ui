import { afterRender, Component, HostBinding, OnDestroy } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matDarkModeRound, matLightModeRound } from "@ng-icons/material-icons/round";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-mode-toggle",
  standalone: true,
  imports: [NgIconComponent, NgClass],
  template: `
    <button class="hover-outline relative flex p-2" (click)="toggleTheme()">
      <ng-icon class="text-xl" [title]="tooltip" [name]="icon"></ng-icon>
      @if (isSystemTheme) {
        <span class="absolute bottom-0 right-0 p-1 text-xs">A</span>
      }
    </button>
  `,
  viewProviders: [provideIcons({ matLightModeRound, matDarkModeRound })],
})
export class ModeToggleComponent implements OnDestroy {
  theme: "light" | "dark" | "system" = "system";
  private mediaQuery: MediaQueryList | undefined;
  @HostBinding("class") hostClass = "flex items-center gap-2";

  constructor() {
    afterRender(() => {
      // Check the current theme in localStorage or default to 'system'
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system";
      this.theme = storedTheme || "system";
      this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Set up listener if in 'system' mode
      if (this.theme === "system") {
        this.mediaQuery.addEventListener("change", this.handleSystemThemeChange.bind(this));
      }

      this.updateTheme();
    });
  }

  get icon(): string {
    if (this.theme === "system") {
      return this.mediaQuery?.matches ? "matDarkModeRound" : "matLightModeRound";
    }
    return this.theme === "dark" ? "matDarkModeRound" : "matLightModeRound";
  }

  get tooltip(): string {
    return this.theme === "light" ? "Light" : this.theme === "dark" ? "Dark" : "System";
  }

  get isSystemTheme(): boolean {
    return this.theme === "system";
  }

  toggleTheme(): void {
    if (this.theme === "light") {
      this.theme = "dark";
    } else if (this.theme === "dark") {
      this.theme = "system";
      this.mediaQuery?.addEventListener("change", this.handleSystemThemeChange.bind(this));
    } else {
      this.theme = "light";
      this.mediaQuery?.removeEventListener("change", this.handleSystemThemeChange.bind(this));
    }

    localStorage.setItem("theme", this.theme);
    this.updateTheme();
  }

  handleSystemThemeChange(event: MediaQueryListEvent): void {
    if (this.theme === "system") {
      this.updateTheme(); // Reapply the system preference
    }
  }

  updateTheme(): void {
    const rootElement = document.documentElement;
    if (this.theme === "dark") {
      rootElement.classList.add("dark");
    } else if (this.theme === "light") {
      rootElement.classList.remove("dark");
    } else {
      // 'system' option: follow the system preference
      const prefersDark = this.mediaQuery?.matches;
      if (prefersDark) {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
  }

  ngOnDestroy(): void {
    // Clean up the media query listener when the component is destroyed
    if (this.theme === "system") {
      this.mediaQuery?.removeEventListener("change", this.handleSystemThemeChange.bind(this));
    }
  }
}
