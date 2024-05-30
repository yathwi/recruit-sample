import Image from 'next/image';
import Link from 'next/link';
export const Cta: React.FC = () => {
  return (
    <Link href="/entry">
      <div className="  hover:opacity-80 w-full text-white">
        <Image
          src="/top/CTA-bg.png"
          width={1280}
          height={313}
          alt="エントリーCTA"
          className=" w-full"
        />
        {/* <div className=" text-center">
          <h2 className=" text-2xl ">「この道の先に」、挑戦しよう</h2>
        </div>
        <div className=" flex justify-center">
          <button className=" text-[72px] font-bold hover:opacity-80">ENTRY</button>
        </div> */}
      </div>
    </Link>
  );
};
