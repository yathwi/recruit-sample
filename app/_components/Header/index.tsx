import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className=" absolute top-0  w-full p-4 pt-8 pb-8 z-50 flex items-center justify-between">
      <Link href="/" className="flex">
        <Image
          src="/logo.png"
          alt="太光設備株式会社"
          className=" w-auto"
          width={60}
          height={75}
          priority
        />
      </Link>
    </header>
  );
}
