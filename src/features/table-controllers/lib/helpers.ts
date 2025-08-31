import { SORT_ORDER, SORT_VARIANTS } from '@/shared/lib';

export const isSortVariant = (value: string): value is SORT_VARIANTS => {
  return Object.values(SORT_VARIANTS).includes(value as SORT_VARIANTS);
};

export const isSortOrder = (value: string): value is SORT_ORDER => {
  return Object.values(SORT_ORDER).includes(value as SORT_ORDER);
};
