import { render, screen } from '@testing-library/react';
import Home, { HomeProps } from '@/pages';
import '@testing-library/jest-dom';

describe('Home', () => {
  const initialProps: HomeProps = {
    songs: [
      {
        _id: '6464de27e45effceefd2db5c',
        title: 'TRUE LOVER (트루러버)',
        genre: 'dance',
        artist: ['해루석', '히키킹', '권민', '행주'],
        features: ['신나는', '사랑', '단체곡', '랩', '아이돌', '가요제', '이세돌', '고멤'],
        youtubeLink: 'https://youtu.be/l8e1Byk1Dx0',
        emotionName: '신나는',
        emotionReleted: ['신나는', '사랑', '단체곡', '랩', '아이돌', '가요제', '이세돌', '고멤'],
      },
    ],
    features: ['사랑', '슬픔'],
  };
  
  it('renders a heading', () => {
    render(<Home {...initialProps} />);

    const heading = screen.getByRole('heading', {
      name: /왁뮤에서 알맞은 노래를 찾아보세요./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Home {...initialProps} />);
    expect(container).toMatchSnapshot();
  });
});
