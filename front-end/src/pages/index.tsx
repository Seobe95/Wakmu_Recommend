import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { GetSongsTypes, WakmuSongs } from '@/lib/api/types';
import FeatureList from '@/components/common/FeatureList';
import apiClient from '@/lib/api/apiClient';
import { Button } from '@/components/base';
import { isAxiosError } from 'axios';
import useFeatures from '@/lib/zustand/useFeatures';
import { shallow } from 'zustand/shallow';

export interface HomeProps {
  data?: {
    songs: WakmuSongs[];
    features: string[];
  };
  error?: string;
}

export default function Home({
  data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { features } = useFeatures(
    (state) => ({ features: state.features }),
    shallow,
  );

  return (
    <section className="w-full">
      {data && (
        <>
          <h1 className="text-center pb-8 max-[480px]:pb-4">
            마음에 드는 태그를 선택하세요!
            <br />
            선택한 태그에 맞게 노래를 추천해드립니다.
          </h1>
          <FeatureList features={data.features} />
          <div className="w-full flex justify-center pt-8">
            <Button
              name="노래 찾기"
              buttonType="submit"
              onClick={() => {
                console.log(features);
              }}
            />
          </div>
        </>
      )}
      {error && (
        <div className="text-center">
          <p className="pb-8">에러가 발생하였습니다.</p>
          <Button
            buttonType="submit"
            name="다시 시도하기"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
      )}
    </section>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const { data } = await apiClient.get<GetSongsTypes>('api/songs');
    return {
      props: {
        data: { songs: data.songs, features: data.features },
      },
    };
  } catch (e) {
    if (isAxiosError(e)) {
      return { props: { error: e.message } };
    } else {
      return { props: { error: '에러발생' } };
    }
  }
};
