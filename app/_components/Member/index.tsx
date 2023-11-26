import Image from 'next/image';

const MemberList = [
  {
    name: '安井海都',
    src: '/add/peaple1.jpg',
  },
  {
    name: '安井海都',
    src: '/add/peaple2.jpg',
  },
  {
    name: '安井海都',
    src: '/add/peaple3.jpg',
  },
];

export const Member: React.FC = () => {
  return (
    <div className=" mx-auto max-w-[80%] mt-20 bg-gray-100">
      <div className=" px-20 pt-20 pb-10">
        <h2 className=" text-[70px]">{`Member's Voice`}</h2>
        <div className=" flex items-center font-bold">
          <div className=" w-10 border-t-2 border-gray-500 mr-3" />
          <p>社員インタビュー</p>
        </div>
        <div className=" flex mt-20">
          {MemberList.map((member, index) => (
            <div key={index} className=" mx-5">
              <Image
                src={member.src}
                alt="太光設備株式会社"
                className="mx-5"
                width={415}
                height={519}
                priority
              />
              <p className="mt-5 ml-5 font-bold">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
