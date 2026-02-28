import { Type } from "@angular/core";

export type ComponentVersion = "private" | "prod";

export type Page = {
  id: string;
  name: string;
  mdUrl?: string;
  componentRef?: Type<unknown>;
  sourceCodeUrl?: string;
  usageCodeUrl?: string;
  workInProgress?: boolean;
};

export class ComponentPage implements Page {
  constructor(
    public id: string,
    public name: string,
    public componentRef: Type<unknown>,
    public version: ComponentVersion = "private",
    public workInProgress: boolean = false
  ) {}

  get mdUrl(): string {
    return `/pages/${this.id}.component.md`;
  }

  get sourceCodeUrl(): string {
    return `/components/${this.id}/${this.id}.component.ts`;
  }

  get usageCodeUrl(): string {
    return `/components/${this.id}/${this.id}.component.demo.ts`;
  }
}
