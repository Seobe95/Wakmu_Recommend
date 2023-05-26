import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {}
export default function Footer() {
  return (
    <div
      className={`flex w-[768px] max-[1024px]:w-[768px] max-[768px]:w-5/6 max-[480px]:w-full bg-white justify-center pb-4 pt-8`}
    >
      <ul className="flex flex-row space-x-3 justify-center items-center">
        <li className="first:ml-0">
          <Link href="https://www.youtube.com/@woowakgood" target="_blank">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={'/wakdu.jpeg'}
                alt="우왁굳의 게임방송 아이콘"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@waktaverse" target="_blank">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={'/waktaverse.jpeg'}
                alt="왁타버스 아이콘"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@wakzero" target="_blank">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={'/wak-zero.jpeg'}
                alt="왁타버스 제로 아이콘"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
        <li className="last:mr-0">
          <Link href="https://www.youtube.com/@wakthief" target="_blank">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={'/dotgeo.jpeg'}
                alt="우왁굳의 돚거 아이콘"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
