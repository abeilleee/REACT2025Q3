import { gh, rs } from '@/assets/images';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="pd-base flex h-[60px] items-center justify-between bg-gray-500/10">
      <a href="https://rs.school/" target="_blank" rel="noreferrer">
        <img src={rs} className="icon" alt="icon" />
      </a>
      <div>2025</div>
      <a href="https://github.com/abeilleee" target="_blank" rel="noreferrer">
        <img src={gh} className="icon" alt="github" />
      </a>
    </footer>
  );
};
