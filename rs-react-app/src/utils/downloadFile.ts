import { PokemonData } from '@/store/slices/pokemon';
import { convertToCSV } from './convertToCSV';

export const downloadFile = async (data: PokemonData[]) => {
  const content = await convertToCSV(data);
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
