import * as yup from 'yup';
import { ERRORS, MIN_PASSWORD_LENGTH, PASSWORD_REGEX } from './constants';
import { isValidSize, isValidType } from './utils';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required(ERRORS.REQUIRED_FIELD)
    .matches(/^[\p{Lu}]/u, ERRORS.NAME_UPPER_CASE),
  age: yup
    .number()
    .required(ERRORS.REQUIRED_FIELD)
    .positive(ERRORS.AGE_NO_NEGATIVE)
    .integer(ERRORS.AGE_INTEGER_ONLY)
    .typeError('Age must be a positive number'),
  email: yup.string().required(ERRORS.REQUIRED_FIELD).email(),
  password: yup
    .string()
    .required(ERRORS.REQUIRED_FIELD)
    .matches(PASSWORD_REGEX)
    .matches(/[a-z]/, ERRORS.PASSWORD_LOW_LETTER)
    .matches(/[A-Z]/, ERRORS.PASSWORD_UPPER_LETTER)
    .matches(/\d/, ERRORS.PASSWORD_NUMBER)
    .min(MIN_PASSWORD_LENGTH),
  secondPassword: yup
    .string()
    .required(ERRORS.REQUIRED_FIELD)
    .oneOf([yup.ref('password')], ERRORS.PASSWORD_CONFIRM),
  gender: yup.string().required(ERRORS.REQUIRED_FIELD),
  country: yup.string().required(ERRORS.REQUIRED_FIELD),
  terms: yup
    .boolean()
    .required(ERRORS.REQUIRED_FIELD)
    .isTrue(ERRORS.TC_REQUIRED),
  image: yup
    .mixed(
      (input): input is FileList =>
        input instanceof FileList && input.length > 0
    )
    .required(ERRORS.REQUIRED_FIELD)
    .test('fileType', ERRORS.IMAGE_TYPE, (value) => {
      return isValidType(value);
    })
    .test('fileSize', ERRORS.IMAGE_SIZE, (value) => {
      return isValidSize(value);
    }),
});
