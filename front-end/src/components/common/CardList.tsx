import { SwiperSlide } from 'swiper/react';
import Card from './Card';
import SwiperContainer from './Swiper';
import { useYoutubePlayer } from '@/lib/zustand/useYoutubePlayer';

const data = [
  {
    title: 'TRUE LOVER (트루러버)',
    genre: 'dance',
    artist: '해루석, 히키킹, 권민, 행주',
    features: '신나는, 사랑, 단체곡, 랩, 아이돌, 가요제, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/l8e1Byk1Dx0',
    emotionName: '신나는',
    emotionReleted: '사랑',
  },
  {
    title: '그냥 살아!',
    genre: 'rock',
    artist: '뢴트게늄, 김치만두번영택사스가, 부정형인간, 비챤',
    features:
      '신나는, 단체곡, 밴드, 응원하는, 감동적인, 힘찬, 희망적인, 시원한, 가요제, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/K8WC6uWyC9I',
    emotionName: '신나는',
    emotionReleted: '응원하는, 감동적인, 희망적인, 힘찬, 시원한',
  },
  {
    title: '맘가는대로',
    genre: 'dance',
    artist: '새우튀김, 캘리칼리 데이비슨, 프리터, 고세구',
    features: '신나는, 단체곡, 힙합, 화려한, 축제, 가요제, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/YmELthNomns',
    emotionName: '신나는',
    emotionReleted: '축제, 화려한',
  },
  {
    title: 'ShowDown(쇼다운)',
    genre: 'swing jazz',
    artist: '비밀소녀, 곽춘식, 이덕수할아바이, 아이네',
    features: '신나는, 단체곡, 재즈, 매혹적인, 가요제, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/YZ0xA3LUzNQ',
    emotionName: '신나는',
    emotionReleted: '매혹적인',
  },
  {
    title: 'How To Love',
    genre: 'dance',
    artist: '도파민박사, 풍신, 소피아, 징버거',
    features: '신나는, 단체곡, 댄스, 귀여운, 달달한, 가요제, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/owlLg3R9u6c',
    emotionName: '신나는',
    emotionReleted: '사랑, 귀여운, 달달한',
  },
  {
    title: '전하지 못한 진심',
    genre: 'ballad',
    artist: '아이네, 비챤, 릴파, 해루석',
    features:
      '슬픔, 아련한, 잔잔한, 사랑, 벅차오르는, 단체곡, 발라드, 이세돌, 고멤',
    youtubeLink: 'https://youtu.be/pl38om066m0',
    emotionName: '슬픔',
    emotionReleted: '아련한, 사랑, 그리움, 벅차오르는',
  },
];

export default function CardList() {
  const { pauseMusic, playMusic } = useYoutubePlayer((state) => ({
    playMusic: state.playMusic,
    pauseMusic: state.pauseMusic,
  }));
  return (
    <SwiperContainer>
      {data.map((item, index) => {
        const videoId = item.youtubeLink.split('be/')[1];
        return (
          <SwiperSlide key={`${videoId + index}`}>
            <Card
              key={`${videoId + index}`}
              videoId={videoId}
              title={item.title}
              autoPlay={index === 0}
              features={['신나는', '사랑', '단체곡', '랩']}
              onPlay={(value: string) => {
                playMusic('playing', value, index);
              }}
              onPause={() => {
                pauseMusic('stop');
              }}
            />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
}
