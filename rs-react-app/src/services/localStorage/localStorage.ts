export class LocalStorage {
  private storageName: string = 'abeilleee_searchTerm';

  public setItem(value: string) {
    localStorage.setItem(this.storageName, value.trim());
  }

  public getItem() {
    return localStorage.getItem(this.storageName);
  }
}

export const storage = new LocalStorage();
