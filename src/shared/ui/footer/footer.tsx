import { type FC } from 'react';
import { gh, rs } from '@/assets/images';

export const Footer: FC = () => {
  return (
    <footer className="pd-base flex h-[60px] items-center justify-between bg-amber-50/30">
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
