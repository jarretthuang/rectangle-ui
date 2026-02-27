import { Component } from "@angular/core";
import { PaginationComponent } from "./pagination.component";
@Component({selector:"rui-pagination-demo",template:`<rui-pagination [page]="page" [totalPages]="6" (pageChange)="page=$event"></rui-pagination>`,imports:[PaginationComponent]})
export class PaginationDemoComponent{page=2;}
