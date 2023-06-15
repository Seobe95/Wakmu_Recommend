import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { useSwipeSlider } from '@/lib/zustand/useSwipeSlider';
import { useYoutubePlayer } from '@/lib/zustand/useYoutubePlayer';
import { useEffect, useState } from 'react';
import Youtube, { YouTubePlayer } from 'react-youtube';
import { Button, Tags } from '../base';
import useFeatures from '@/lib/zustand/useFeatures';
import { useSongsModal } from '@/lib/zustand/useSongModal';

interface CardProps {
  videoId: string;
  autoPlay: boolean;
  title: string;
  features: string[];
  artists: string[];
  onPlay: (title: string) => void;
  onPause: () => void;
}

export default function Card({
  autoPlay = false,
  title,
  videoId,
  artists,
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
  const usersFeatures = useFeatures((state) => state.features);
  const { setIsModalOpen } = useSongsModal((state) => ({
    setIsModalOpen: state.setIsOpen,
  }));
  useEffect(() => {
    if (playPage !== currentSwipePage) {
      player?.pauseVideo();
    }
  }, [currentSwipePage]);

  return (
    <div className="mx-auto w-[462px] pt-[50px] pb-[50px] rounded-xl max-[480px]:w-full max-[480px]:mx-auto bg-slate-50">
      <p className="text-center text-lg">{title}</p>
      <Youtube
        className="youtube"
        iframeClassName="youtube"
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
      <Tags features={features} usersFeatures={usersFeatures} />
      <div className="flex justify-center">
        <Button
          buttonType="submit"
          name="이 노래에 태그 추가하기"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
}
