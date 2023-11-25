import Image from 'next/image';
import Head from 'next/head';

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <section className="relative flex items-center justify-center bg-black opacity-90 text-white overflow-hidden py-[200px]"></section>
    </>
  );
}
