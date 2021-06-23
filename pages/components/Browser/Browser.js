/**
 * 【共通部品】
 * 画面上にページを表示する要素(ブラウザ的な役割)
 * 
 * @returns Browser
 */

import styles from './Browser.module.css'

 function Browser ( props ) {
   return (
     <div className={ styles.browser }>
       <div className={ styles.titlebar}>
         <div className={ styles.title}> { props.title } </div>
         <div className={ styles.closebtn} onClick={ props.closeAction }> ✕ </div>
       </div>
       <div className={styles.body}>
       </div>
     </div>
   )
 }

export default Browser