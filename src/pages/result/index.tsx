import { ItemList } from '@/components/base';
import { Card } from '@/components/common';
import SongsModal from '@/components/common/SongsModal';
import { useRecommendSongs } from '@/lib/zustand/useRecommendSongs';
import { useYoutubePlayer } from '@/lib/zustand/useYoutubePlayer';

export default function index() {
  const { recommendSongs } = useRecommendSongs((state) => ({
    recommendSongs: state.songs,
  }));
  const { pauseMusic, playMusic } = useYoutubePlayer((state) => ({
    playMusic: state.playMusic,
    pauseMusic: state.pauseMusic,
  }));

  return (
    <>
      <SongsModal />
      {recommendSongs && (
        <div className="w-full">
          <ItemList
            data={recommendSongs}
            renderItems={({ item, index }) => {
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
            }}
          />
        </div>
      )}
    </>
  );
}
