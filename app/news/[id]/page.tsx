import Image from 'next/image';
import PageHeaderTextBlack from '@/app/_components/PageHeader/PageHeaderTextBlack';
import Breadcrumb from '@/app/_components/ui/Breadcrumb';
import { Cta } from '@/app/_components/Cta';
import { title } from 'process';
import Link from 'next/link';

const breadcrumbItems = [
  { href: '/', label: 'ホーム' },
  { href: '/news', label: 'ニュース' },
  {
    href: '/news/%5Bid%5D',
    label: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
  },
];

const items = {
  title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
  date: '2021.01.01',
  category: 'お知らせ',
  content: 'テキストテキストテキストテキストテキストテキストテキストテキスト',
};

export default function Page() {
  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div className="relative pt-60 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald pt-20 text-green-500 opacity-20 left-[-140px] text-end rotate-90 text-[288px]">
            NEWS
          </h2>
          <h1 className="text-[48px] font-bold">ニュース</h1>
        </div>
      </div>
      <div className=" max-w-[90%] relative mb-20 z-10 mx-auto bg-white">
        <div className="space-y-4 max-w-[90%] py-20 mx-auto">
          {' '}
          <div className=" flex">
            <p className=" text-[14px] text-gray-500">{items.date}</p>
            <p className=" text-[14px] text-gray-500 ml-5">
              <span className=" text-green-500">⚫︎</span>
              {items.category}
            </p>
          </div>
          <h1 className="text-[36px] font-bold ">{items.title}</h1>
          <Image
            src="/top/member/sample-2.jpg"
            width={500}
            height={500}
            alt="ニュース"
            className=" pt-10"
          />
          <p className=" text-[14px] text-gray-500 pt-10">{items.content}</p>
        </div>
      </div>
      <div className=" flex justify-center mb-20">
        <Link href="/news" className=" hover:opacity-80 px-7 py-3 bg-green-500 text-white w-fit ">
          <span className=" mr-5">＜</span>ニュース一覧に戻る
        </Link>
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <Cta />
    </div>
  );
}
