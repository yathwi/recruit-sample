'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" bg-white  text-white">
      <div className=" hidden ml-[5%]  mx-auto absolute top-0 left-0 right-0 pt-8 pb-8 z-50 pc:flex items-center justify-between">
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
            <li key={item.path} className=" -mt-3 cursor-pointer hover:underline inline-block ml-4">
              {item.name}
            </li>
          ))}{' '}
          <button className=" hover:opacity-80 ml-4 px-16 text-lg  pt-10 pb-8 -mt-16 top-0 bg-[#28C7E4]">
            ENTRY
          </button>
        </ul>
      </div>
      <div className=" md:hidden   ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-center z-50 absolute top-5 right-5 justify-center w-10 h-10"
        >
          <div
            className={`h-1 w-8 bg-white mb-1 transition-transform ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`h-1 w-8 bg-white mb-1 transition-transform ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></div>
        </button>
        {isOpen && (
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gray-200 z-[30]">
            <ul className=" flex flex-col mt-10 items-center justify-center">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className=" mt-5 cursor-pointer hover:underline inline-block ml-4"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
