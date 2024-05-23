import Image from 'next/image';
import Head from 'next/head';
import Header from './_components/PageHeader';
import { Hero } from './_components/Hero';
import { Message } from './_components/Message';
import { Member } from './_components/Member';
import { Numbers } from './_components/Numbers';
import { JobList } from './_components/JobList';
import { News } from './_components/News';
import { Cta } from './_components/Cta';
import { Business } from './_components/Business';
import { Case } from './_components/Case';
import { Company } from './_components/Company';

export const revalidate = 60;

export default async function Page() {
  return (
    <div className=" font-hiragino">
      <Header />
      <Hero />
      <Message />
      <Business />
      <Case />
      <Member />
      <Numbers />
      <Company />
      <News />
      <Cta />
    </div>
  );
}
