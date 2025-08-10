import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { DEFAULT_ERROR, ERROR, ERROR_STATUS, STATUS_CODE } from './constants';

export const buildErrorMessage = (
  error: FetchBaseQueryError | SerializedError
) => {
  if ('status' in error) {
    if (typeof error.status === 'string')
      if (ERROR_STATUS.includes(error.status)) return error.error;

    if (typeof error.status === 'number') {
      const status = error.status;

      if (status >= 500 && status < 600) {
        return ERROR.SERVER_ERROR;
      } else if (status === STATUS_CODE.NOT_FOUND) {
        return ERROR.NOT_FOUND;
      }
    }
  }

  return DEFAULT_ERROR;
};
