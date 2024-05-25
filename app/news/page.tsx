import Image from 'next/image';
import Link from 'next/link';
import { Cta } from '../_components/Cta';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import Breadcrumb from '../_components/ui/Breadcrumb';
const breadcrumbItems = [
  { href: '/', label: 'ホーム' },
  { href: '/news', label: 'ニュース' },
];

const items = [
  {
    id: '1',
    title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
    date: '2021.01.01',
    category: 'お知らせ',
  },
  {
    id: '2',
    title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
    date: '2021.01.02',
    category: 'お知らせ',
  },
  {
    id: '3',
    title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
    date: '2021.01.03',
    category: 'お知らせ',
  },
  {
    id: '4',
    title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
    date: '2021.01.04',
    category: 'お知らせ',
  },
  {
    id: '5',
    title: 'ここにニュースのタイトルが入りますここにニュースのタイトルが入ります',
    date: '2021.01.05',
    category: 'お知らせ',
  },
];

export default function Page() {
  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />

      <div>
        <div className="relative pt-60 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald pt-20 text-green-500 opacity-20 left-[-140px] text-end rotate-90 text-[288px]">
            NEWS
          </h2>
          <h1 className="text-[48px] font-bold">ニュース</h1>{' '}
        </div>
      </div>
      <div className=" max-w-[90%] relative mb-20 z-10 mx-auto bg-white">
        <ul className="space-y-4 max-w-[90%] py-20 mx-auto">
          {items.map((item) => (
            <li key={item.id}>
              <Link href={`/news/${item.id}`} className=" py-2 px-5 border-b block">
                <div className="flex items-center">
                  <p className="text-gray-500 mr-4">{item.date}</p>{' '}
                  <p className="text-gray-500 mr-4">
                    <span className=" text-green-500">⚫︎</span>
                    {item.category}
                  </p>
                </div>
                <p className=" font-bold hover:underline">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <Cta />
    </div>
  );
}
