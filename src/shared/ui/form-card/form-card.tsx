import { type FC } from 'react';
import type { StoredData } from '@/shared/model/store';

type FormCardProps = {
  cardData: StoredData;
  newData: boolean;
};

export const FormCard: FC<FormCardProps> = ({ cardData, newData }) => {
  const { name, age, email, password, gender, country, terms, image } =
    cardData;

  return (
    <div className="pd-base relative flex h-[580px] w-[350px] flex-col justify-center gap-2 rounded-lg bg-amber-100/20 p-2 text-amber-50 shadow-xl">
      {newData && (
        <p
          className="bold absolute top-2 right-2 text-2xl font-bold text-shadow-(--text-shadow)"
          data-testid={'new'}
        >
          New
        </p>
      )}
      <div className="tile-data">
        <span>Name: </span>
        <span>{name}</span>
      </div>

      <div className="tile-data">
        <span>Age: </span>
        <span>{age}</span>
      </div>

      <div className="tile-data">
        <span>Email: </span>
        <span>{email}</span>
      </div>

      <div className="tile-data">
        <span>Password: </span>
        <span>{password}</span>
      </div>

      <div className="tile-data">
        <span>Gender: </span>
        <span>{gender}</span>
      </div>

      <div className="tile-data">
        <span>Country: </span>
        <span>{country}</span>
      </div>

      <div className="tile-data">
        <span>T&C agreement: </span>
        <span>{terms && 'true'}</span>
      </div>

      <div className="tile-data flex flex-col justify-center gap-2.5">
        <span>Image: </span>
        <div className="h-[180px] w-[220px]">
          <img src={image} alt="image" className="h-full w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};
