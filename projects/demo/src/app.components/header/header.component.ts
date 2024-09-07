import { Component, HostBinding, OnInit } from "@angular/core";
import { ModeToggleComponent } from "../mode-toggle/mode-toggle.component";
import { tw } from "@/utils/tailwind";

@Component({
  selector: "app-header",
  standalone: true,
  template: `
    <header class="flex h-full w-full select-none items-center justify-between px-5">
      <span>Rectangle-ui</span>
      <app-mode-toggle></app-mode-toggle>
    </header>
  `,
  imports: [ModeToggleComponent],
})
export class HeaderComponent {
  @HostBinding("class") classes =
    tw`border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 block h-14 w-full shadow backdrop-blur dark:shadow-primary-200/10`;
}
