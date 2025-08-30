import { useNavigate } from 'react-router-dom';
import { notFound } from '@/assets/images';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-11 text-amber-50">
      <p className="text-4xl">Oops...Page not found</p>
      <img src={notFound} alt="notFound" height={100} />
      <button onClick={onClick}>Back</button>
    </div>
  );
};
