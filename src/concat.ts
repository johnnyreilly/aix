/**
 * Concatenates two iterables
 */
export function concat<T>(first: AsyncIterable<T>) {
  return async function* inner(second: AsyncIterable<T>) {
    for await (const item of first) {
      yield item;
    }
    for await (const item of second) {
      yield item;
    }
  };
}

export default concat;