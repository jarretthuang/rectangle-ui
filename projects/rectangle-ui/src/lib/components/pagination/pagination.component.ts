import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "rui-pagination",
  template: `
    <nav aria-label="Pagination">
      <div class="inline-flex items-center gap-2">
        <button
          type="button"
          class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 dark:border-primary-700"
          [disabled]="isPreviousDisabled"
          [attr.aria-label]="previousButtonLabel"
          (click)="go(page - 1)">
          Prev
        </button>
        <span
          aria-live="polite"
          class="text-sm font-semibold text-primary-900 dark:text-primary-100">
          Page {{ currentPage }} of {{ maxPage }}
        </span>
        <button
          type="button"
          class="rounded-xl border border-primary-300 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 dark:border-primary-700"
          [disabled]="isNextDisabled"
          [attr.aria-label]="nextButtonLabel"
          (click)="go(page + 1)">
          Next
        </button>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() page = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  protected get maxPage(): number {
    return Math.max(1, this.totalPages);
  }

  protected get currentPage(): number {
    return Math.min(Math.max(1, this.page), this.maxPage);
  }

  protected get isPreviousDisabled(): boolean {
    return this.currentPage <= 1;
  }

  protected get isNextDisabled(): boolean {
    return this.currentPage >= this.maxPage;
  }

  protected get previousButtonLabel(): string {
    return this.isPreviousDisabled
      ? "Previous page"
      : `Go to page ${this.currentPage - 1}`;
  }

  protected get nextButtonLabel(): string {
    return this.isNextDisabled ? "Next page" : `Go to page ${this.currentPage + 1}`;
  }

  go(next: number) {
    if (next < 1) return;

    const safeNext = Math.min(next, this.maxPage);

    if (safeNext === this.page) return;
    this.pageChange.emit(safeNext);
  }
}
