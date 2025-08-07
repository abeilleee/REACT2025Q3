import { DEFAULT_ERROR } from './constants';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const buildErrorMessage = (
  error: SerializedError | FetchBaseQueryError
) => {
  if (typeof error === 'string') return error;
  if (
    'error' in error &&
    typeof error.error === 'object' &&
    error.error !== null
  ) {
    const { status, data } = error.error;
    return `${status} ${data}`;
  }
  return DEFAULT_ERROR;
};
