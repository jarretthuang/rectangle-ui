import { BadgeDemoComponent } from "@/components/badge/badge.component.demo";
import { ButtonDemoComponent } from "@/components/button/button.component.demo";
import { DropdownDemoComponent } from "@/components/dropdown/dropdown.component.demo";
import { ComboboxDemoComponent } from "@/components/combobox/combobox.component.demo";
import { ComponentPage, Page } from "./page";
import { IconDemoComponent } from "@/components/icon/icon.component.demo";
import { InputDemoComponent } from "@/components/input/input.component.demo";
import { ProgressDemoComponent } from "@/components/progress/progress.component.demo";
import { SkeletonDemoComponent } from "@/components/skeleton/skeleton.component.demo";
import { SeparatorDemoComponent } from "@/components/separator/separator.component.demo";
import { LabelDemoComponent } from "@/components/label/label.component.demo";
import { TextareaDemoComponent } from "@/components/textarea/textarea.component.demo";

export const allComponentPages: ComponentPage[] = [
  new ComponentPage("badge", "Badge", BadgeDemoComponent),
  new ComponentPage("button", "Button", ButtonDemoComponent),
  new ComponentPage("combobox", "Combobox", ComboboxDemoComponent),
  new ComponentPage("dropdown", "Dropdown", DropdownDemoComponent),
  new ComponentPage("icon", "Icon", IconDemoComponent),
  new ComponentPage("input", "Input", InputDemoComponent),
  new ComponentPage("progress", "Progress", ProgressDemoComponent),
  new ComponentPage("skeleton", "Skeleton", SkeletonDemoComponent),
  new ComponentPage("separator", "Separator", SeparatorDemoComponent),
  new ComponentPage("label", "Label", LabelDemoComponent),
  new ComponentPage("textarea", "Textarea", TextareaDemoComponent),
];

export const readmePage: Page = {
  id: "read-me",
  name: "README",
  mdUrl: "/README.md",
};

export const allPages: Page[] = [...allComponentPages, readmePage].sort((a, b) => a.name.localeCompare(b.name));
