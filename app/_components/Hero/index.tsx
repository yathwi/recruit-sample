import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = (props) => {
  return (
    <div id="header" className=" flex relative  lg:h-screen h-[500px]  justify-center">
      <Image
        id="image"
        src="/top/fv-sample.jpg"
        alt="太光設備株式会社"
        fill
        className=" object-cover"
      />
      <div className=" absolute left-20 bottom-28 text-white z-10">
        <h1 id="h1" className=" tracking-widest px-2 lg:text-[57px] text-2xl leading-tight">
          目指す場所があるから
          <br />
          新たな<span className=" text-red-500">道</span>は拓かれる
        </h1>
      </div>
    </div>
  );
};
