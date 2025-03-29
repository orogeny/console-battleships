type Failure<E> = { data: null; error: E };
type Success<T> = { data: T; error: null };
type Result<T, E = Error> = Success<T> | Failure<E>;

function parseError(
  error: Error | string | unknown,
  msg: string = "Error encountered",
) {
  if (error instanceof Error) return error;
  if (typeof error === "string") return new Error(error);
  return new Error(msg);
}

export { parseError };
export type { Failure, Success, Result };
