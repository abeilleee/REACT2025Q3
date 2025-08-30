import {
  DEFAULT_ERROR,
  mapCo2DataToCountryData,
  STATUS,
  type Co2Data,
  type ReturnedResult,
} from '@/shared/lib';

const fetchData = async () => {
  const response = await fetch('src/shared/lib/data.json');
  const data = (await response.json()) as Co2Data;

  return mapCo2DataToCountryData(data);
};

const getData = () => {
  let returnedResult: ReturnedResult = {
    status: STATUS.PENDING,
    promise: fetchData().then((res) => {
      ((returnedResult = {
        status: STATUS.SUCCESS,
        result: res,
      }),
        (err: unknown) => {
          const errMsg = err instanceof Error ? err.message : DEFAULT_ERROR;
          returnedResult = {
            status: STATUS.ERROR,
            error: errMsg,
          };
        });
    }),
  };

  return {
    read() {
      if (returnedResult.status === STATUS.PENDING) {
        throw returnedResult.promise;
      } else if (returnedResult.status === STATUS.ERROR) {
        throw new Error(returnedResult.error);
      }
      return returnedResult.result;
    },
  };
};

export const getDataResult = getData();
