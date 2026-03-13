import * as publicApi from "./public-api";

describe("public-api exports", () => {
  it('should export all and only "prod" components', () => {
    const exportedComponents = Object.keys(publicApi)
      .filter((name) => name.endsWith("Component"))
      .sort();

    expect(exportedComponents).toEqual([
      "BadgeComponent",
      "ButtonComponent",
      "ComboboxComponent",
      "DropdownComponent",
      "DropdownItemComponent",
      "IconComponent",
      "InputComponent",
      "TextareaComponent",
      "TooltipComponent",
    ]);
  });
});
