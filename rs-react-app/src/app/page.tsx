import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('@/views/MainPage/MainPage'));

export default function Page() {
  return <MainPage />;
}
