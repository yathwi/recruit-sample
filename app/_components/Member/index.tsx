import Image from 'next/image';
export const Member: React.FC = () => {
  return (
    <div className=" mx-auto max-w-[90%] mt-20 bg-gray-100">
      <div className=" px-20 pt-20 pb-10">
        <h2 className=" text-[70px]">{`Member's Voice`}</h2>
        <div className=" flex items-center font-bold">
          <div className=" w-10 border-t-2 border-gray-500 mr-3" />
          <p>社員インタビュー</p>
        </div>
        <div>
          <Image
            src="/img-hiring.jpg"
            alt="太光設備株式会社"
            className=" w-auto"
            width={300}
            height={700}
            priority
          />
          <p className=" mt-5 text-lg font-bold">安井海都</p>
        </div>
      </div>
    </div>
  );
};
