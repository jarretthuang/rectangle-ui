import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  computed,
  effect,
  model,
  signal,
} from "@angular/core";
import { NgClass } from "@angular/common";
import { matArrowDropDown, matArrowDropUp, matCheck, matClose } from "@ng-icons/material-icons/baseline";
import { IconComponent } from "@/components/icon/icon.component";
import { ComboboxOption } from "@/components/combobox/combobox.model";

const COMBOBOX_BACKGROUND =
  "border-[1px] border-primary-400 bg-primary-100 hover:bg-primary-200 focus-within:bg-primary-200 dark:border-primary-800 dark:bg-primary-900 dark:hover:bg-primary-900/50 dark:focus-within:bg-primary-900/50";
const COMBOBOX_TEXT = "text-sm font-semibold text-primary-900 placeholder:text-primary-700/70 dark:text-primary-100 dark:placeholder:text-primary-300/70";
const COMBOBOX_LAYOUT = "w-full rounded-xl px-3 py-2 pr-16 outline-none";
const COMBOBOX_ANIMATION = "transition-colors duration-200 ease-in-out";
const CONTROLS_LAYOUT = "pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1";
const ICON_BUTTON_LAYOUT =
  "pointer-events-auto rounded-md p-1 text-primary-700 hover:bg-primary-300/60 dark:text-primary-300 dark:hover:bg-primary-800";

@Component({
  selector: "rui-combobox",
  imports: [NgClass, IconComponent],
  template: `
    <div class="relative w-full">
      <input
        type="text"
        [placeholder]="placeholder"
        [value]="query()"
        [ngClass]="styleClasses"
        (focus)="open()"
        (input)="onInput($event)" />

      <div [ngClass]="controlsClasses">
        <button
          type="button"
          [ngClass]="iconButtonClasses"
          [class.invisible]="!query()"
          [class.pointer-events-none]="!query()"
          (click)="clear()"
          aria-label="Clear combobox input">
          <rui-icon [icon]="matClose"></rui-icon>
        </button>

        <button type="button" [ngClass]="iconButtonClasses" (click)="toggleExpanded()" aria-label="Toggle options">
          <rui-icon class="scale-110" [icon]="isExpanded() ? matArrowDropUp : matArrowDropDown"></rui-icon>
        </button>
      </div>

      @if (isExpanded()) {
        <ul class="absolute left-0 z-20 mt-1 max-h-60 w-full overflow-y-auto overflow-x-hidden rounded-lg border-[1px] border-primary-300 bg-primary-100 dark:border-primary-800 dark:bg-primary-900">
          @for (option of filteredOptions(); track option.value) {
            <li>
              <button
                type="button"
                class="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-semibold text-primary-900 transition-colors duration-200 ease-in-out hover:bg-primary-200 dark:text-primary-100 dark:hover:bg-primary-800"
                (click)="select(option)">
                <span>{{ option.label }}</span>
                @if (selectedOption()?.value === option.value) {
                  <rui-icon [icon]="matCheck"></rui-icon>
                }
              </button>
            </li>
          } @empty {
            <li class="px-4 py-2 text-sm font-semibold text-primary-700/70 dark:text-primary-300/70">No options found</li>
          }
        </ul>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent {
  @HostBinding("class") hostClasses = "block w-full";

  @Input() placeholder: string = "Search...";

  @Input()
  set options(value: ComboboxOption[]) {
    this.optionsSignal.set(value ?? []);
  }

  selectedOption = model<ComboboxOption | undefined>();

  protected readonly isExpanded = signal(false);
  protected readonly query = signal("");
  private readonly optionsSignal = signal<ComboboxOption[]>([]);

  protected readonly styleClasses: string[] = [
    COMBOBOX_BACKGROUND,
    COMBOBOX_TEXT,
    COMBOBOX_LAYOUT,
    COMBOBOX_ANIMATION,
  ];
  protected readonly controlsClasses: string[] = [CONTROLS_LAYOUT];
  protected readonly iconButtonClasses: string[] = [ICON_BUTTON_LAYOUT];

  protected readonly filteredOptions = computed(() => {
    const options = this.optionsSignal();
    const q = this.query().toLowerCase().trim();
    if (!q) return options;

    return options.filter((option) => option.label.toLowerCase().includes(q));
  });

  protected readonly matArrowDropUp = matArrowDropUp;
  protected readonly matArrowDropDown = matArrowDropDown;
  protected readonly matCheck = matCheck;
  protected readonly matClose = matClose;

  constructor(private readonly elementRef: ElementRef) {
    effect(() => {
      this.query.set(this.selectedOption()?.label ?? "");
    });
  }

  open() {
    this.isExpanded.set(true);
  }

  toggleExpanded() {
    this.isExpanded.update((expanded) => !expanded);
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const nextQuery = target.value;

    this.query.set(nextQuery);
    this.isExpanded.set(true);

    if (this.selectedOption() && this.selectedOption()?.label !== nextQuery) {
      this.selectedOption.set(undefined);
    }
  }

  select(option: ComboboxOption) {
    this.selectedOption.set(option);
    this.query.set(option.label);
    this.isExpanded.set(false);
  }

  clear() {
    this.query.set("");
    this.selectedOption.set(undefined);
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
