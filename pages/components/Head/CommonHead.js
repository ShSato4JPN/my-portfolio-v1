/**
 * 【共通部品】
 * 全画面共通の headタグ を生成
 * 
 * @returns head
 */

import Head from 'next/head'

export default function CommonHead () {
  return (
    <Head>
      <title>test</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
  )
}