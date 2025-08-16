import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('@/views/About/About'));

export default function Page() {
  return <AboutPage />;
}
