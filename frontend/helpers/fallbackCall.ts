export const fallbackCall = async <T>(
  fn: () => Promise<T>,
  errorCalback: (error: string ) => unknown
): Promise<T | undefined> => {
  try {
    return await fn();
  } catch (e) {
    console.error(e);
    errorCalback((e as Error).message);
  }
};
