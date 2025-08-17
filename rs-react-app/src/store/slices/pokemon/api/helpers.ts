import { CUSTOM_ERROR } from '@/utils/constants';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const normalizeError = (
  error: FetchBaseQueryError | SerializedError
) => {
  if (typeof error === 'object' && error !== null) {
    if ('data' in error && 'status' in error) {
      return {
        status: error.status,
        error: error.data,
      } as FetchBaseQueryError;
    }
  }

  return CUSTOM_ERROR;
};
