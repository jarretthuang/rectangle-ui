import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  computed,
  model,
  signal,
} from "@angular/core";
import { NgClass } from "@angular/common";
import { matArrowDropDown, matArrowDropUp, matCheck } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";
import { ComboboxOption } from "@/components/combobox/combobox.model";

const COMBOBOX_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 focus-within:bg-primary-200 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:focus-within:bg-primary-900/50";
const COMBOBOX_TEXT = "text-sm font-semibold text-primary-900 placeholder:text-primary-700/70 dark:text-primary-100 dark:placeholder:text-primary-300/70";
const COMBOBOX_LAYOUT = "w-full rounded-xl px-3 py-2 outline-none";
const COMBOBOX_ANIMATION = "transition-colors duration-200 ease-in-out";

@Component({
  selector: "rui-combobox",
  imports: [NgClass, IconComponent],
  template: `
    <div class="relative w-full">
      <div [ngClass]="containerClasses">
        <input
          type="text"
          [placeholder]="placeholder"
          [value]="query()"
          [ngClass]="inputClasses"
          (focus)="open()"
          (input)="onInput($event)" />

        <button type="button" class="rounded-md p-1" (click)="toggleExpanded()" aria-label="Toggle options">
          <rui-icon [icon]="isExpanded() ? matArrowDropUp : matArrowDropDown"></rui-icon>
        </button>
      </div>

      @if (isExpanded()) {
        <ul class="absolute left-0 z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-xl border-[1px] border-primary-300 bg-primary-100 p-1 dark:border-primary-800 dark:bg-primary-900">
          @for (option of filteredOptions(); track option.value) {
            <li>
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-primary-200 dark:hover:bg-primary-800"
                (click)="select(option)">
                <span>{{ option.label }}</span>
                @if (selectedOption()?.value === option.value) {
                  <rui-icon [icon]="matCheck"></rui-icon>
                }
              </button>
            </li>
          } @empty {
            <li class="px-3 py-2 text-sm opacity-70">No options found</li>
          }
        </ul>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent {
  @Input() placeholder: string = "Search...";
  @Input() options: ComboboxOption[] = [];

  selectedOption = model<ComboboxOption | undefined>();

  protected readonly isExpanded = signal(false);
  protected readonly query = signal("");

  protected readonly containerClasses: string[] = [
    COMBOBOX_BACKGROUND,
    COMBOBOX_TEXT,
    COMBOBOX_LAYOUT,
    COMBOBOX_ANIMATION,
    "flex items-center gap-2",
  ];

  protected readonly inputClasses: string[] = ["w-full bg-transparent outline-none"];

  protected readonly filteredOptions = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.options;

    return this.options.filter((option) => option.label.toLowerCase().includes(q));
  });

  protected readonly matArrowDropUp = matArrowDropUp;
  protected readonly matArrowDropDown = matArrowDropDown;
  protected readonly matCheck = matCheck;

  constructor(private readonly elementRef: ElementRef) {}

  open() {
    this.isExpanded.set(true);
  }

  toggleExpanded() {
    this.isExpanded.update((expanded) => !expanded);
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
    this.isExpanded.set(true);
  }

  select(option: ComboboxOption) {
    this.selectedOption.set(option);
    this.query.set(option.label);
    this.isExpanded.set(false);
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isExpanded.set(false);
    }
  }
}
