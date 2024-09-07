export function tw(strings: TemplateStringsArray, ...values: string[]): string {
  return String.raw({ raw: strings }, ...values);
}
