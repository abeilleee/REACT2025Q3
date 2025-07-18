import { mockSetItem } from '@/__mocks__/mocksFunctions';
import { storage } from './localStorage';

describe('Local storage test', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should set an item to LS', () => {
    const testValue = 'test';
    storage.setItem(testValue);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(testValue);
  });

  test('should get an item from LS', () => {
    const testValue = 'test value';
    storage.setItem(testValue);

    const returnedValue = storage.getItem();

    expect(returnedValue).toBe(testValue);
  });

  test('should set item in localStorage with trimmed value', () => {
    const testValue = '   test value   ';
    storage.setItem(testValue);

    expect(storage.getItem()).toBe('test value');
  });
});
