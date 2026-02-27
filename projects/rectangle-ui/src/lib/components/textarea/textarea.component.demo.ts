import { Component } from "@angular/core";
import { TextareaComponent } from "./textarea.component";

@Component({
  selector: "rui-textarea-demo",
  template: `<div class="w-full max-w-md"><rui-textarea placeholder="Share your thoughts" [(value)]="note"></rui-textarea><p class="mt-2 text-sm text-primary-700 dark:text-primary-300">{{ note }}</p></div>`,
  imports: [TextareaComponent],
})
export class TextareaDemoComponent { note = ""; }
