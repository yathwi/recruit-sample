import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'メンバー｜シンプルなコーポレートサイト',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" src="/add/hero111.jpg" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
