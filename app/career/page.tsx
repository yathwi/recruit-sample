'use client';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import { Cta } from '../_components/Cta';
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
    gsap.to(content1Ref.current, {
      scrollTrigger: {
        trigger: content1Ref.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    });
    gsap.to(content2Ref.current, {
      scrollTrigger: {
        trigger: content2Ref.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      },
    });
    gsap.to(content3Ref.current, {
      scrollTrigger: {
        trigger: content3Ref.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
      },
    });
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
      <div className=" w-full mx-auto">
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
        <div ref={content1Ref} className=" bg-white rounded-t-[80px] ">
          <div className="max-w-[60%] pt-20 pb-40 flex justify-center mx-auto">
            <div className=" w-1/2">
              <h2 className=" font-bold text-[40px] ">キャリア形成</h2>
              <p>
                若手から責任ある仕事に挑戦できること。さらに大規模な工事にチャレンジしてみたいと思ったときNIPPOにはステップアップできる環境があること。手をあげる制度があること。
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

        <div ref={content2Ref} className=" bg-[#EEF4F1] drop-shadow-md rounded-t-[80px] ">
          <div className="max-w-[60%] pt-20 mx-auto">
            <h2 className=" font-bold text-[40px] ">研修制度</h2>
            <p>
              豊かな社会を実現するNIPPOの4つの事業領域
              私たちNIPPOは、アスファルト舗装工事を中心とする舗装・土木工事、および、アスファルト舗装の材料であるアスファルト合材の製造・販売を中核事業としています。
            </p>

            <div className=" flex gap-20 justify-center mt-20">
              <div className=" w-1/2">
                <h2 className=" font-bold text-lg ">
                  <span className=" text-green-500 text-[20px] pr-3">■</span>研修制度
                </h2>
                <p>
                  豊かな社会を実現するNIPPOの4つの事業領域
                  私たちNIPPOは、アスファルト舗装工事を中心とする舗装・土木工事、および、アスファルト舗装の材料であるアスファルト合材の製造・販売を中核事業としています。
                </p>
              </div>
              <div>
                <Image src="/top/career/sample-1.jpg" width={472} height={334} alt="研修制度" />
              </div>
            </div>
            <div className=" mt-20 flex justify-center gap-5">
              <div className=" h-[340px] w-[340px] px-10 bg-white rounded-full text-center pt-10 justify-center">
                <h3 className=" font-bold text-[20px]">通信教育講座</h3>
                <p className=" mt-5">
                  公的資格の取得やビジネス実務・語学・PCスキルなど１５０種類以上の講座があり、自分で好きなコースを選択可能です。
                  講座を期間内に修了した方には受講費用の全額を補助をします。
                </p>
              </div>{' '}
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
        <div ref={content3Ref} className=" bg-white h-screen rounded-t-[80px] ">
          <div className="max-w-[60%] pt-20  flex mx-auto">
            <h3 className=" font-bold w-[35%] text-xl">入社後の流れ</h3>
            <div className=" w-[65%]">
              <p>豊かな社会を実現するNIPPOの4つの事業領域</p>
              <p>
                私たちNIPPOは、アスファルト舗装工事を中心とする舗装・土木工事、および、アスファルト舗装の材料であるアスファルト合材の製造・販売を中核事業としています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cta />
    </div>
  );
}
