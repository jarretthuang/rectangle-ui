import { Component } from "@angular/core";
import { AlertComponent } from "./alert.component";
@Component({selector:"rui-alert-demo",template:`<div class="space-y-2"><rui-alert>Informational alert</rui-alert><rui-alert variant="success">Saved successfully</rui-alert><rui-alert variant="warning">Check your settings</rui-alert><rui-alert variant="danger">Something went wrong</rui-alert></div>`,imports:[AlertComponent]})
export class AlertDemoComponent {}
