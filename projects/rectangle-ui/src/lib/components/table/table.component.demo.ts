import { Component } from "@angular/core";
import { TableComponent } from "./table.component";
@Component({selector:"rui-table-demo",template:`<rui-table [columns]="columns" [rows]="rows"></rui-table>`,imports:[TableComponent]})
export class TableDemoComponent{columns=["Name","Role","Status"];rows=[["Avery","Admin","Active"],["Jordan","Editor","Pending"],["Taylor","Viewer","Active"]];}
