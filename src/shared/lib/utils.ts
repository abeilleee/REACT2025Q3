import { NOT_AVAILABLE } from './constants';
import type { Co2Data, CountryData } from './types';

export const mapCo2DataToCountryData = (data: Co2Data) => {
  const result = [];

  for (const country in data) {
    const lastData = data[country].data.at(-1);
    const mappedData: CountryData = {
      countryName: country,
      iso_code: data[country].iso_code ?? NOT_AVAILABLE,
      year: lastData?.year ?? NOT_AVAILABLE,
      population: lastData?.population ?? NOT_AVAILABLE,
      cement_co2: lastData?.cement_co2 ?? NOT_AVAILABLE,
      cement_co2_per_capita: lastData?.cement_co2_per_capita ?? NOT_AVAILABLE,
      cumulative_cement_co2: lastData?.cumulative_cement_co2 ?? NOT_AVAILABLE,
      methane: lastData?.methane ?? NOT_AVAILABLE,
      oil_co2: lastData?.oil_co2 ?? NOT_AVAILABLE,
      temperature_change_from_co2:
        lastData?.temperature_change_from_co2 ?? NOT_AVAILABLE,
    };

    result.push(mappedData);
  }

  return result;
};
