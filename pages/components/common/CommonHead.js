import Head from 'next/head'

/**
 * 共通の headタグ を設定する。
 * 
 * @returns headタグ
 */
export default function CommonHead () {
  return (
    <Head>
      <title>test</title>
      <meta charSet="UTF-8" />
    </Head>
  )
}