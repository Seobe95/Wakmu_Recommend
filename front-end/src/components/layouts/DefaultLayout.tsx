import { Footer, Header } from '../common';

interface DefaultLayoutProps {
  children: React.ReactElement;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-full flex flex-col justify-center min-h-screen items-center">
      <div
        className={`w-[768px] max-[1024px]:w-[768px] max-[768px]:w-5/6 max-[480px]:w-full flex-grow flex flex-col bg-white`}
      >
        <Header />
        <main className="px-8 max-[768px]:px-4 max-[480px]:px-2">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
