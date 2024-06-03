import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import Image from 'next/image';

const Items = [
  {
    src: '',
    title: '若手から責任ある仕事に挑戦したい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    src: '',
    title: '業界最大手ならではの大規模工事に携わりたい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    src: '',
    title: '整った環境で技術を磨きスキルアップしたい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
];

const data = [
  {
    category: '募集職種',
    content: {
      general: [
        '総合職',
        '国内外を問わず、様々な業務や分野で知識・経験を積み、将来は管理・専門業務などを担うするコース',
      ],
      area: [
        'エリア総合職',
        '全国のエリアの中、一定地域で知識・経験を積み、一定の分野での管理・専門業務等のエキスパートを目指すコース※上木系職種のみ募集',
      ],
    },
  },
  {
    category: '募集要項',
    content: {
      requirements: {
        general: [
          '技術系：土木系・建築系・機械系・電気系（施工管理、アスファルトプラント業務、研究開発、設計、建設機械管理、品質管理、試験 他）',
          '事務系：総務業務・営業（企画、積算、入札、管理、現業管理事務 他）',
        ],
        area: ['技術系：土木系（施工管理、品質管理、試験 他）'],
      },
      people: [
        '技術系（土木系・建築系・機械系・電気系）： 65名（内10名は女性専用）',
        '事務系： 15名（内7名は女性専用）',
        '技術系、事務系ともに、総合職・エリア総合職をあわせた人数です。エリア総合職(土木系)については若干名の募集となります。女性の積極採用を行っています。',
      ],
      workLocation: {
        general: ['総務を含む全事業所'],
        area: [
          '北海道、東北、関東、北信越、中部、関西、四国、中国、九州の9エリアの各部門の事業所※エリアの区分については「ユーポートサイトの募集要項」をご確認ください',
        ],
      },
      graduateSchool: {
        master: ['土木、建築、機械、電気他'],
        doctor: ['不問'],
        note: '※現場系に限り、既卒者も応募可（卒後3年以内）',
      },
      selectionProcess:
        '内容：9:00～17:50\n時期：8:30～17:00\n※筆記所によって異なります\n※実施7都市50分（休憩60分）',
    },
  },
  {
    category: '初任給',
    content: {
      general: {
        master: '月額290,000円',
        university: '月額270,000円',
        highSchool: '月額250,000円',
        technicalSchool: '月額250,000円',
      },
      area: {
        master: '月額227,000円～250,000円',
        university: '月額212,000円～235,000円',
        technicalSchool: '月額212,000円～235,000円',
      },
    },
  },
];

export default async function Page() {
  return (
    <div className="bg-green-main font-hiragino">
      <PageHeaderTextBlack />
      <div>
        <div className="relative pt-60 h-[500px] text-center font-bold">
          <h2 className="absolute font-oswald pt-40 text-green-500 opacity-20 left-[-600px] top-[600px] text-end rotate-90 text-[288px]">
            RECRUITMENT
          </h2>
          <h1 className="text-[48px]">募集要項</h1>{' '}
        </div>
      </div>
      <div className=" relative w-[80%] py-10 mx-auto px-10 bg-white">
        <h2 className=" text-xl font-bold text-center">NIPPOで目指せること</h2>
        <div className=" flex mt-10">
          {Items.map((item, index) => (
            <div key={index} className={`${index === 1 ? 'border-x' : ''} px-5`}>
              <Image src={item.src} width={100} height={100} alt="" />
              <h3 className=" text-lg font-bold text-[#10467F]">{item.title}</h3>
              <p className=" mt-5">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
