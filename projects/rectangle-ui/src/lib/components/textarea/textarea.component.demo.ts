import { Component } from "@angular/core";
import { TextareaComponent } from "./textarea.component";

@Component({
  selector: "rui-textarea-demo",
  template: `
    <div class="w-full max-w-md">
      <rui-textarea placeholder="Share your thoughts" [(value)]="note"></rui-textarea>
    </div>
  `,
  imports: [TextareaComponent],
})
export class TextareaDemoComponent {
  note = "";
}
