import Image from 'next/image';
import Head from 'next/head';

export const revalidate = 60;

export default async function Page() {
  return (
    <>
      <section className="relative flex items-center justify-center bg-black opacity-90 text-white overflow-hidden py-[200px]">
        <div>
          <h1 className="md:text-[3rem] text-[2.5rem] font-bold text-center m-[1rem]">
            水の流れと共に
            <br className=" leading-4" />
            『幸せ・感謝・楽しさ・感動』を運ぶ
          </h1>
          {/* <p className="text-center">
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p> */}
        </div>
        <Image
          className="absolute top-0 right-0 w-full h-[600px] object-cover object-right flex items-center justify-center z-[-1]"
          src="/add/hero222.jpg"
          alt=""
          width={3600}
          height={1200}
        />
      </section>
      <section className="relative bg-white max-w-[90%] md:[840px] mt-[-40px] mx-auto py-6 px-10 rounded-[var(--border-radius)]">
        <h2 className="text-lg">News</h2>

        <div className="absolute right-7 md:right-[-40px] bottom-[-40px]"></div>
      </section>
      <section className="max-w-[90%]  md:w-[920px] mx-auto py-[100px]">
        <div className="md:flex justify-between items-start md:space-x-20">
          <div>
            <h2 className="text-3xl font-bold">Business</h2>
            <p className="flex items-center space-x-5 mb-10">事業内容</p>
            <p className="mb-10">
              当社は、戸建住宅や低層アパートを中心とした配管の工事・設計・管理や公共上下水道からの引き込み工事など水のインフラ整備を行なっています。
              <br />
              その他、申請業務の代行を通した横のつながりを大切にし、お客様のご要望にお応えしています。
            </p>
            <div className="  -mt-[20px] w-60"></div>
          </div>
          <div className=" mt-10">
            <Image
              className="md:h-[480px] rounded-[var(--border-radius)]"
              src="/add/bussiness.jpg"
              alt=""
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section className="md:w-[920px] max-w-[90%] mx-auto md:py-[100px] py-[50px]">
          <div className="md:flex justify-between items-start md:space-x-20">
            <div className=" hidden md:block w-full -ml-[50%]">
              <Image
                className=" "
                src="/add/building.jpg"
                alt="会社情報"
                width={4032}
                height={3024}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="flex items-center space-x-5 mb-10">私たちについて</p>
              <p className="mb-10">
                水は生活する上で当たり前の様に有るものです。その「当たり前」を守ります。
              </p>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">社名</dt>
                <dd className="flex-1">太光設備株式会社</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">設立</dt>
                <dd className="flex-1">2014年</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">所在地</dt>
                <dd className="flex-1">
                  〒489-0842
                  <br />
                  愛知県瀬戸市小空町17番地の１
                </dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">代表者</dt>
                <dd className="flex-1">日比野　太郎</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">資本金</dt>
                <dd className="flex-1">1,000,000円</dd>
              </dl>
            </div>
            <div className=" md:hidden block ">
              <Image
                className=" rounded-[var(--border-radius)]"
                src="/add/building.jpg"
                alt="会社情報"
                width={4032}
                height={3024}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="max-w-[90%]  md:w-[920px] mx-auto py-[100px]">
        <div className="md:flex justify-between items-start md:space-x-20">
          <div>
            <h2 className="text-3xl font-bold">Recruit</h2>
            <p className="flex items-center space-x-5 mb-10">採用情報</p>
            <p className="mb-10">
              水は生活する上で当たり前の様に有るものです。その「当たり前」を守る会社。
              <br />
              水の流れと共に　幸せ・感謝・楽しさ・感動をお運び致します。
            </p>
          </div>
          <div className=" mt-10">
            <Image
              className="md:w-[480px] rounded-[var(--border-radius)]"
              src="/add/recruit.jpg"
              alt="採用"
              width={960}
              height={960}
            />
          </div>
        </div>
      </section>
    </>
  );
}
