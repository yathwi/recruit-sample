import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <div className=" flex relative  lg:h-[800px] h-[500px] pt-52 justify-center">
      <Image src="/add/noisy-gradients.jpg" alt="太光設備株式会社" fill className=" object-cover" />
      <div className=" absolute text-white z-10">
        <h1 className=" font-cinzel lg:text-[120px] text-2xl leading-tight font-cinzel">
          Driving the World
          <br />
          with Technology.
        </h1>
      </div>
    </div>
  );
};
