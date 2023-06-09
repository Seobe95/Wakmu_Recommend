import Card from './Card';
import { useYoutubePlayer } from '@/lib/zustand/useYoutubePlayer';
import { WakmuSongs } from '@/lib/api/types';

interface CardListProps {
  songs: WakmuSongs[];
}

export default function CardList({songs}: CardListProps) {
  const { pauseMusic, playMusic } = useYoutubePlayer((state) => ({
    playMusic: state.playMusic,
    pauseMusic: state.pauseMusic,
  }));
  return (
    <>
      {songs.map((item, index) => {
        const videoId = item.youtubeLink.split('be/')[1];
        return (
          <Card
            key={`${videoId + index}`}
            videoId={videoId}
            title={item.title}
            autoPlay={index === 0}
            artists={item.artist}
            features={item.features}
            onPlay={(value: string) => {
              playMusic('playing', value, index);
            }}
            onPause={() => {
              pauseMusic('stop');
            }}
          />
        );
      })}
    </>
  );
}
