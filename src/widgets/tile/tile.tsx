import { type FC } from 'react';
import type { StoredData } from '@/shared/model/store';
import { FormCard } from '@/shared/ui';

type TileProps = {
  data: StoredData[];
  title: string;
};

export const Tile: FC<TileProps> = ({ data, title }) => {
  return (
    <div className="flex flex-col items-center gap-3.5">
      <p className="pd-sm w-[220px] rounded-xl bg-amber-50/20 text-center text-2xl text-white">
        {title}
      </p>
      {data.length > 0 ? (
        <div className="flex flex-col gap-5">
          {data.map((cardData: StoredData, idx: number) => {
            return (
              <FormCard cardData={cardData} key={idx} newData={idx === 0} />
            );
          })}
        </div>
      ) : (
        <p className="flex h-20 items-center justify-center text-center text-amber-50">
          No data
        </p>
      )}
    </div>
  );
};
