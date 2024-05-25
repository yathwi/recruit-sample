import Link from 'next/link';
import PageHeaderTextBlack from './_components/PageHeader/PageHeaderTextBlack';
import { Cta } from './_components/Cta';
import Breadcrumb from './_components/ui/Breadcrumb';

const Imtes = [
  { href: '/', label: 'ホーム' },
  { href: '/', label: '404 Page Not Found' },
];
export default function Page() {
  return (
    <div className=" bg-green-main">
      <PageHeaderTextBlack />
      <div className=" text-center pt-40">
        <h1 className="text-[48px]">404 Page Not Found</h1>
        <div className=" h-1 mx-auto my-10 w-40 bg-green-500" />
        <p className="text-2xl">お探しのページが見つかりませんでした。</p>
        <p>
          お探しのページは一時的にアクセスができない状況にあるか、移動もしくは削除された可能性があります。
          直接アドレスを入力された場合は、アドレスが正しく入力されているかもう一度ご確認下さい。
        </p>
      </div>
      <div className=" pt-20 pb-40 opacity-80 flex justify-center">
        <Link href="/" className=" px-7 py-3 bg-green-500 text-white font-bold">
          トップページに戻る
        </Link>
      </div>
      <Breadcrumb items={Imtes} />
      <Cta />{' '}
    </div>
  );
}
