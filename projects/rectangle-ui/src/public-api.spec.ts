import * as publicApi from "./public-api";

describe("public-api exports", () => {
  it('should export all and only "prod" components', () => {
    const exportedComponents = Object.keys(publicApi)
      .filter((name) => name.endsWith("Component"))
      .sort();

    expect(exportedComponents).toEqual([
      "AlertComponent",
      "BadgeComponent",
      "BreadcrumbComponent",
      "ButtonComponent",
      "ComboboxComponent",
      "DropdownComponent",
      "DropdownItemComponent",
      "IconComponent",
      "InputComponent",
      "PaginationComponent",
      "ProgressComponent",
      "SeparatorComponent",
      "TableComponent",
      "TextareaComponent",
      "TooltipComponent",
    ]);
  });
});
