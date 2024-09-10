import { afterRender, Component, computed, HostBinding, input } from "@angular/core";
import { tw } from "@/utils/tailwind";
import { MarkdownComponent, provideMarkdown } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";
import { allPages } from "../../page.metadata";
import { ActivatedRoute, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-page",
  standalone: true,
  template: `
    <div>
      <h1 class="text-2xl font-bold">{{ component()?.name ?? "404 page not found" }}</h1>
      @if (component()?.mdUrl) {
        <markdown ngPreserveWhitespaces lineNumbers [src]="component()?.mdUrl"></markdown>
      }
    </div>

    @if (component()?.componentRef) {
      <div>
        <h2>Preview</h2>
        <div
          class="flex h-60 w-full items-center justify-center rounded-lg border-[1px] border-mono-300 bg-mono-200/50 dark:border-mono-900 dark:bg-mono-900/50">
          <router-outlet></router-outlet>
        </div>
      </div>
    }

    @if (component()?.usageCodeUrl) {
      <div>
        <h2>Usage</h2>
        <markdown ngPreserveWhitespaces lineNumbers [src]="component()?.usageCodeUrl"></markdown>
      </div>
    }

    @if (component()?.sourceCodeUrl) {
      <div>
        <h2>Source Code</h2>
        <markdown ngPreserveWhitespaces lineNumbers [src]="component()?.sourceCodeUrl"></markdown>
      </div>
    }
  `,
  providers: [provideMarkdown({ loader: HttpClient })],
  imports: [MarkdownComponent, RouterOutlet],
})
export class PageComponent {
  componentId = input<string>();
  component = computed(() => allPages.find((component) => component.id === this.componentId()));

  @HostBinding("class") classes = tw`flex w-full flex-col gap-8 px-4`;

  constructor(private route: ActivatedRoute) {
    afterRender(() => {
      this.componentId = this.route.snapshot.data["componentId"];
    });
  }
}
