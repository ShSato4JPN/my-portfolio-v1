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
      <title>ZONO-TERMINAL</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="shortcut icon" href="/static/favicon-32x32.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@300&display=swap" rel="stylesheet" />
    </Head>
  )
}