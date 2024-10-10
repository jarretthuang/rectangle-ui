import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output } from "@angular/core";
import { allComponentPages, readmePage } from "../../server/pages";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-navbar-list",
  standalone: true,
  template: `
    <nav class="flex w-full select-none flex-col gap-2 text-primary-600">
      <ul class="flex flex-col gap-1 text-sm">
        <div class="py-2 text-sm font-bold text-primary-800 dark:text-primary-400">Introduction</div>
        <a routerLink="{{ readmePage.id }}" routerLinkActive="font-semibold text-primary-1000 dark:text-primary-100">
          <li class="hover-outline cursor-pointer px-2 py-1" (click)="selected.emit()">Read me</li>
        </a>
      </ul>
      <ul class="flex flex-col gap-1 text-sm">
        <div class="py-2 text-sm font-bold text-primary-800 dark:text-primary-400">Components</div>
        @for (component of allComponents; track component.id) {
          <a routerLink="{{ component.id }}" routerLinkActive="font-semibold text-primary-1000 dark:text-primary-100">
            <li class="hover-outline cursor-pointer px-2 py-1" (click)="selected.emit()">
              {{ component.name }}
            </li>
          </a>
        }
      </ul>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive, NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarListComponent {
  @HostBinding("class") hostClass: string = "w-full";

  /**
   * Emits when a component is selected.
   */
  @Output() selected = new EventEmitter<void>();

  protected readonly readmePage = readmePage;
  protected readonly allComponents = allComponentPages;
}
