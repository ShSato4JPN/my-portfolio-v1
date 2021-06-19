/**
 * 【共通部品】
 * 画面上にページを表示する要素(ブラウザ的な役割)
 * 
 * @returns Browser
 */

 import TitleBar from '../TitleBar/TitleBar'
 import layout from './Browser.module.css'

 export default function Browser (props) {
   return (
     <div className={ layout.browser }>
       <TitleBar title= {props.title } />
       <div className={ layout.browser_body }>
         {props.children}
       </div>
     </div>
   )
 }