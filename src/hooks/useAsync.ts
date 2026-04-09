import { useCallback, useState } from "react";

export interface AsyncState<TData> {
  data: TData | null;
  error: Error | null;
  loading: boolean;
}

export interface UseAsyncResult<TData, TArgs extends unknown[]> extends AsyncState<TData> {
  execute: (...args: TArgs) => Promise<TData>;
  reset: () => void;
}

export function useAsync<TData, TArgs extends unknown[]>(
  asyncFn: (...args: TArgs) => Promise<TData>,
): UseAsyncResult<TData, TArgs> {
  const [state, setState] = useState<AsyncState<TData>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(
    async (...args: TArgs) => {
      setState((current) => ({ ...current, loading: true, error: null }));

      try {
        const result = await asyncFn(...args);
        setState({ data: result, error: null, loading: false });
        return result;
      } catch (error) {
        const normalizedError =
          error instanceof Error ? error : new Error("Unexpected async error");
        setState({ data: null, error: normalizedError, loading: false });
        throw normalizedError;
      }
    },
    [asyncFn],
  );

  const reset = useCallback(() => {
    setState({ data: null, error: null, loading: false });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
