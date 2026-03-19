import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
@Component({
  selector: "rui-table",
  template: `
    <div
      class="overflow-x-auto rounded-xl border border-primary-300 bg-primary-100 dark:border-primary-800 dark:bg-primary-900">
      <table class="min-w-full divide-y divide-primary-300 text-sm dark:divide-primary-800">
        <thead class="bg-primary-200/80 dark:bg-primary-800/80">
          <tr>
            @for (column of columns; track column) {
              <th class="px-3 py-2 text-left font-semibold text-primary-900 dark:text-primary-100">
                {{ column }}
              </th>
            }
          </tr>
        </thead>
        <tbody class="divide-y divide-primary-200 bg-primary-100 dark:divide-primary-800 dark:bg-primary-900">
          @for (row of rows; track $index) {
            <tr class="transition-colors odd:bg-primary-100 even:bg-primary-50 hover:bg-primary-200/70 dark:odd:bg-primary-900 dark:even:bg-primary-800/60 dark:hover:bg-primary-800">
              @for (cell of row; track $index) {
                <td class="px-3 py-2 text-primary-700 dark:text-primary-300">{{ cell }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() rows: string[][] = [];
}
