import Image from 'next/image';
import { Button } from '../ui/button';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export const JobList: React.FC = () => {
  return (
    <div className=" max-w-[90%] mx-auto mt-10">
      <h2 className=" text-[70px] text-left">Job List</h2>{' '}
      <div className=" flex items-center font-bold">
        <div className=" w-10 border-t-2 border-gray-500 mr-3" />
        <h3 className=" font-bold text-lg">募集職種</h3>
      </div>
      <div className=" mt-20 flex justify-center border-t pt-10 max-w-[80%] mx-auto">
        <div className="w-[40%] pr-10 border-r-2">
          <div className=" flex items-center">
            <p className=" mr-2 text-lg font-bold">ソフトウェアエンジニア </p>
            <IoIosArrowDroprightCircle size="20px" />
          </div>
          <p className=" mt-5">
            最新のクラウド技術とAIを使用してビジネスソリューションを開発。チームと協力して、コードを書き、テストし、デプロイします。
          </p>
        </div>
        <div className="w-[40%] pl-10">
          <div className=" flex items-center">
            <p className=" mr-2 text-lg font-bold">デジタルマーケター</p>
            <IoIosArrowDroprightCircle size="20px" />
          </div>
          <p className=" mt-5">
            オンライン広告、SNSキャンペーン、SEO戦略を通じてブランドの認知度を向上。データ分析を基に効果的なマーケティング計画を立案・実施します。
          </p>
        </div>
      </div>
      <div className=" flex justify-center mt-20">
        <button className=" bg-[#28C7E4] hover:opacity-80 text-white font-bold py-5 px-20 rounded">
          ENTRY
        </button>
      </div>
    </div>
  );
};
