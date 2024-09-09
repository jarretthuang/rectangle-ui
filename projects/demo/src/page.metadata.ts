import { Type } from "@angular/core";
import { BadgeDemoComponent } from "@/components/badge/badge.component.demo";

export type Page = {
  id: string;
  name: string;
  mdUrl?: string;
  componentRef?: Type<any>;
  sourceCodeUrl?: string;
  usageCodeUrl?: string;
};

export const allComponentPages: Page[] = [
  {
    id: "badge",
    name: "Badge",
    mdUrl: "/pages/badge.component.md",
    componentRef: BadgeDemoComponent,
    sourceCodeUrl: "/components/badge/badge.component.ts",
    usageCodeUrl: "/components/badge/badge.component.demo.ts",
  },
];

export const readmePage: Page = {
  id: "read-me",
  name: "README",
  mdUrl: "/README.md",
};

export const allPages: Page[] = [...allComponentPages, readmePage];
