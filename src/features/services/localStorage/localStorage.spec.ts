import { beforeEach, describe, expect, it } from 'vitest';
import {
  getFromLocalStorage,
  isKeyExistInLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
} from './localStorage';

describe('localStorage', () => {
  const key = 'test';

  beforeEach(() => {
    removeFromLocalStorage(key)
  })
  it('should be null at the beginning', () => {
    expect(getFromLocalStorage(key)).toBe(null);
  });
  it('should not exist at the beginning', () => {
    expect(isKeyExistInLocalStorage(key)).toBe(null);
  });
  it('should add to local storage', () => {
    setToLocalStorage(key, 'test');
    expect(getFromLocalStorage(key)).toBe('test');
  });
  it('should be removable', () => {
    removeFromLocalStorage(key);
    expect(getFromLocalStorage(key)).toBe(null);
  });
});
