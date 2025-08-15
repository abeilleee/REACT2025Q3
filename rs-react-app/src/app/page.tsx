import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('@/pages/MainPage/MainPage'));

export default function Page() {
  return <MainPage />;
}
