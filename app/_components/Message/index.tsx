import Image from 'next/image';
import { Button } from '../ui/button';

export const Message: React.FC = () => {
  return (
    <div className="  mt-10">
      <h2 className=" text-[70px] text-right mr-[5%]">Message</h2>{' '}
      <div className=" flex justify-end">
        <div className=" max-w-[25%] mr-20 lg:mt-28">
          <h3 className=" font-bold text-lg">テクノロジーで世界を動かす</h3>
          <p className=" lg:mt-10 leading-[40px]">
            私たちテックイノベイト株式会社は、
            <br />
            イノベーションを核とした技術ソリューションを提供するIT企業です。
            <br />
            最先端のテクノロジーと創造的なアプローチを駆使して、ビジネスの課題に対する革新的な解決策を提供しています。
            <br />
            当社は、顧客の成功が私たちの成功であるという信念のもと、常に顧客第一を心がけています。また、持続可能で環境に優しいビジネスモデルを推進し、社会全体の利益に貢献することを目指しています。
          </p>
          <div className=" mt-10">
            <Button name="more >>" />
          </div>
        </div>
        <div className=" text-left w-[60%]">
          <Image
            src="/add/message.jpg"
            alt="太光設備株式会社"
            className="w-full"
            width={700}
            height={433}
            priority
          />
        </div>
      </div>
    </div>
  );
};
