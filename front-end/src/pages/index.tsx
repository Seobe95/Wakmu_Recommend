import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { GetSongsTypes, WakmuSongs } from '@/lib/api/types';
import FeatureList from '@/components/common/FeatureList';
import apiClient from '@/lib/api/apiClient';
import { Button } from '@/components/base';

export interface HomeProps {
  songs: WakmuSongs[];
  features: string[];
}

export default function Home({
  songs,
  features,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <section>
      <h1 className="text-center pb-8 max-[480px]:pb-4">
        마음에 드는 태그를 선택하세요!
        <br />
        선택한 태그에 맞게 노래를 추천해드립니다.
      </h1>
      <FeatureList features={features} />
      <div className='w-full flex justify-center pt-8'>
        <Button name="노래 찾기" buttonType="submit" />
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps<
  GetSongsTypes
> = async () => {
  const { data } = await apiClient.get<GetSongsTypes>('api/songs');

  return {
    props: {
      songs: data.songs,
      features: data.features,
    },
  };
};
