import { STORAGE_NAME } from './constants';

export class LocalStorage {
  public setItem(value: string) {
    localStorage.setItem(STORAGE_NAME, value.trim());
  }

  public getItem() {
    return localStorage.getItem(STORAGE_NAME);
  }
}

export const storage = new LocalStorage();
