import Image from 'next/image';
import Head from 'next/head';
import Header from './_components/Header';
import { Hero } from './_components/Hero';
import { Message } from './_components/Message';
import { Member } from './_components/Member';

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <Hero />
      <Message />
      <Member />
    </>
  );
}
