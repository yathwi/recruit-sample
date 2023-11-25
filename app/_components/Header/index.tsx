import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
const navItems = [
  {
    name: 'メッセージ',
    path: 'message',
  },
  {
    name: ' 社員インタビュー',
    path: 'interview',
  },
  {
    name: '数字で見る',
    path: 'numbers',
  },
  {
    name: '募集職種',
    path: 'recruit',
  },
  {
    name: 'お知らせ',
    path: 'news',
  },
];

export default function Header() {
  return (
    <header className=" bg-white max-w-[90%] p-4 pt-8 pb-8 z-50 flex items-center justify-between">
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
      <ul className=" flex">
        {navItems.map((item) => (
          <li key={item.path} className="inline-block ml-4">
            {item.name}
          </li>
        ))}
      </ul>
    </header>
  );
}
