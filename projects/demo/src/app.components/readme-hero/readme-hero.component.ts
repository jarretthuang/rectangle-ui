import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-readme-hero",
  template: `
    <div
      class="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-primary-300/80 bg-gradient-to-br from-primary-100 to-primary-200 px-6 py-8 shadow-sm dark:border-primary-800/80 dark:from-primary-900 dark:to-primary-1000"
      (pointermove)="onPointerMove($event)"
      (pointerleave)="onPointerLeave()">
      <div class="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-300/60 blur-2xl dark:bg-primary-700/40"></div>
      <div class="pointer-events-none absolute -bottom-14 -left-12 h-32 w-32 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/70"></div>

      <div class="relative z-10 flex flex-col items-center gap-4 text-center">
        <button
          type="button"
          class="cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
          (click)="onLogoTap()"
          (pointerdown)="onLogoTap()"
          aria-label="Interactive Rectangle UI logo">
          <svg
            class="h-40 w-40 transform-gpu transition-transform duration-200 ease-out"
            viewBox="40 40 120 120"
            xmlns="http://www.w3.org/2000/svg"
            [style.transform]="logoTransform()"
            aria-label="Rectangle UI interactive logo">
            <rect
              class="readme-logo-layer readme-logo-layer-1"
              x="55"
              y="80"
              width="70"
              height="60"
              rx="10"
              ry="10" />
            <rect
              class="readme-logo-layer readme-logo-layer-2"
              x="65"
              y="70"
              width="70"
              height="60"
              rx="10"
              ry="10" />
            <rect
              class="readme-logo-layer readme-logo-layer-3"
              x="75"
              y="60"
              width="70"
              height="60"
              rx="10"
              ry="10" />
          </svg>
        </button>

        <p class="text-sm font-semibold tracking-wide text-primary-800/80 dark:text-primary-200/80">
          Touch or click the logo to nudge it.
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadmeHeroComponent {
  private readonly rotateX = signal(0);
  private readonly rotateY = signal(0);
  private readonly rotateZ = signal(0);

  protected readonly logoTransform = computed(
    () =>
      `perspective(700px) rotateX(${this.rotateX()}deg) rotateY(${this.rotateY()}deg) rotateZ(${this.rotateZ()}deg)`
  );

  onPointerMove(event: PointerEvent) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    this.rotateX.set(offsetY * -12);
    this.rotateY.set(offsetX * 12);
  }

  onPointerLeave() {
    this.rotateX.set(0);
    this.rotateY.set(0);
    this.rotateZ.set(0);
  }

  onLogoTap() {
    const next = this.rotateZ() === 0 ? 6 : 0;
    this.rotateZ.set(next);
  }
}
