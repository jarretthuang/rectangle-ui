import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Output,
} from "@angular/core";
import { prodComponentPages, readmePage } from "../../server/pages";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar-list",
  template: `
    <nav class="flex h-full w-full select-none flex-col text-primary-600">
      <div class="p-2 text-sm font-bold text-primary-800 dark:text-primary-400">Introduction</div>
      <ul class="flex flex-col gap-1 px-4 py-1 text-sm">
        <a
          routerLink="{{ readmePage.id }}"
          routerLinkActive="font-semibold text-primary-1000 dark:text-primary-100"
          (click)="selected.emit()">
          <li class="hover-outline cursor-pointer px-2 py-1">Read me</li>
        </a>
      </ul>
      <div class="p-2 text-sm font-bold text-primary-800 dark:text-primary-400">Components</div>
      <ul class="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-1 text-sm">
        @for (component of allComponents; track component.id) {
          <a
            routerLink="{{ component.id }}"
            routerLinkActive="font-semibold text-primary-1000 dark:text-primary-100"
            (click)="selected.emit()">
            <li class="hover-outline cursor-pointer px-2 py-1">
              {{ component.name }}
            </li>
          </a>
        }
      </ul>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarListComponent {
  @HostBinding("class") hostClass: string = "w-full h-full";

  /**
   * Emits when a component is selected.
   */
  @Output() selected = new EventEmitter<void>();

  protected readonly readmePage = readmePage;
  protected readonly allComponents = [...prodComponentPages].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
