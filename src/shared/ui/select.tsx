import type { FC } from 'react';

type SelectProps = {
  label: string;
  id: string;
  options: string[] | number[];
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: FC<SelectProps> = ({
  label,
  id,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="hover:cursor-pointer"
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
