import {
  afterRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
} from "@angular/core";
import { matDarkModeRound, matLightModeRound } from "@ng-icons/material-icons/round";
import { NgClass } from "@angular/common";
import { IconComponent } from "@/components/icon/icon.component";

@Component({
  selector: "app-mode-toggle",
  standalone: true,
  imports: [NgClass, IconComponent],
  template: `
    <button class="hover-outline relative flex p-2" (click)="toggleTheme()">
      <rui-icon [icon]="icon" [tooltip]="tooltip"></rui-icon>
      @if (isSystemTheme) {
        <span class="absolute bottom-0 right-0 p-1 text-xs">A</span>
      }
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeToggleComponent implements OnDestroy {
  theme: "light" | "dark" | "system" = "system";
  private mediaQuery: MediaQueryList | undefined;
  @HostBinding("class") hostClass = "flex items-center gap-2";

  constructor(private cdr: ChangeDetectorRef) {
    afterRender(() => {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system";
      this.theme = storedTheme || "system";
      this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (this.theme === "system") {
        this.mediaQuery.addEventListener("change", this.handleSystemThemeChange.bind(this));
      }

      this.updateTheme();
    });
  }

  get icon(): string {
    if (this.theme === "system") {
      return this.mediaQuery?.matches ? matDarkModeRound : matLightModeRound;
    }
    return this.theme === "dark" ? matDarkModeRound : matLightModeRound;
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

  handleSystemThemeChange(): void {
    if (this.theme === "system") {
      this.updateTheme();
    }
  }

  updateTheme(): void {
    const rootElement = document.documentElement;
    if (this.theme === "dark") {
      rootElement.classList.add("dark");
    } else if (this.theme === "light") {
      rootElement.classList.remove("dark");
    } else {
      const prefersDark = this.mediaQuery?.matches;
      if (prefersDark) {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.theme === "system") {
      this.mediaQuery?.removeEventListener("change", this.handleSystemThemeChange.bind(this));
    }
  }
}
