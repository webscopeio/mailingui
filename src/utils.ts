/**
 * A utility for constructing `className` strings conditionally.
 * @param args - Any number of arguments, each of which can be `undefined`, `null`, `string` or `boolean`.
 * Any `falsey` values are discarded. Standalone `boolean` values are discarded as well.
 * @returns The `className` string.
 *
 * @example
 * ```ts
 * const hasError = true
 * const isEnabled = true
 * const isTitle = true
 *
 * clsx("base", undefined, null, "",
 *   hasError && "bg-red",
 *   isEnabled || "pointer-events-none",
 *   isTitle ? "font-semibold" : "font-normal"
 * )
 * // Results in:
 * "base more classes bg-red font-semibold"
 * ```
 */
export const clsx = (
  ...args: Array<undefined | null | string | boolean>
): string =>
  args
    .filter(
      (x): x is string =>
        x !== undefined && x !== null && x !== "" && typeof x !== "boolean"
    )
    .join(" ");
