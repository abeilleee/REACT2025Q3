import { NOT_AVAILABLE } from './constants';
import type { Co2Data, CountryData, FlatCo2Data } from './types';

export const lastYear = 2023;

export const mapCo2DataToCountryData = (data: Co2Data, year = lastYear) => {
  const result = [];

  for (const country in data) {
    const targetData = data[country].data.find(
      (country) => country.year === year
    );
    const mappedData: CountryData = {
      countryName: country,
      iso_code: data[country].iso_code ?? NOT_AVAILABLE,
      year: targetData?.year ?? NOT_AVAILABLE,
      population: targetData?.population ?? NOT_AVAILABLE,
      cement_co2: targetData?.cement_co2 ?? NOT_AVAILABLE,
      cement_co2_per_capita: targetData?.cement_co2_per_capita ?? NOT_AVAILABLE,
      cumulative_cement_co2: targetData?.cumulative_cement_co2 ?? NOT_AVAILABLE,
      methane: targetData?.methane ?? NOT_AVAILABLE,
      oil_co2: targetData?.oil_co2 ?? NOT_AVAILABLE,
      temperature_change_from_co2:
        targetData?.temperature_change_from_co2 ?? NOT_AVAILABLE,
    };

    result.push(mappedData);
  }

  return result;
};

export const mapCo2DataToFlatCo2Data = (data: Co2Data) => {
  const flatData: FlatCo2Data[] = Object.keys(data).map((country) => ({
    country: country,
    iso_code: data[country].iso_code,
    data: data[country].data,
  }));

  return flatData;
};

export const getAllYears = (data: FlatCo2Data[]) => {
  const result: number[] = [];

  data.forEach((country) => {
    const countryData = country.data;
    const years = new Set(countryData.flatMap((item) => Number(item.year)));
    result.push(...Array.from(years));
  });

  return result;
};
