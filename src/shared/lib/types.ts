import type { STATUS } from './constants';

export interface Data {
  year: number | string;
  population?: number | string;
  cement_co2: number | string;
  cement_co2_per_capita?: number | string;
  cumulative_cement_co2: number | string;
  methane?: string;
  oil_co2?: string;
  temperature_change_from_co2?: string;
}

export interface Co2Data {
  [country: string]: {
    iso_code: string;
    data: Data[];
  };
}

export interface FlatCo2Data {
  country: string;
  iso_code: string;
  data: Data[];
}

export interface CountryData extends Data {
  countryName: string;
  iso_code: string;
}

type PendingResult = {
  status: STATUS.PENDING;
  promise: Promise<void>;
};

type SuccessResult = {
  status: STATUS.SUCCESS;
  result: Co2Data;
};

type ErrorResult = {
  status: STATUS.ERROR;
  error: string;
};

export type ReturnedResult = SuccessResult | PendingResult | ErrorResult;
