import Image from 'next/image';
import Link from 'next/link';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import { Cta } from '../_components/Cta';

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

export default async function Page() {
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
        <div className="max-w-[80%] mx-auto py-20">
          <div className="bg-white pb-10 pt-16 px-10 shadow-md flex rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">略歴</h2>
            <div className=" ml-20">
              {historyData.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-5 items-start  border-gray-200 ">
                    <div className=" flex flex-col items-center">
                      <p className=" h-2 w-2 rounded-full bg-green-dark " />{' '}
                      <div className="border-l-2 border-gray-200 h-7" />
                    </div>
                    <p className="-mt-3">{item.date}</p>
                    <p className="-mt-3">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white py-10 px-10 shadow-md  rounded-lg">
            <h2 className="text-lg font-semibold mb-4">業務内容</h2>
            <p className="whitespace-pre-wrap">{businessDetails}</p>
          </div>
        </div>
        <div className=" max-w-[80%] pt-20 border-t-2 border-green-dark mx-auto">
          <div className=" flex gap-10 justify-center">
            <div className=" w-1/2 px-5 leading-loose">
              <h3 className=" text-2xl font-bold text-green-dark leading-tight">
                初めて責任者を経験した2年目。
                <br />
                完成した道を見たときの感動が
                <br />
                今も原動力に。
              </h3>
              <p className=" mt-10">
                道路舗装業界に興味を持ち、業界トップの会社を！という想いで応募しました。
                <br />
                OB訪問をした際に、先輩社員の方が活き活きとした表情で仕事の話をされていたのが印象的で、このような方々と一緒に働きたいと思い入社を決意しました。
                <br />
                また、給料や福利厚生の手厚さにも魅力を感じ、特に結婚・子どもが生まれてからは改めてこの会社で良かったと実感しています。
              </p>
            </div>
            <div className="w-1/2">
              <Image src="/top/member/sample-2.jpg" alt="" width={500} height={453} />
            </div>
          </div>

          <div className=" flex mt-20 gap-10 justify-center">
            <div className="w-1/2">
              <Image src="/top/member/sample-3.jpg" alt="" width={500} height={453} />
            </div>
            <div className=" w-1/2 px-5 leading-loose">
              <h3 className=" text-2xl font-bold text-green-dark leading-tight">
                初めて責任者を経験した2年目。
                <br />
                完成した道を見たときの感動が
                <br />
                今も原動力に。
              </h3>
              <p className=" mt-10">
                道路舗装業界に興味を持ち、業界トップの会社を！という想いで応募しました。
                <br />
                OB訪問をした際に、先輩社員の方が活き活きとした表情で仕事の話をされていたのが印象的で、このような方々と一緒に働きたいと思い入社を決意しました。
                <br />
                また、給料や福利厚生の手厚さにも魅力を感じ、特に結婚・子どもが生まれてからは改めてこの会社で良かったと実感しています。
              </p>
            </div>
          </div>
        </div>{' '}
        <div className=" mt-20">
          <Image
            src="/top/member/sample-4.jpg"
            alt=""
            width={1280}
            height={406}
            className=" object-cover w-full"
          />
        </div>
        <div className=" relative">
          <Image
            src="/top/member/bg-member.png"
            alt=""
            width={1280}
            height={490}
            className=" object-cover w-full"
          />
          <div>
            <div className=" absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className=" text-lg font-bold text-center">他のインタビューを見る</h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-10 py-3 text-xs">{`ホーム > 社員紹介`}</div>
      <div className=" -mt-20">
        <Cta />
      </div>{' '}
    </div>
  );
}
