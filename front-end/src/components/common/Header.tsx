import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {}

export default function Header() {
  return (
    <header className="flex flex-row h-[50px] bg-white items-center ocerflow px-8 max-[768px]:px-4 max-[480px]:px-2">
      <nav className="w-full flex flex-row justify-between items-center">
        <Link href="/">
          <div className="w-[130px] max-[480px]:w-[100px]">
            <Image
              src={'/title.png'}
              alt="헤더 이미지"
              width="500"
              height="100"
            />
          </div>
        </Link>
        <ul className="flex felx-row justify-center items-center space-x-4">
          <li>
            <Link href="https://www.twitch.tv/woowakgood" target="_blank">
              <div className="w-[30px] max-[480px]:w-[25px]">
                <Image
                  src={'/dowitch.png'}
                  alt="우왁굳 트위치 방송 이동 아이콘"
                  width="30"
                  height="30"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://cafe.naver.com/steamindiegame" target="_blank">
              <div className="w-[40px] h-[40px] max-[480px]:w-[30px] max-[480px]:h-[30px]">
                <Image
                  src={'/wakiver.png'}
                  alt="왁물원 이동 아이콘"
                  width="40"
                  height="40"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
