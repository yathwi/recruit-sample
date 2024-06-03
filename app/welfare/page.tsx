'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import { Cta } from '../_components/Cta';
import Breadcrumb from '../_components/ui/Breadcrumb';

const breadcrumbItems = [
  { href: '/', label: 'ホーム' },
  { href: '/welfare', label: '福利厚生' },
];

gsap.registerPlugin(ScrollTrigger);
export default function Page() {
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const leftRef1 = useRef<any>(null);
  const leftRef2 = useRef<any>(null);

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
    gsap.to(leftRef1.current, {
      scrollTrigger: {
        trigger: leftRef1.current,
        start: 'center center',
        end: 'bottom top',
        pin: true,
      },
    });
    gsap.to(leftRef2.current, {
      scrollTrigger: {
        trigger: leftRef2.current,
        start: 'center center',
        end: 'bottom top',
        pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div className="relative pt-60 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald pt-40 text-green-500 opacity-20 left-[-250px] text-end rotate-90 text-[288px]">
            WELFARE
          </h2>
          <h1 className="text-[48px]">福利厚生</h1>{' '}
        </div>
      </div>
      <div className=" relative w-full mx-auto">
        <Image
          ref={imageRef}
          src="/top/career/sample-1.jpg"
          width={1007}
          height={417}
          alt="キャリア形成・研修制度"
          className="mx-auto "
        />
      </div>
      <ul className=" flex bg-white mx-auto justify-between px-10 max-w-[50%] py-5 my-20">
        <li>休暇</li>
        <li>住まい</li>
        <li>育児制度</li>
        <li>ヘルスケア</li>
        <li>その他諸制度</li>
      </ul>
      <div className=" bg-white pt-20 rounded-t-[80px] ">
        <div className="max-w-[80%]  flex justify-center mx-auto">
          <div className=" w-60 mr-20 ">
            <h2 ref={leftRef1} className=" text-[40px] text-right  font-bold">
              休暇
            </h2>
          </div>
          <div>
            <div>
              <p className=" text-lg font-bold">長期休暇</p>
              <p>
                年３回、７日間以上の長期休暇を取得することができます。(ゴールデンウイーク・夏季休暇・年末年始休暇)
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">リフレッシュ休暇</p>
              <p>
                長期休暇とは別に、勤続年数に応じてリフレッシュ休暇(５～14日間)が付与されます。
                リフレッシュ休暇は自身の好きな時期に取得することが可能です。{' '}
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">有給休暇</p>
              <p>
                法定では６か月経過後に付与されますが、当社では入社時から法定を上回る12日間の有給休暇が付与されます。
              </p>
              <p>
                有給休暇の残日数は１年に限り翌年度に繰り越すことでき、また、その後失効してしまう有給休暇は40日間を限度に積み立てることができます。
                この失効年休は傷病休暇・看護休暇・ボランティア休暇・介護休暇として使用できます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#EEF1F4] pt-20 rounded-t-[80px] ">
        <div className="max-w-[80%]  pb-40 flex justify-center mx-auto">
          <div className=" w-60 mr-20">
            <h2 className=" text-[40px] text-right font-bold">住まい</h2>
          </div>
          <div>
            <div>
              <p className=" text-lg font-bold">社宅制度</p>
              <p>
                業務都合により住居が必要となる場合、社宅が貸与されます。
                <br />
                新入社員が独身社宅に入居した場合、月額6,000円、２年目以降の社員は月額12,000円の負担で居住できます。転勤等に加え、結婚による新規世帯形成時にも社宅が貸与されます。(年齢制限あり){' '}
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">住宅手当</p>
              <p>持ち家の取得など社宅を使用しない場合、住宅手当が支給されます。</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-t-[80px] ">
        <div className="max-w-[80%] pt-20 pb-40 flex justify-center mx-auto">
          <div className=" w-60 mr-20">
            <h2 className=" text-[40px] text-right font-bold">育児制度</h2>
          </div>
          <div className=" ">
            <div>
              <p className=" text-lg font-bold">時短勤務・休業</p>
              <p>
                子どもを養育するために、一定の条件に基づき最長満２歳までの育児休業を取得することができます。
                <br />
                また、育児休業終了後も小学校入学までの子を養育する場合は、短時間勤務や時間外・休日労働の免除が認められています。(法定３歳未満){' '}
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">教育補助手当</p>
              <p>
                子育て支援のため、教育補助手当を支給します。
                <br />
                第１子 月額16,000円　 第２子以降 月額8,000円　
                <br />
                ※満21歳未満もしくは満23歳未満の学生が対象です。
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">転校補助金</p>
              <p>
                社員が家族帯同の転勤をする場合、お子さんの転園・転校に要する費用を１名につき最大70,000円まで支給します。
                <br />
                ※幼稚園・小中学校・高等学校が対象
              </p>
            </div>{' '}
            <div className=" mt-10">
              <p className=" text-lg font-bold">転勤の際の引越費用補助・赴任手当</p>
              <p>
                転勤の際、引越にかかる費用については全額負担します。
                <br />
                また、上記とは別に赴任手当として最大81,000円を支給します。
              </p>
            </div>{' '}
            <div className=" mt-10">
              <p className=" text-lg font-bold">帰宅手当</p>
              <p>
                本人と家族が１か月以上継続して別居する社員に月額最大110,000円が支給されます。
                <br />
                一定の条件があり、勤務地から自宅へ帰宅する場合の移動距離によって金額が異なります。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#EEF1F4]  rounded-t-[80px] ">
        <div className="max-w-[80%] pt-20 pb-40 flex justify-center mx-auto">
          <div className=" w-60 mr-20">
            <h2 className=" text-[40px] text-right font-bold">ヘルスケア</h2>
          </div>
          <div className=" ">
            <div>
              <p className=" text-lg font-bold">ヘルスケアプログラム</p>
              <p>
                専門の保健師が会社に常勤しており、面談も随時行っています。
                <br />
                また、年齢に応じた一般健診・成人病健診・人間ドック(40歳・50歳希望者)の受診費用を会社が負担します。{' '}
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">ENEOSグループ保険制度</p>
              <p>
                当社はENEOSグループの一員です。団体保険として割引が適用され、割安で保険に加入することが可能です。(生命保険、傷害保険、医療保険その他多数)
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">NIPPO健康保険組合</p>
              <p>
                当社にはグループ従業員を対象としたNIPPO健康保険組合があります。
                <br />
                一般の協会けんぽより、会社に合わせたきめ細かなサービスを受けることができます。
              </p>
            </div>{' '}
            <div className=" mt-10">
              <p className=" text-lg font-bold">インフルエンザ接種費用補助</p>
              <p>
                社員とその扶養家族についてインフルエンザ接種費用を１人当たり3,500円まで補助します。
              </p>
            </div>{' '}
            <div className=" mt-10">
              <p className=" text-lg font-bold">会員制福利厚生サービス</p>
              <p>
                映画、テーマパーク、旅行、グルメ、ショッピングなどを優待価格で利用できる会員制の福利厚生サービスです。ご家族や内定者も利用することができます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-t-[80px] ">
        <div className="max-w-[80%] pt-20 pb-40 flex justify-center mx-auto">
          <div className=" w-60 mr-20">
            <h2 className=" text-[40px] text-right  font-bold">
              その他
              <br />
              諸制度
            </h2>
          </div>
          <div className=" ">
            <div>
              <p className=" text-lg font-bold">新入社員の帰省手当</p>
              <p>
                新入社員(総合職)が夏季休暇・年末年始休暇に実家に帰省する際の補助として、勤務地から実家までの往復分の交通費相当額を手当として受給できます。{' '}
              </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">財形貯蓄制度(財形年金貯蓄・財形住宅貯蓄)</p>
              <p>貯蓄目的によって、財形年金貯蓄と財形住宅貯蓄があります。 </p>
            </div>
            <div className=" mt-10">
              <p className=" text-lg font-bold">退職金制度(確定給付企業年金)</p>
              <p>勤続年数・退職時年齢に応じて支給いたします。 </p>
            </div>{' '}
            <div className=" mt-10">
              <p className=" text-lg font-bold">介護退職復職制度</p>
              <p>
                家族の介護を理由に退職後、一定の条件のもと退職後３年未満であれば復職することが可能です。{' '}
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
      <Image
        src="/top/welfare/bg-sample.jpg"
        width={1280}
        height={405}
        alt="オフィス写真"
        className="w-full mx-auto"
      />
      <Breadcrumb items={breadcrumbItems} />
      <Cta />
    </div>
  );
}
