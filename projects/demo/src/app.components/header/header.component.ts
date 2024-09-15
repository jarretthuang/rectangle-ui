import { Component, HostBinding } from "@angular/core";
import { ModeToggleComponent } from "../mode-toggle/mode-toggle.component";
import { tw } from "@/utils/tailwind";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  template: `
    <header
      class="m-auto flex h-full w-full max-w-6xl select-none items-center justify-between px-5"
      aria-label="Header with logo and mode toggle">
      <a routerLink="/" class="flex h-full items-center gap-1">
        <img class="p-1 invert dark:invert-0" ngSrc="/logo.svg" priority alt="Logo" height="50" width="50" />
        <span class="text-nowrap font-semibold">Rectangle UI</span>
      </a>
      <app-mode-toggle aria-label="Toggle dark and light mode"></app-mode-toggle>
    </header>
  `,
  imports: [ModeToggleComponent, NgOptimizedImage, RouterLink],
})
export class HeaderComponent {
  @HostBinding("class") hostClass: string =
    tw`sticky top-0 z-50 block flex h-14 w-full ` +
    tw`border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow backdrop-blur dark:shadow-primary-200/10`;
}
