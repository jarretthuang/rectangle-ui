import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

export type BreadcrumbItem = { label: string; href?: string };

@Component({
  selector: "rui-breadcrumb",
  template: `
    <nav aria-label="Breadcrumb">
      <ol
        class="flex flex-wrap items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300">
        @for (item of items; track item.label; let last = $last) {
          <li class="flex items-center gap-2">
            @if (item.href && !last) {
              <a
                [href]="item.href"
                class="transition-colors duration-200 ease-in-out hover:text-primary-900 dark:hover:text-primary-100">
                {{ item.label }}
              </a>
            } @else {
              <span
                [attr.aria-current]="last ? 'page' : null"
                [class.text-primary-900]="last"
                [class.dark:text-primary-100]="last">
                {{ item.label }}
              </span>
            }
            @if (!last) {
              <span aria-hidden="true">/</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
