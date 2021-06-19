/**
 * 【共通部品】
 * ページ上部に表示するタイトルバー
 * 
 * @returns TitleBar
 */

import layout from './TitleBar.module.css'

export default function TitleBar (props) {
  return (
    <div className={layout.titlebar}>
      <div className={`${layout.titlebar_elem} ${layout.titlebar_title}`}>　　{props.title}</div>
      <div className={`${layout.titlebar_elem} ${layout.titlebar_closebtn}`}>✕</div>
    </div>
  )
}