import type { CountryData } from '@/shared/lib';
import { TABLE_HEADERS_DEFAULT, TABLE_HEADERS_OPTIONAL } from './constants';

export const getTableDataValue = (country: CountryData, header: string) => {
  let value: string | number | undefined = undefined;

  switch (header) {
    case TABLE_HEADERS_DEFAULT.COUNTRY:
      value = country.countryName;
      break;
    case TABLE_HEADERS_DEFAULT.YEAR:
      value = country.year;
      break;
    case TABLE_HEADERS_DEFAULT.POPULATION:
      value = country.population;
      break;
    case TABLE_HEADERS_DEFAULT.ISO_CODE:
      value = country.iso_code;
      break;
    case TABLE_HEADERS_DEFAULT.CO2:
      value = country.cement_co2;
      break;
    case TABLE_HEADERS_DEFAULT.CO2_PER_CAPITA:
      value = country.cement_co2_per_capita;
      break;
    case TABLE_HEADERS_OPTIONAL.METHANE:
      value = country.methane;
      break;
    case TABLE_HEADERS_OPTIONAL.OIL_CO2:
      value = country.oil_co2;
      break;
    case TABLE_HEADERS_OPTIONAL.TEMPERATURE:
      value = country.temperature_change_from_co2;
      break;
  }

  return value;
};
