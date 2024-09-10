import { afterRender, Component, computed, HostBinding, input } from "@angular/core";
import { tw } from "@/utils/tailwind";
import { MarkdownComponent, provideMarkdown } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { allPages } from "../../server/pages";
import { IconComponent } from "@/components/icon/icon.component";
import { matConstruction } from "@ng-icons/material-icons/baseline";

@Component({
  selector: "app-page",
  standalone: true,
  template: `
    <div>
      <div class="flex items-center gap-2">
        <h1>{{ component()?.name ?? "404 page not found" }}</h1>
        @if (component()?.workInProgress) {
          <rui-icon [icon]="matConstruction" [tooltip]="'WIP'"></rui-icon>
        }
      </div>
      @if (component()?.mdUrl) {
        <markdown lineNumbers [src]="component()?.mdUrl"></markdown>
      }
    </div>

    @if (component()?.componentRef) {
      <div>
        <h2>Preview</h2>
        <div
          class="flex h-60 w-full items-center justify-center rounded-lg border-[1px] border-mono-300 shadow-sm dark:border-mono-900">
          <router-outlet></router-outlet>
        </div>
      </div>
    }

    @if (component()?.usageCodeUrl) {
      <div>
        <h2>Usage</h2>
        <markdown lineNumbers [src]="component()?.usageCodeUrl"></markdown>
      </div>
    }

    @if (component()?.sourceCodeUrl) {
      <div>
        <h2>Source Code</h2>
        <markdown lineNumbers [src]="component()?.sourceCodeUrl"></markdown>
      </div>
    }
  `,
  providers: [provideMarkdown({ loader: HttpClient })],
  imports: [MarkdownComponent, RouterOutlet, IconComponent],
})
export class PageComponent {
  componentId = input<string>();
  component = computed(() => allPages.find((component) => component.id === this.componentId()));

  @HostBinding("class") hostClass: string = tw`flex w-full flex-col gap-8 px-4`;

  constructor(private route: ActivatedRoute) {
    afterRender(() => {
      this.componentId = this.route.snapshot.data["componentId"];
    });
  }

  protected readonly matConstruction = matConstruction;
}
