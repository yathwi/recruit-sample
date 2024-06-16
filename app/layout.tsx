'use client';
import { Metadata } from 'next';
import Script from 'next/script';
import { ReactLenis } from '@studio-freight/react-lenis';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/PageHeader';
import './globals.css';

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <ReactLenis
          root
          options={{
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.1,
            // smooth: true,
            // direction: 'vertical',
            // gestureDirection: 'vertical',
            infinite: false,
          }}
        >
          <main>{children}</main>
        </ReactLenis>
        <Footer />
      </body>
    </html>
  );
}
