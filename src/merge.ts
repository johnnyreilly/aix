import DeferredIterable from "./deferredIterable";
import toCallbacks from "./toCallbacks";

/**
 * Merges iterables
 *
 * @param sources the iterables to merge
 */
export function merge<T>(...sources: AsyncIterable<T>[]) {
  const deferredIterable = new DeferredIterable<T>();
  sources.map(source => {
    return toCallbacks(
      source,
      deferredIterable.callback.bind(deferredIterable)
    );
  });
  return deferredIterable.iterator;
}

export default merge;
