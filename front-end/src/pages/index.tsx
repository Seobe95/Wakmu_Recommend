import Button from '@/components/base/Button';
import apiClient from '@/lib/api/apiClient';
import { GetSongsTypes, WakmuSongs } from '@/lib/api/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Inter } from 'next/font/google';

export interface HomeProps {
  songs: WakmuSongs[];
  features: string[];
}

export default function Home({ songs, features }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>왁뮤에서 알맞은 노래를 찾아보세요.</h1>
      <Button name="test" isSelected={true} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<GetSongsTypes> = async () => {
  const response = await apiClient.get<GetSongsTypes>('api/songs');

  return { props: { songs: response.data.songs, features: response.data.features } };
};
