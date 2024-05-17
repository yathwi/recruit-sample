import Image from 'next/image';
import Head from 'next/head';
import Header from './_components/PageHeader';
import { Hero } from './_components/Hero';
import { Message } from './_components/Message';
import { Member } from './_components/Member';
import { Numbers } from './_components/Numbers';
import { JobList } from './_components/JobList';
import { News } from './_components/News';
import { Ctv } from './_components/Ctv';

export const revalidate = 60;

export default async function Page() {
  return (
    <div className=" font-mincho">
      <Hero />
      <Message />
      <Member />
      <Numbers />
      <JobList />
      <News />
      <Ctv />
    </div>
  );
}
