import { ValidationError } from 'yup';
import { IMG_MAX_SIZE_BYTES, VALID_EXTENSIONS } from './constants';
import { schema } from './schema';
import type { FormValues, ReturnedResult } from './types';

export const isValidType = (files: unknown) => {
  if (!(files instanceof FileList)) {
    return false;
  }

  return Array.from(files).every((file) =>
    VALID_EXTENSIONS.includes(file.type)
  );
};

export const isValidSize = (files: unknown) => {
  if (!(files instanceof FileList)) {
    return false;
  }

  return Array.from(files).every((file) => file.size <= IMG_MAX_SIZE_BYTES);
};

export const validate = async (data: FormValues): Promise<ReturnedResult> => {
  try {
    await schema.validate(data, { abortEarly: false });
    return { result: true, errors: {} };
  } catch (error) {
    console.error(error);
    if (error instanceof ValidationError) {
      const errors = error.inner.reduce((acc, err) => {
        const error = { [err.path || 'nopath']: err.message };
        return { ...acc, ...error };
      }, {});
      return { result: false, errors: { ...errors } };
    } else {
      return { result: false, errors: {} };
    }
  }
};

export const parseDataToFormValues = (data: Record<string, unknown>) => {
  return {
    name: data.name,
    age: Number(data.age),
    email: data.email,
    password: data.password,
    secondPassword: data.secondPassword,
    gender: data.gender,
    country: data.country,
    terms: data.terms && true,
    image: data.image,
  } as FormValues;
};

export const getFileInBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;

      if (typeof result === 'string') {
        resolve(result);
      }
    };

    reader.onerror = (error) => reject(error);
  });
};

export const transferToFileList = (data: File) => {
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(data);
  return dataTransfer.files;
};
