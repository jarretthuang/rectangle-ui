import { Routes } from "@angular/router";
import { PageComponent } from "../app.components/page/page.component";
import { allComponentPages } from "../page.metadata";

export const routes: Routes = [
  {
    path: "",
    children: allComponentPages.map((page) => {
      return {
        path: page.id,
        component: PageComponent,
        data: {
          componentId: page.id,
        },
        children: [
          {
            path: "",
            component: page.componentRef,
          },
        ],
      };
    }),
  },
];
