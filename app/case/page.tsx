import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className=" bg-green-main pb-20 font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div className="relative pt-40 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald text-green-500 opacity-20 left-[-150px] text-end rotate-90 text-[288px]">
            CASE
          </h2>
          <h1 className="text-[48px] pt-20 font-bold">施工事例</h1>
        </div>
      </div>
      <div className="w-[90%] py-10 mx-auto bg-white z-10 bg-opacity-50">
        <div className=" px-10">
          <div className=" px-5">
            <p className=" px-4 py-2 bg-green-500 w-fit text-white font-bold">建設土木</p>
            <h2 className=" text-[48px] font-bold">東名高速道路</h2>
          </div>
          <div className=" w-full border-2 " />
          <div className=" flex justify-center mt-10 gap-10">
            <Image src="/top/case/sample-1.jpg" width={512} height={315} alt="東名高速道路" />
            <Image src="/top/case/sample-2.jpg" width={512} height={315} alt="東名高速道路" />
          </div>
          <div className="w-[70%] mx-auto mt-20">
            <table className="  ">
              <tbody>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">路線名・施設名</th>
                  <td className=" text-[18px] pl-7 py-2">東名高速道路</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">工事名称</th>
                  <td className=" text-[18px] pl-7 py-2">東名高速道路 富士管内維持修繕工事</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">起工者</th>
                  <td className=" text-[18px] pl-7 py-2">中日本高速道路株式会社 東京支社</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">施工場所</th>
                  <td className=" text-[18px] pl-7 py-2">
                    東名高速道路 静岡県富士市～静岡市清水区
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">工期</th>
                  <td className=" text-[18px] pl-7 py-2">2014年7月16日 ～ 2015年3月12日</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 text-left text-[20px] ">使用材料</th>
                  <td className=" text-[18px] pl-7 py-2">アスファルト</td>
                </tr>
              </tbody>
            </table>{' '}
            <div className=" mt-10 drop-shadow-md px-10 py-5 bg-white">
              <h3 className=" font-bold ">
                <span className=" text-green-500 text-[20px] pr-3">■</span>ここがポイント！（解説）
              </h3>
              <p className=" mt-5">
                特殊な技術を使用していますテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20 bg-white border-2  flex justify-between">
        <div className=" border-r-2 flex justify-center items-center gap-5 w-1/2 py-4">
          <div>＜</div>{' '}
          <div>
            <p>インフラ</p>
            <p>新千歳空港 滑走路（北海道）</p>
          </div>
        </div>
        <div className=" items-center flex justify-center w-1/2 gap-5 py-4">
          <div>
            <p>インフラ</p>
            <p>新千歳空港 滑走路（北海道）</p>
          </div>
          <div>＞</div>
        </div>
      </div>
      <div className=" flex justify-center mt-20">
        <Link href="/" className=" bg-green-500 px-7 font-bold text-white py-3">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
