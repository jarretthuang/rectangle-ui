import { ChangeDetectionStrategy, Component, Input, model } from "@angular/core";

export type AccordionItem = { title: string; content: string };

@Component({
  selector: "rui-accordion",
  template: `
    <div class="space-y-2">
      @for (item of items; track item.title; let i = $index) {
        <div
          class="rounded-xl border border-primary-300 bg-primary-100 dark:border-primary-800 dark:bg-primary-900">
          <button
            type="button"
            class="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold text-primary-900 dark:text-primary-100"
            [attr.aria-controls]="contentId(i)"
            [attr.aria-expanded]="openIndex() === i"
            [attr.id]="triggerId(i)"
            (click)="toggle(i)">
            {{ item.title }}
            <span aria-hidden="true">{{ openIndex() === i ? "−" : "+" }}</span>
          </button>
          <div
            class="px-3 pb-3 text-sm text-primary-700 dark:text-primary-300"
            role="region"
            [attr.aria-labelledby]="triggerId(i)"
            [attr.hidden]="openIndex() === i ? null : ''"
            [attr.id]="contentId(i)">
            {{ item.content }}
          </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() id?: string;

  openIndex = model<number | -1>(-1);

  toggle(i: number) {
    this.openIndex.set(this.openIndex() === i ? -1 : i);
  }

  protected triggerId(i: number): string {
    return `${this.accordionId()}-trigger-${i}`;
  }

  protected contentId(i: number): string {
    return `${this.accordionId()}-content-${i}`;
  }

  private accordionId(): string {
    return this.id?.trim() || `rui-accordion-${hashAccordionItems(this.items)}`;
  }
}

function hashAccordionItems(items: AccordionItem[]): string {
  let hash = 0;

  for (const item of items) {
    const value = `${item.title}\u0000${item.content}\u0001`;

    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
  }

  return hash.toString(36);
}
