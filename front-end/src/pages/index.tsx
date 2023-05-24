import { Inter } from 'next/font/google';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <DefaultLayout>
      <div className="">hello world</div>
    </DefaultLayout>
  );
}
