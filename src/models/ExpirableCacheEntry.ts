export interface ExpirableCacheEntry<T> {
  value: T;
  expirationDate: number;
}
