import Head from 'next/head';

export default function SEO() {
  const keywords = ['왁타버스', '음악추천', '우왁굳', '이세돌', '고정멤버'].join(', ');
  return (
    <Head>
      <title>{'왁타버스 뮤직 추천기'}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={'왁타버스의 음악들을 사용자의 선택에 따라 선곡해 드립니다.'} />
      <meta name="keywords" content={keywords} />
      <meta property="og:site_name" content="wakta_recommend.com" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
