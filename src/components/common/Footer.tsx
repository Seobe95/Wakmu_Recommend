import { Icon } from '../base';

const footerIconArr = [
  {
    imageAlt: '우왁굳의 게임방송 아이콘',
    imageSrc: '/wakdu.jpeg',
    imageWidth: 40,
    imageHeight: 40,
    linkHref: 'https://www.youtube.com/@woowakgood',
    linkTarget: '_blank',
  },
  {
    imageAlt: '왁타버스 아이콘',
    imageSrc: '/waktaverse.jpeg',
    imageWidth: 40,
    imageHeight: 40,
    linkHref: 'https://www.youtube.com/@waktaverse',
    linkTarget: '_blank',
  },
  {
    imageAlt: '왁타버스 제로 아이콘',
    imageSrc: '/wak-zero.jpeg',
    imageWidth: 40,
    imageHeight: 40,
    linkHref: 'https://www.youtube.com/@wakzero',
    linkTarget: '_blank',
  },
  {
    imageAlt: '우왁굳의 돚거 아이콘',
    imageSrc: '/dotgeo.jpeg',
    imageWidth: 40,
    imageHeight: 40,
    linkHref: 'https://www.youtube.com/@wakthief',
    linkTarget: '_blank',
  },
];

export default function Footer() {
  return (
    <div
      className={`flex w-[768px] max-[1024px]:w-[768px] max-[768px]:w-5/6 max-[480px]:w-full bg-white justify-center pb-4 pt-8`}
    >
      <ul className="flex flex-row space-x-3 justify-center items-center">
        {footerIconArr.map((item, index) => {
          return (
            <li className="first:ml-0 last:mr-0" key={`${item.imageAlt + index}`}>
              <Icon
                imageAlt={item.imageAlt}
                imageSrc={item.imageSrc}
                imageWidth={item.imageWidth}
                imageHeight={item.imageHeight}
                linkHref={item.linkHref}
                linkTarget={item.linkTarget}
                iconType='round'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
