'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import { useState } from 'react';
const navItems = [
  {
    name: '事業内容',
    path: 'jobs',
  },
  {
    name: ' 施工事例',
    path: 'case',
  },
  {
    name: '社員紹介',
    path: 'members',
  },
  {
    name: '数字で見る',
    path: '#numbers',
  },
  {
    name: '募集要項',
    path: 'recruit',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="  ">
      <div className="  ml-[5%] hidden  font-oswald font-bold mx-auto absolute top-0 left-0 right-0 pt-8 pb-8 z-50 lg:flex items-center justify-between">
        <Link href="/" className="flex">
          <Image src="/top/logo.png" alt="株式会社NIPPOロゴ" className=" " width={99} height={29} />
        </Link>
        <ul className=" flex items-center">
          {navItems.map((item) => (
            <li
              key={item.path}
              className=" -mt-3 cursor-pointer text-[16px] hover:underline inline-block ml-8"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
          <button className=" hover:opacity-8 ml-8 px-16 text-lg  pt-12 pb-8 -mt-12 text-white top-0 bg-green-500">
            ENTRY
          </button>
        </ul>
      </div>
      <div className=" md:hidden ">
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
