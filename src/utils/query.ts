export type QueryPrimitive = string | number | boolean | null | undefined | Date;

export type QueryRecord = Record<string, QueryPrimitive | QueryPrimitive[]>;

export function toQueryString(params?: QueryRecord): string {
  if (!params) {
    return "";
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== null && item !== undefined) {
          searchParams.append(key, item instanceof Date ? item.toISOString() : String(item));
        }
      });
      return;
    }

    searchParams.append(key, value instanceof Date ? value.toISOString() : String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}
