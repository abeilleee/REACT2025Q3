export interface FormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  secondPassword: string;
  gender: string;
  country: string;
  terms: true;
  image: FileList;
}

export type ReturnedErrors = Partial<Record<keyof FormValues, string>>;

export type ReturnedResult = {
  result: boolean;
  errors: ReturnedErrors;
};
