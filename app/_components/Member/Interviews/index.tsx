import { Interviews } from '../Interview';
import Image from 'next/image';
import styles from './Interview.module.css';
import Link from 'next/link';

interface InterviewProps {
  data?: {
    id: number;
    title1: string;
    description1: string;
    image1: string;
    title2: string;
    description2: string;
    image2: string;
    title3: string;
    description3: string;
    image3: string;
  };
}

export async function generateStaticParams() {
  return Interviews.map((interview) => ({
    id: interview.id.toString(),
  }));
}

export const Interview: React.FC<InterviewProps> = ({ data }: any) => {
  const currentId = data?.id;
  const prevId = currentId && currentId > 1 ? currentId - 1 : 3;
  const nextId = currentId && currentId < Interviews.length ? currentId + 1 : null;

  return (
    <div>
      <div key={data?.id} className=" bg-green-main">
        <div className="max-w-[80%] mx-auto py-20">
          <div className="bg-white pb-10 pt-16 px-10 shadow-md flex rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">略歴</h2>
            <div className=" ml-20">
              {data?.historyData.map((item: any, index: number) => (
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
            <p className="whitespace-pre-wrap">{data?.businessDetail}</p>
          </div>
        </div>
        <div className=" max-w-[80%] pt-20 border-t-2 border-green-dark mx-auto">
          <div className=" flex gap-10 justify-center">
            <div className=" w-1/2 px-5 leading-loose">
              <h3 className=" text-2xl font-bold text-green-dark leading-tight">{data?.title1}</h3>
              <p className=" mt-10 whitespace-pre-wrap">{data?.description1}</p>
            </div>
            <div className="w-1/2">
              <Image src={data?.image1} alt="" width={500} height={453} />
            </div>
          </div>

          <div className=" flex mt-20 gap-10 justify-center">
            <div className="w-1/2">
              <Image src={data?.image2} alt="" width={500} height={453} />
            </div>
            <div className=" w-1/2 px-5 leading-loose">
              <h3 className=" text-2xl font-bold text-green-dark leading-tight">{data?.title2}</h3>
              <p className=" mt-10 whitespace-pre-wrap">{data?.description2} </p>
            </div>
          </div>
          <div className=" flex gap-10 mt-20 justify-center">
            <div className=" w-1/2 px-5 leading-loose">
              <h3 className=" text-2xl font-bold text-green-dark leading-tight">{data?.title3}</h3>
              <p className=" mt-10 whitespace-pre-wrap">{data?.description3}</p>
            </div>
            <div className="w-1/2">
              <Image src={data?.image3} alt="" width={500} height={453} />
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
            <div className=" absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className=" text-lg font-bold text-center">他のインタビューを見る</h2>
              <div className=" mt-10">
                <div className="flex gap-10 justify-between">
                  {prevId && (
                    <Link href={`/members/${prevId}`} legacyBehavior>
                      <a className="text-blue-500 hover:underline">
                        {' '}
                        <Image src={data?.image3} alt="" width={500} height={453} />
                        前のインタビュー
                      </a>
                    </Link>
                  )}
                  {nextId && (
                    <Link href={`/members/${nextId}`} legacyBehavior>
                      <a className="text-blue-500 hover:underline">
                        <Image src={data?.image3} alt="" width={500} height={453} />
                        次のインタビュー
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
