import { BadgeDemoComponent } from "@/components/badge/badge.component.demo";
import { ButtonDemoComponent } from "@/components/button/button.component.demo";
import { DropdownDemoComponent } from "@/components/dropdown/dropdown.component.demo";
import { ComponentPage, Page } from "./page";
import { IconDemoComponent } from "@/components/icon/icon.component.demo";

export const allComponentPages: ComponentPage[] = [
  new ComponentPage("badge", "Badge", BadgeDemoComponent),
  new ComponentPage("button", "Button", ButtonDemoComponent),
  new ComponentPage("dropdown", "Dropdown", DropdownDemoComponent, true),
  new ComponentPage("icon", "Icon", IconDemoComponent),
];

export const readmePage: Page = {
  id: "read-me",
  name: "README",
  mdUrl: "/README.md",
};

export const allPages: Page[] = [...allComponentPages, readmePage].sort((a, b) => a.name.localeCompare(b.name));
