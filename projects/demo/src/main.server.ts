import { ApplicationRef } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { config } from "./app/app.config.server";

const bootstrap = ((context?: unknown) =>
  (bootstrapApplication as (...args: unknown[]) => Promise<ApplicationRef>)(
    AppComponent,
    config,
    context
  )) as () => Promise<ApplicationRef>;

export default bootstrap;
