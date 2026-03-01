import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "rui-pagination",
  template: `
    <div class="inline-flex items-center gap-2">
      <button
        type="button"
        class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700"
        [disabled]="page <= 1"
        (click)="go(page - 1)">
        Prev
      </button>
      <span class="text-sm font-semibold text-primary-900 dark:text-primary-100">
        Page {{ page }} of {{ totalPages }}
      </span>
      <button
        type="button"
        class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold dark:border-primary-700"
        [disabled]="page >= totalPages"
        (click)="go(page + 1)">
        Next
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();
  go(next: number) {
    if (next < 1) return;

    const maxPage = Math.max(1, this.totalPages);
    const safeNext = Math.min(next, maxPage);

    if (safeNext === this.page) return;
    this.pageChange.emit(safeNext);
  }
}
