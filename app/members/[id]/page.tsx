import Image from 'next/image';
import Link from 'next/link';
import PageHeaderTextBlack from '../../_components/PageHeader/PageHeaderTextBlack';
import { Cta } from '../../_components/Cta';
import { Interview } from '../../_components/Member/Interviews';
import { Interviews } from '@/app/_components/Member/Interview';

const historyData = [
  { date: '2020.08', event: '東京事務所出荷 米軍横田エプロン増設工事事務所新' },
  { date: '2022.04', event: '新入社員研修担当 茨城県 関西鰍' },
  { date: '2022.06', event: '第２期本社研修 神奈川工事事務所' },
  { date: '2023.01', event: '増強施工作業' },
  { date: '2023.02', event: '第２期施工作業 増設エプロン増設工事事務所' },
  { date: '2024.04', event: '新入社員研修担当' },
];
const businessDetails =
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト';

export async function generateStaticParams() {
  return Interviews.map((interview) => ({
    id: interview.id.toString(),
  }));
}

export default async function Page({ params }: any) {
  const data = Interviews.find((item) => item.id === Number(params.id));

  return (
    <div className=" font-notoSans">
      <PageHeaderTextBlack />
      <main className=" h-screen relative">
        <Image id="image" src="/top/member/sample-1.jpg" alt="" fill className=" object-cover" />
        <div className=" top-1/3 left-40 font-bold absolute">
          <h2 className=" text-2xl text-green-500">
            <span className=" text-[48px] ">01</span> 土木/施工管理
          </h2>
          <p className=" text-[40px] leading-tight pt-16">
            道路という大切な社会インフラに
            <br />
            貢献できることが1番の魅力
          </p>
          <div className=" text-[18px] pt-16">
            <p>工事部工事第一グループ</p>
            <p>建築・都市環境学系卒</p>
            <p> 2014年度入社</p>
          </div>
        </div>{' '}
      </main>
      <div className=" bg-green-main">
        <Interview data={data} />
      </div>
      <div className=" px-10 py-3 text-xs">{`ホーム > 社員紹介`}</div>
      <div className=" -mt-20">
        <Cta />
      </div>{' '}
    </div>
  );
}
