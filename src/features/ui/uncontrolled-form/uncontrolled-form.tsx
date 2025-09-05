import { useRef, useState, type FormEvent } from 'react';
import {
  getFileInBase64,
  parseDataToFormValues,
  PLACEHOLDER,
  transferToFileList,
  VALID_EXTENSIONS,
  validate,
  type ReturnedErrors,
} from '@/features/lib';
import { PasswordIndicator } from '@/features/ui';
import { useFormStore } from '@/shared/model';

export const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { countries, setUncontrolledData, toggleIsOpen } = useFormStore();
  const [errors, setErrors] = useState<ReturnedErrors>({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      const parsedData = parseDataToFormValues(data);

      if (data.image instanceof File) {
        const imageFileList = transferToFileList(data.image);
        parsedData.image = imageFileList;
      }

      const validationResult = await validate(parsedData);

      if (validationResult.result) {
        const imgFile = data.image as File;
        const img = await getFileInBase64(imgFile);
        const dataForStore = { ...parsedData, image: img };
        setUncontrolledData(dataForStore);
        toggleIsOpen();
      }

      setErrors(validationResult.errors);
    }
  };

  return (
    <form
      className="form"
      ref={formRef}
      onSubmit={handleSubmit}
      data-testid={'uncontrolled form'}
    >
      <h3 className="text-center">Uncontrolled Form</h3>
      <div className="group-col">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          autoFocus
          type="text"
          placeholder={PLACEHOLDER.NAME}
          autoComplete="name"
        />
        <p className="error">{errors.name}</p>
      </div>

      <div className="group-col">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder={PLACEHOLDER.AGE}
          autoComplete="age"
        />
        <p className="error">{errors.age}</p>
      </div>

      <div className="group-col">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={PLACEHOLDER.EMAIL}
          autoComplete="email"
        />
        <p className="error">{errors.email}</p>
      </div>

      <fieldset>
        <legend className="text-white">Password</legend>
        <div className="group-col">
          <label htmlFor="password">Enter password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            autoComplete="password"
            ref={passwordRef}
          />
          <PasswordIndicator password={passwordRef.current?.value || ''} />
          <p className="error">{errors.password}</p>
        </div>

        <div className="group-col">
          <label htmlFor="secondPassword">Confirm password:</label>
          <input
            type="password"
            name="secondPassword"
            placeholder={PLACEHOLDER.REPEAT_PASSWORD}
            id="secondPassword"
            autoComplete="secondPassword"
          />
          <p className="error">{errors.secondPassword}</p>
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
              id="male"
              value="male"
              name="gender"
            />
          </div>
          <div className="flex gap-3.5 accent-amber-600">
            <label htmlFor="female">Female</label>
            <input
              className="sm-w-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
          </div>
        </div>
        <p className="error">{errors.gender}</p>
      </fieldset>

      <div className="flex-col">
        <div className="flex justify-between">
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <input
            className="sm-w-input accent-amber-600"
            type="checkbox"
            id="terms"
            name="terms"
          />
        </div>
        <p className="error">{errors.terms}</p>
      </div>

      <div className="group-col">
        <label htmlFor="image">Image:</label>
        <input
          className="file-input"
          type="file"
          id="image"
          name="image"
          accept={VALID_EXTENSIONS.join(',')}
        />
        <p className="error">{errors.image}</p>
      </div>

      <div className="group-col">
        <label htmlFor="country">Country:</label>
        <input list="country-list" id="country" name="country" />
        <datalist id="country-list">
          {countries.map((country, idx) => (
            <option key={idx} value={country} />
          ))}
        </datalist>
        <p className="error">{errors.country}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
