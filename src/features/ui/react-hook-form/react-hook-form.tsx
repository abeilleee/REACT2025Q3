import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  getFileInBase64,
  PLACEHOLDER,
  schema,
  VALID_EXTENSIONS,
  type FormValues,
} from '@/features/lib';
import { PasswordIndicator } from '@/features/ui';
import { useFormStore } from '@/shared/model';

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { setControlledData, toggleIsOpen, countries } = useFormStore();
  const passwordValue = watch('password');

  const onSubmit = async (data: FormValues) => {
    const fileList = data.image;
    const img = await getFileInBase64(fileList[0]);
    const dataForStore = { ...data, image: img };
    setControlledData(dataForStore);
    toggleIsOpen();
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      data-testid={'controlled form'}
    >
      <h3 className="text-center">Controlled Form</h3>
      <div className="group-col">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          autoFocus
          type="text"
          placeholder={PLACEHOLDER.NAME}
          {...register('name')}
          autoComplete="name"
        />
        <p className="error">{errors.name && errors.name.message}</p>
      </div>

      <div className="group-col">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          placeholder={PLACEHOLDER.AGE}
          {...register('age')}
          autoComplete="age"
        />
        <p className="error">{errors.age && errors.age.message}</p>
      </div>

      <div className="group-col">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder={PLACEHOLDER.EMAIL}
          {...register('email')}
          autoComplete="email"
        />
        <p className="error">{errors.email && errors.email.message}</p>
      </div>

      <fieldset>
        <legend className="text-white">Password</legend>
        <div className="group-col">
          <label htmlFor="password">Enter password:</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            placeholder={PLACEHOLDER.PASSWORD}
            autoComplete="password"
          />
          <PasswordIndicator password={passwordValue} />
          <p className="error">{errors.password && errors.password.message}</p>
        </div>

        <div className="group-col">
          <label htmlFor="secondPassword">Confirm password:</label>
          <input
            type="password"
            {...register('secondPassword')}
            placeholder={PLACEHOLDER.REPEAT_PASSWORD}
            id="secondPassword"
            autoComplete="secondPassword"
          />
          <p className="error">
            {errors.secondPassword && errors.secondPassword.message}
          </p>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-white">Gender</legend>
        <div className="flex gap-5">
          <div className="flex gap-3.5 accent-amber-600">
            <label htmlFor="male">Male</label>
            <input
              className="sm-w-input"
              type="radio"
              {...register('gender')}
              id="male"
              value="male"
            />
          </div>
          <div className="flex gap-3.5 accent-amber-600">
            <label htmlFor="female">Female</label>
            <input
              className="sm-w-input"
              type="radio"
              id="female"
              value="female"
              {...register('gender')}
            />
          </div>
        </div>
        <p className="error">{errors.gender && errors.gender.message}</p>
      </fieldset>

      <div className="flex-col">
        <div className="flex justify-between">
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <input
            className="sm-w-input accent-amber-600"
            type="checkbox"
            {...register('terms')}
            id="terms"
          />
        </div>
        <p className="error">{errors.terms && errors.terms.message}</p>
      </div>

      <div className="group-col">
        <label htmlFor="image">Image:</label>
        <input
          className="file-input"
          type="file"
          id="image"
          accept={VALID_EXTENSIONS.join(',')}
          {...register('image')}
        />
        <p className="error">{errors.image && errors.image.message}</p>
      </div>

      <div className="group-col">
        <label htmlFor="country">Country:</label>
        <input
          list="country-list"
          id="country"
          {...register('country')}
          name="country"
        />
        <datalist id="country-list">
          {countries.map((country, idx) => (
            <option key={idx} value={country} />
          ))}
        </datalist>
        <p className="error">{errors.country && errors.country.message}</p>
      </div>

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};
