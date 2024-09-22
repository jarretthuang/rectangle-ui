import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconComponent } from "@/components/icon/icon.component";
import { matMenu, matMenuOpen } from "@ng-icons/material-icons/baseline";
import { NgClass } from "@angular/common";
import { NavbarListComponent } from "./navbar.list.component";
import { slideUpDownAnimation } from "@/utils/animations/slide";

@Component({
  selector: "app-navbar",
  standalone: true,
  animations: [slideUpDownAnimation],
  template: `
    <div class="fixed left-0 top-0 z-40 flex h-14 select-none md:hidden">
      <div class="z-50 flex h-14 w-14">
        <rui-icon
          class="hover-outline m-auto cursor-pointer p-2"
          [icon]="isMenuOpen ? matMenuOpen : matMenu"
          (click)="toggleMenu()"></rui-icon>
      </div>
      <div
        [@slideUpDown]="isMenuOpen ? 'down' : 'up'"
        class="fixed flex h-screen w-screen bg-mono-100 pl-5 pr-10 pt-20 dark:bg-mono-1000">
        <div class="flex-1">
          <app-navbar-list (selected)="toggleMenu()"></app-navbar-list>
        </div>
      </div>
    </div>
    <div class="fixed top-14 hidden h-screen w-32 py-12 pl-2 pr-5 md:flex md:h-[calc(100vh-3.5rem)]">
      <app-navbar-list></app-navbar-list>
    </div>
  `,
  imports: [RouterLink, RouterLinkActive, IconComponent, NgClass, NavbarListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected isMenuOpen: boolean = false;
  protected readonly matMenu = matMenu;
  protected readonly matMenuOpen = matMenuOpen;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
}
