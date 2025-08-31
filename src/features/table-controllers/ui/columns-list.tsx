import { TABLE_HEADERS_OPTIONAL } from '@/widgets/lib';
import { useFormStore } from '@/widgets/model';

export const ColumnsList = () => {
  const { selectedColumns, toggleColumn } = useFormStore();

  const handleChange = (value: string) => () => {
    const column = Object.values(TABLE_HEADERS_OPTIONAL).find(
      (column) => column === value
    );

    if (!column) {
      return;
    }

    toggleColumn(column);
  };

  return (
    <div className="pd-base flex flex-col rounded-xl bg-gray-600/70">
      <p className="text-center">Choose columns</p>
      {Object.values(TABLE_HEADERS_OPTIONAL).map((column, idx) => {
        const isChecked = selectedColumns.includes(column);

        return (
          <div key={idx} className="flex justify-between gap-3">
            <label htmlFor={`checkbox-${idx}`}>{column}</label>
            <input
              type="checkbox"
              id={`checkbox-${idx}`}
              onChange={handleChange(column)}
              checked={isChecked}
            />
          </div>
        );
      })}
    </div>
  );
};
