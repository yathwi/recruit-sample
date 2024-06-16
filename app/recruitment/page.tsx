import PageHeaderTextBlack from '../_components/PageHeader/PageHeaderTextBlack';
import Image from 'next/image';
import styles from './Interview.module.css';

const Items = [
  {
    src: '/top/recruitment/icon-1.png',
    title: '若手から責任ある仕事に挑戦したい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    src: '/top/recruitment/icon-2.png',
    title: '業界最大手ならではの大規模工事に携わりたい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
  {
    src: '/top/recruitment/icon-3.png',
    title: '整った環境で技術を磨きスキルアップしたい',
    text: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
  },
];

const data = [
  {
    category: '募集コース',
    content: [
      {
        h3: '',
        p: '募集コースには「総合職」と「エリア総合職」があります。',
      },
      {
        h3: '総合職',
        p: '国内外を問わず、様々な業務や分野で知識・経験を積み、将来は管理・専門業務などを指向するコース',
      },
      {
        h3: 'エリア総合職',
        p: '全国のエリアの内、一定地域で知識・経験を積み、一定の分野での管理・専門業務等のエキスパートを指向するコース\n※土木系職種のみ募集',
      },
    ],
  },
  {
    category: '住まい',
    content: [
      {
        h3: '社宅制度',
        p: '業務都合により住居が必要となる場合、社宅が貸与されます。\n新入社員が独身社宅に入居した場合、月額6,000円、２年目以降の社員は月額12,000円の負担で居住できます。転勤等に加え、結婚による新規世帯形成時にも社宅が貸与されます。(年齢制限あり)',
      },
      {
        h3: '住宅手当',
        p: '持ち家の取得など社宅を使用しない場合、住宅手当が支給されます。',
      },
    ],
  },
];

const infos = [
  {
    category: '募集職種',
    content: [
      '技術系：土木系・建築系・機械系・電気系（施工管理、アスファルトプラント業務、研究開発、設計、建設機械管理、品質管理、試験 他）',
      '事務系：総務事務・営業（企画、積算、入札、管理、現業管理事務 他）',
      '技術系：土木系（施工管理、品質管理、試験 他）',
    ],
  },
  {
    category: '求人数（予定）',
    content: [
      '技術系（土木系・建築系・機械系・電気系）： 65名（内10名は女性専用）',
      '事務系： 15名（内7名は女性専用）',
      '技術系、事務系ともに、総合職・エリア総合職をあわせた人数です。\nエリア総合職(土木系)については若干名の募集となります。\n女性の積極採用を行っています。',
    ],
  },
  {
    category: '勤務地',
    content: [
      '【総合職】\n総務を含む全事業所',
      '【エリア総合職】\n北海道、東北、関東、北信越、中部、関西、四国、中国、九州の9エリアの各部門の事業所\n※エリアの区分については「ユーポートサイトの募集要項」をご確認ください',
    ],
  },
  {
    category: '募集学科',
    content: [
      '【技術系】\n土木、建築、機械、電気他',
      '【事務系】\n不問',
      '※技術系に限り、既卒者も応募可（卒後3年以内）',
    ],
  },
  {
    category: '勤務時間',
    content: [
      '内勤　9:00～17:50外勤\n8:30～17:20\n※事業所によって異なります\n※実働7時間50分（休憩60分）',
    ],
  },
  {
    category: '初任給',
    content: [
      '【総合職】\n2024年4月実績\n大学院了　　月給290,000円\n大学卒　　　月給270,000円\n高専卒　　　月給250,000円\n専門学校卒　月給250,000円',
      '【エリア総合職】\n2024年4月実績\n大学卒　　　月給227,000円～250,000円\n高専卒　　　月給212,000円～235,000円\n専門学校卒　月給212,000円～235,000円',
    ],
  },
  {
    category: '昇給',
    content: ['年1回（4月）'],
  },
  {
    category: '休日・休暇',
    content: [
      '完全週休２日制(土日)・祝日・ゴールデンウィーク・夏季・年末年始休暇・有給休暇(12-20日)・創立記念日・リフレッシュ休暇(最長14日)・慶弔特別休暇(1-7日)・ボランティア休暇・傷病休暇・看護休暇・介護休暇 他',
    ],
  },
  {
    category: '保険',
    content: ['健康保険、厚生年金保険、雇用保険、労災保険'],
  },
  {
    category: '諸手当',
    content: [
      '通勤手当、住宅手当、教育補助手当、超過勤務手当、単身赴任者への帰宅手当、新入社員に対する帰省手当 他',
    ],
  },
  {
    category: '住居',
    content: ['独身寮・社宅制度'],
  },
  {
    category: '応募方法',
    content: [
      '技術系　学校推薦・自由応募\n事務系　自由応募\nまずは当社HPまたはマイナビ2025よりエントリーしてください。',
    ],
  },
  {
    category: '選考方法',
    content: ['面接・作文・WEBテスト（基礎能力検査・性格検査）'],
  },
  {
    category: '提出書類',
    content: [
      'エントリーシート、成績証明書(※1)、推薦書(技術系)、卒業(見込)証明書(※2)、健康診断書(※2)\n※1　履修履歴データベースより送信していただきます\n※2　内々定後に提出していただきます',
    ],
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
            <div key={index} className={`${index === 1 ? 'border-x' : ''} px-16`}>
              <Image
                src={item.src}
                width={63}
                height={63}
                alt={item.title}
                className="mx-auto py-5"
              />
              <h3 className=" text-lg font-bold text-[#10467F]">{item.title}</h3>
              <p className=" mt-5">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 relative mt-20 py-10 bg-white opacity-70">
        {/* <div className=" h-screen w-screen blur-2xl bg-[#F7F7F7] opacity-80 top-0  absolute"></div> */}
        <div className="  w-[80%] mx-auto relative z-10">
          <div className=" flex">
            <h2 className=" font-bold mr-20 text-[40px]">募集コース</h2>
            <div className="">
              {data[0].content.map((item, index) => (
                <div key={index} className="mt-5">
                  <h3 className=" text-lg font-bold">{item.h3}</h3>
                  <p className=" whitespace-pre-wrap">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-20 text-[40px]">募集要項</h2>
            <table>
              <tbody>
                {infos.map((info, index) => (
                  <tr key={index} className=" border-y">
                    <th className=" w-[15%] text-lg font-bold text-left pl-5 ">{info.category}</th>
                    <td className=" px-10">
                      <ul className=" py-5">
                        {info.content.map((text, i: any) => (
                          <li className={` ${(i = 0 ? '' : 'pt-5')} whitespace-pre-wrap`} key={i}>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
