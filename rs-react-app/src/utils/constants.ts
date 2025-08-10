import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const ZERO = 0;
export const ONE = 1;
export const TWO = 2;
export const DEFAULT_ERROR = 'An unexpected error has occured';

export const enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

// pagination
export const LIMIT = 12;
export const INITIAL_PAGE = 1;
export const DOTS = '...';

// LS
export const STORAGE_PREFIX = 'abeilleee';
export const enum STORAGE_KEY {
  SEARCH_TERM = 'searchTerm',
  THEME = 'theme',
}

// API
export const BASE_URL = 'https://pokeapi.co/api/v2';
export const BASE_ENDPOINT = 'pokemon';
export const STATUS_CODE = {
  NOT_FOUND: 404,
};
export const CUSTOM_ERROR: FetchBaseQueryError = {
  status: 'CUSTOM_ERROR',
  error: 'No results found',
};
export const enum ERROR {
  SERVER_ERROR = 'Server error',
  NOT_FOUND = 'Not found',
}
