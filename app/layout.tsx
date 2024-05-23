import { Metadata } from 'next';
import Script from 'next/script';

import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/PageHeader';
import './globals.css';

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${process.env.HUBSPOT_PORTAL_ID}.js`}
      ></Script>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
