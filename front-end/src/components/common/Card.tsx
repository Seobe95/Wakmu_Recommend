import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { useSwipeSlider } from '@/lib/zustand/useSwipeSlider';
import { useYoutubePlayer } from '@/lib/zustand/useYoutubePlayer';
import { useEffect, useState } from 'react';
import Youtube, { YouTubePlayer } from 'react-youtube';

interface CardProps {
  videoId: string;
  autoPlay: boolean;
  title: string;
  features: string[];
  onPlay: (title: string) => void;
  onPause: () => void;
}

export default function Card({
  autoPlay = false,
  title,
  videoId,
  features,
  onPlay,
  onPause,
}: CardProps) {
  const { windowSize } = useWindowSize();
  const { currentSwipePage } = useSwipeSlider((state) => ({
    currentSwipePage: state.currentFocusPage,
  }));
  const { playPage } = useYoutubePlayer((state) => ({
    playPage: state.playPage,
  }));
  const [player, setPlayer] = useState<YouTubePlayer>();

  useEffect(() => {
    if (playPage !== currentSwipePage) {
      player?.pauseVideo();
    }
  }, [currentSwipePage]);

  return (
    <div className="mx-auto w-[462px] pt-[50px] pb-[50px] bg-slate-100 rounded-xl max-[480px]:w-[270px] max-[480px]:mx-auto">
      <Youtube
        videoId={videoId}
        opts={{
          width: windowSize.width,
          height: windowSize.height,
          playerVars: {
            autoplay: autoPlay ? 1 : 0,
          },
        }}
        onPlay={() => {
          onPlay(title);
        }}
        onPause={() => {
          onPause();
        }}
        onReady={(event) => {
          setPlayer(event.target);
        }}
      />
      <div className="flex flex-row justify-center items-center">
        {features.map((item) => {
          return (
            <p className="px-2" key={item}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
