import Image from 'next/image';
import Link from 'next/link';

export interface IconProps {
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  linkTarget: string;
  iconType: 'round' | "default"
}

export default function Icon({
  imageAlt,
  imageHeight,
  imageSrc,
  imageWidth,
  linkHref,
  linkTarget,
  iconType = "default"
}: IconProps) {
  return (
      <Link href={linkHref} target={linkTarget}>
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
          />
        </div>
      </Link>
  );
}
