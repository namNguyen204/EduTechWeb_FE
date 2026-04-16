function toDate(input: Date | string | number): Date {
  return input instanceof Date ? input : new Date(input);
}

export function formatDate(
  input: Date | string | number,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = toDate(input);
  return new Intl.DateTimeFormat(locale, options).format(date);
}

export function formatDateTime(
  input: Date | string | number,
  locale = "en-US",
): string {
  return formatDate(input, locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function isToday(input: Date | string | number): boolean {
  const date = toDate(input);
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}
