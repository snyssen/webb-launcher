import type { ExpirableCacheEntry } from "../models/ExpirableCacheEntry";

export abstract class ExpirableCache {
  public static store<T>(key: string, object: T, expiresIn: number): void {
    this.storeWithExplicitExpiration(key, object, Date.now() + expiresIn);
  }

  public static storeWithExplicitExpiration<T>(key: string, object: T, expiresAt: number): void {
    const cacheEntry = {
      value: object,
      expirationDate: expiresAt
    } as ExpirableCacheEntry<T>

    localStorage.setItem(key, JSON.stringify(cacheEntry));
  }

  public static get<T>(key: string): T | null {
    const cacheEntry = this.getUnchecked<T>(key);
    if (!cacheEntry || cacheEntry.expirationDate < Date.now())
      return null;
    return cacheEntry.value;
  }

  public static getUnchecked<T>(key: string): ExpirableCacheEntry<T> | null {
    return JSON.parse(localStorage.getItem(key) ?? '{}') as ExpirableCacheEntry<T>;
  }
}
