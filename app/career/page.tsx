'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import Breadcrumb from '../_components/ui/Breadcrumb';
import { Cta } from '../_components/Cta';

const breadcrumbItems = [
  { href: '/', label: 'ホーム' },
  { href: '/career', label: 'キャリア形成・研修制度' },
];

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const content1Ref = useRef<any>(null);
  const content2Ref = useRef<any>(null);
  const content3Ref = useRef<any>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        width: '90%',
      },
      {
        width: '100%',

        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  }, [imageRef, containerRef, content1Ref, content2Ref, content3Ref]);

  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div ref={containerRef} className="relative pt-60 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald pt-40 text-green-500 opacity-20 left-[-250px] text-end rotate-90 text-[288px]">
            CAREER
          </h2>
          <h1 className="text-[48px]">キャリア形成・研修制度</h1>{' '}
        </div>
      </div>
      <div className=" w-full relative mx-auto">
        <Image
          ref={imageRef}
          src="/top/career/sample-1.jpg"
          width={1007}
          height={417}
          alt="キャリア形成・研修制度"
          className="mx-auto "
        />
      </div>

      <div className=" mt-20">
        <div className="pt-20 bg-white bg-opacity-[75%] rounded-t-[80px] ">
          <div className="max-w-[60%]  pb-40  justify-center mx-auto">
            <h2 className=" font-bold text-[40px] ">キャリア形成</h2>
            <p className=" bg-white text-center drop-shadow-lg mt-5 py-5 font-bold text-lg text-green-dark w-full">
              「常にチャレンジ」できる環境が、あなたの夢を叶える。
              <br />
              NIPPOで挑戦しつづける社員を応援する3つのステップ
            </p>
            <div className="flex mt-20">
              <div className=" w-1/2">
                <p>
                  当社では、若手社員のチャレンジ精神を大切にし、
                  <span className=" font-bold text-[#19714B]">
                    早い段階から責任ある仕事を任せる
                  </span>
                  ことで、適性の発見と能力向上を支援しています。また、
                  <span className=" font-bold text-[#19714B]">
                    年1回の自己申告制度とキャリア面談
                  </span>
                  を通じて、社員一人ひとりのキャリアビジョンを尊重し、様々な職種や仕事へのチャレンジを応援します。
                </p>
                <p className=" mt-7">
                  国内最大規模の事業所数を誇る当社では、{' '}
                  <span className=" font-bold text-[#19714B]">
                    事業所責任者となるチャンスも豊富
                  </span>
                  にあります。マネジメント力を試し、自身と部下の成長を実感できる環境で、組織運営力を磨くことができます。
                </p>
                <p className="mt-7">
                  さらに、 <span className=" font-bold text-[#19714B]">海外留学制度</span>
                  を設けることで、グローバルな視野を持ったリーダーの育成にも注力しています。
                </p>
              </div>
              <div className=" w-1/2">
                <div className=" flex justify-center">
                  <div className=" bg-green-500 text-white rounded-full h-40 w-40 text-center flex flex-col justify-center">
                    人事考課制度
                  </div>{' '}
                </div>
                <div className=" flex justify-center gap-10">
                  <div className=" bg-green-500 text-white rounded-full h-40 w-40 text-center flex flex-col justify-center">
                    人事考課制度
                  </div>
                  <div className=" bg-green-500 text-white rounded-full h-40 w-40 text-center flex flex-col justify-center">
                    人事考課制度
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#EEF4F1] py-20 shadow-2xl -mt-20 rounded-t-[80px]  ">
          <div className="max-w-[60%]  mx-auto">
            <h2 className=" font-bold text-[40px] ">研修制度</h2>
            <p className=" bg-white text-center drop-shadow-lg mt-5 py-5 font-bold text-lg text-green-dark w-full">
              人材が価値の源泉。NIPPOが支える多彩な研修プログラム。
              <br />
              社員一人ひとりの理想のキャリアを全力でバックアップ。
            </p>

            <div className=" my-20">
              <div className=" flex gap-20 justify-center">
                <div className=" w-1/2">
                  <h2 className=" font-bold text-lg ">
                    <span className=" text-green-500 text-[20px] pr-3">■</span>OJT（職場研修）
                  </h2>
                  <div className="mt-5">
                    <p>
                      当社では、社員の実践的なスキルアップのために、OJT教育に力を入れています。職場での実務経験を通じて、問題解決力や自律的な思考力を伸ばすことを目指しています。
                    </p>
                    <p className="mt-7">
                      新入社員はもちろん、中途入社1年目の方や、職種変更された方にも、専任の教育担当者がマンツーマンでサポート。業務を進める中で必要となる知識やノウハウを、着実に身につけていくことができます。
                    </p>
                    <p className="mt-7">
                      約1年間のOJTを通じて、社員一人ひとりのスキルアップと、会社全体の成長を実現していきます。
                    </p>
                  </div>
                </div>
                <div>
                  <Image src="/top/career/sample-1.jpg" width={472} height={334} alt="研修制度" />
                </div>
              </div>
              <div className=" mt-20 flex w-full">
                <h2 className=" font-bold text-lg w-96 mr-20 ">
                  <span className=" text-green-500 text-[20px] pr-3">■</span>集合写真
                </h2>
                <p>
                  新入社員から管理職まで、職種に関わらず全ての社員が自分の能力を高めながら多様なキャリアを実現できるように、研修体系を整備しています。役職に応じたスキルアップはもちろん、中長期的な視点に立って一人ひとりのキャリア構築をサポートします。
                </p>
              </div>
            </div>

            <div className=" bg-white px-[10%] mt-10 py-10">
              <h2 className=" text-center font-bold text-[20px] ">階層別研修</h2>
              <p className=" mt-5">
                各階層で必要とされるスキルやマインドの習得のため、各階層の節目で集合研修を実施します。
                <br />
                ロールプレイングなどを通じ、実際に体験することにより「自分ゴト」として捉えることができ、研修効果が高まります。
              </p>
              <div>
                <Image
                  src="/top/career/career-pyramid.png"
                  width={807}
                  height={371}
                  alt="階層別研修"
                />
              </div>
            </div>
            <div className=" bg-white px-[10%] mt-3 py-10">
              <h2 className=" text-center font-bold text-[20px] ">業務研修</h2>
              <p className=" mt-5">
                それぞれの社員の職種や業務内容に密着した職務遂行能力、問題解決能力の向上を図り、部門別・職種別に集合研修を実施します。
              </p>
              <div>
                <div className=" mt-5 flex gap-2">
                  <div className=" w-1/2 bg-[#DDE3EC] border-[#668CAF] border-4 py-3 bg-opacity-50">
                    <h3 className=" text-center font-bold">土木形業務研修</h3>
                    <p className=" mt-3 text-sm px-10">
                      2年目研修、3年目研修、4年目研修、6級研修、
                      <br />
                      新任出張所長研修、技術員研修など
                    </p>
                  </div>
                  <div className=" w-1/2 bg-[#DDE3EC] border-[#668CAF] border-4 py-3 bg-opacity-50">
                    <h3 className=" text-center font-bold">建築系業務研修</h3>
                    <p className=" mt-3 text-sm px-10">
                      工事担当者研修、工事主任研修、作業所長研修、
                      <br />
                      建築工事事務所長研修など
                    </p>
                  </div>
                </div>
                <div className=" mt-2 flex gap-2">
                  <div className=" w-1/2 bg-[#DDE3EC] border-[#668CAF] border-4 py-3 bg-opacity-50">
                    <h3 className=" text-center font-bold">合材系業務研修</h3>
                    <p className=" mt-3 text-sm px-10">
                      工事担当者研修、工事主任研修、作業所長研修、
                      <br />
                      建築工事事務所長研修など
                    </p>
                  </div>

                  <div className=" w-1/2 bg-[#DDE3EC] border-[#668CAF] border-4 py-3 bg-opacity-50">
                    <h3 className=" text-center font-bold">事務系業務研修</h3>
                    <p className=" mt-3 text-sm px-10">
                      総務担当者研修、営業担当者研修、技術営業研修など
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className=" font-bold text-lg w-96 mr-20 ">
                <span className=" text-green-500 text-[20px] pr-3">■</span>自己啓発
              </h2>
              <div className=" mt-10 flex justify-center gap-5">
                <div className=" h-[340px] w-[340px] px-10 bg-white rounded-full text-center pt-10 justify-center">
                  <h3 className=" font-bold text-[20px]">通信教育講座</h3>
                  <p className=" mt-5">
                    公的資格の取得やビジネス実務・語学・PCスキルなど１５０種類以上の講座があり、自分で好きなコースを選択可能です。
                    講座を期間内に修了した方には受講費用の全額を補助をします。
                  </p>
                </div>
                <div className=" h-[340px] w-[340px] px-10 bg-white rounded-full text-center pt-10 justify-center">
                  <h3 className=" font-bold text-[20px]">eラーニング</h3>
                  <p className=" mt-5">
                    主に業務で必要となる法律についての講座を用意しています。PCやタブレットですきま時間に受講できるため、時間の有効活用が図れます。
                  </p>
                </div>{' '}
                <div className=" h-[340px] w-[340px] px-10 bg-white rounded-full text-center pt-10 justify-center">
                  <h3 className=" font-bold text-[20px]">海外留学制度</h3>
                  <p className=" mt-5">
                    技術系の海外勤務志望者に対し、本人の適性を判断の上、約１年間の語学留学を会社負担で実施しています。
                    帰国後は、海外勤務や国内の米軍関連工事に従事する場合があります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white py-20 rounded-t-[80px] ">
          <div className="max-w-[60%] mx-auto">
            <h3 className=" font-bold text-xl">入社後の流れ</h3>
            <p>
              入社後、新入社員は全員が同じ導入研修を受講し、会社概要やビジネスマナーなどの集合研修と現場実習を行います。
              <br />
              その後、職種ごとに分かれて専門教育を受け、必要な基礎知識を学びます。専門教育終了後に配属となり、先輩社員が育成担当として新入社員をフォローしながら、現場OJTで実務を通じて必要な知識・スキルを習得していきます。
            </p>
          </div>
          <div className=" mt-10">
            <Image
              src="/top/career/flow.jpg"
              className=" mx-auto"
              width={1016}
              height={796}
              alt="入社後の流れ"
            />
          </div>
        </div>
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <Cta />
    </div>
  );
}
