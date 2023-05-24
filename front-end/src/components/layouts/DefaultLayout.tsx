import { Header } from '../common';

interface DefaultLayoutProps {
  children: React.ReactElement;
}
export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
