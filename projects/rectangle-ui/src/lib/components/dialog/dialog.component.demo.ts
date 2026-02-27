import { Component } from "@angular/core";
import { DialogComponent } from "./dialog.component";
@Component({selector:"rui-dialog-demo",template:`<rui-dialog title="Delete project" triggerLabel="Open dialog"><p class="text-sm">Are you sure you want to delete this project?</p></rui-dialog>`,imports:[DialogComponent]})
export class DialogDemoComponent{}
