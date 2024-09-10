import { Type } from "@angular/core";

export type Page = {
  id: string;
  name: string;
  mdUrl?: string;
  componentRef?: Type<any>;
  sourceCodeUrl?: string;
  usageCodeUrl?: string;
};

export class ComponentPage implements Page {
  constructor(
    public id: string,
    public name: string,
    public componentRef: Type<any>
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
