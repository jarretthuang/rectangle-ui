import { Routes } from "@angular/router";
import { PageComponent } from "../app.components/page/page.component";
import { Page } from "../server/page";
import { mainPages } from "../server/pages";

export const routes: Routes = [
  ...mainPages.map((page: Page) => {
    return {
      path: page.id,
      component: PageComponent,
      data: {
        componentId: page.id,
      },
      children: page.componentRef
        ? [
            {
              path: "",
              component: page.componentRef,
            },
          ]
        : [],
    };
  }),
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/read-me",
  },
];
