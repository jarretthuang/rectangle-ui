import { BadgeDemoComponent } from "@/components/badge/badge.component.demo";
import { ButtonDemoComponent } from "@/components/button/button.component.demo";
import { DropdownDemoComponent } from "@/components/dropdown/dropdown.component.demo";
import { ComboboxDemoComponent } from "@/components/combobox/combobox.component.demo";
import { ComponentPage, Page } from "./page";
import { IconDemoComponent } from "@/components/icon/icon.component.demo";
import { InputDemoComponent } from "@/components/input/input.component.demo";
import { TableDemoComponent } from "@/components/table/table.component.demo";
import { PaginationDemoComponent } from "@/components/pagination/pagination.component.demo";
import { BreadcrumbDemoComponent } from "@/components/breadcrumb/breadcrumb.component.demo";
import { TabsDemoComponent } from "@/components/tabs/tabs.component.demo";
import { AccordionDemoComponent } from "@/components/accordion/accordion.component.demo";
import { DialogDemoComponent } from "@/components/dialog/dialog.component.demo";
import { PopoverDemoComponent } from "@/components/popover/popover.component.demo";
import { TooltipDemoComponent } from "@/components/tooltip/tooltip.component.demo";
import { AvatarDemoComponent } from "@/components/avatar/avatar.component.demo";
import { AlertDemoComponent } from "@/components/alert/alert.component.demo";
import { CardDemoComponent } from "@/components/card/card.component.demo";
import { RadioGroupDemoComponent } from "@/components/radio-group/radio-group.component.demo";
import { SwitchDemoComponent } from "@/components/switch/switch.component.demo";
import { CheckboxDemoComponent } from "@/components/checkbox/checkbox.component.demo";
import { ProgressDemoComponent } from "@/components/progress/progress.component.demo";
import { SkeletonDemoComponent } from "@/components/skeleton/skeleton.component.demo";
import { SeparatorDemoComponent } from "@/components/separator/separator.component.demo";
import { LabelDemoComponent } from "@/components/label/label.component.demo";
import { TextareaDemoComponent } from "@/components/textarea/textarea.component.demo";

export const allComponentPages: ComponentPage[] = [
  new ComponentPage("badge", "Badge", BadgeDemoComponent, "prod"),
  new ComponentPage("button", "Button", ButtonDemoComponent, "prod"),
  new ComponentPage("combobox", "Combobox", ComboboxDemoComponent, "prod"),
  new ComponentPage("dropdown", "Dropdown", DropdownDemoComponent, "prod"),
  new ComponentPage("icon", "Icon", IconDemoComponent, "prod"),
  new ComponentPage("input", "Input", InputDemoComponent, "prod"),
  new ComponentPage("table", "Table", TableDemoComponent),
  new ComponentPage("pagination", "Pagination", PaginationDemoComponent),
  new ComponentPage("breadcrumb", "Breadcrumb", BreadcrumbDemoComponent, "prod"),
  new ComponentPage("tabs", "Tabs", TabsDemoComponent, "prod"),
  new ComponentPage("accordion", "Accordion", AccordionDemoComponent),
  new ComponentPage("dialog", "Dialog", DialogDemoComponent),
  new ComponentPage("popover", "Popover", PopoverDemoComponent),
  new ComponentPage("tooltip", "Tooltip", TooltipDemoComponent, "prod"),
  new ComponentPage("avatar", "Avatar", AvatarDemoComponent),
  new ComponentPage("alert", "Alert", AlertDemoComponent),
  new ComponentPage("card", "Card", CardDemoComponent),
  new ComponentPage("radio-group", "RadioGroup", RadioGroupDemoComponent),
  new ComponentPage("switch", "Switch", SwitchDemoComponent),
  new ComponentPage("checkbox", "Checkbox", CheckboxDemoComponent),
  new ComponentPage("progress", "Progress", ProgressDemoComponent),
  new ComponentPage("skeleton", "Skeleton", SkeletonDemoComponent),
  new ComponentPage("separator", "Separator", SeparatorDemoComponent),
  new ComponentPage("label", "Label", LabelDemoComponent),
  new ComponentPage("textarea", "Textarea", TextareaDemoComponent, "prod"),
];

export const prodComponentPages: ComponentPage[] = allComponentPages.filter(
  (component) => component.version === "prod"
);

export const readmePage: Page = {
  id: "read-me",
  name: "README",
  mdUrl: "/README.md",
};

export const mainPages: Page[] = [...prodComponentPages, readmePage].sort((a, b) =>
  a.name.localeCompare(b.name)
);
