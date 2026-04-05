import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  model,
} from "@angular/core";

export type TabItem = { label: string; value: string };

@Injectable({ providedIn: "root" })
class TabsIdSequence {
  private nextId = 0;

  next(): number {
    const id = this.nextId;
    this.nextId += 1;
    return id;
  }
}

@Component({
  selector: "rui-tabs",
  template: `
    <div class="space-y-3">
      <div
        class="inline-flex gap-1 rounded-xl border border-primary-300 bg-primary-100 p-1 dark:border-primary-800 dark:bg-primary-900"
        role="tablist"
        [attr.aria-label]="ariaLabel">
        @for (tab of tabs; track tab.value; let i = $index) {
          <button
            type="button"
            class="rounded-lg px-3 py-1 text-sm font-semibold text-primary-900 transition-colors duration-200 ease-in-out hover:bg-primary-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:text-primary-100 dark:hover:bg-primary-800"
            role="tab"
            [attr.id]="tabId(i)"
            [attr.tabindex]="selectedIndex() === i ? 0 : -1"
            [attr.aria-selected]="selectedIndex() === i"
            [class.bg-primary-200]="selectedIndex() === i"
            [class.dark:bg-primary-800]="selectedIndex() === i"
            (click)="activate(i)">
            {{ tab.label }}
          </button>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnChanges, OnInit {
  @Input() tabs: TabItem[] = [];
  @Input() id?: string;
  @Input() ariaLabel = "Tabs";

  private readonly fallbackInstanceId = inject(TabsIdSequence).next();

  active = model("");

  ngOnInit(): void {
    this.ensureValidActiveTab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["tabs"]) {
      this.ensureValidActiveTab();
    }
  }

  activate(index: number): void {
    const tab = this.tabs[index];

    if (!tab) {
      return;
    }

    this.active.set(tab.value);
  }

  @HostListener("keydown", ["$event"])
  protected onKeydown(event: KeyboardEvent): void {
    if (this.tabs.length === 0) {
      return;
    }

    const selectedIndex = this.selectedIndex();

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        this.activate((selectedIndex + 1) % this.tabs.length);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        this.activate((selectedIndex - 1 + this.tabs.length) % this.tabs.length);
        break;
      case "Home":
        event.preventDefault();
        this.activate(0);
        break;
      case "End":
        event.preventDefault();
        this.activate(this.tabs.length - 1);
        break;
    }
  }

  protected selectedIndex(): number {
    const activeIndex = this.tabs.findIndex((tab) => tab.value === this.active());
    return activeIndex >= 0 ? activeIndex : 0;
  }

  protected tabId(index: number): string {
    return `${this.tabsId()}-tab-${index}`;
  }

  private ensureValidActiveTab(): void {
    if (this.tabs.length === 0) {
      if (this.active() !== "") {
        this.active.set("");
      }

      return;
    }

    if (!this.tabs.some((tab) => tab.value === this.active())) {
      this.active.set(this.tabs[0].value);
    }
  }

  private tabsId(): string {
    return this.id?.trim() || `rui-tabs-${this.fallbackInstanceId}-${hashTabs(this.tabs)}`;
  }
}

function hashTabs(tabs: TabItem[]): string {
  let hash = 0;

  for (const tab of tabs) {
    const value = `${tab.label}\u0000${tab.value}\u0001`;

    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
  }

  return hash.toString(36);
}
