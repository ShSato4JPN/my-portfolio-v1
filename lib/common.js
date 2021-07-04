/**
 * 日付データを作成します。(yyyy-MM-dd hh.mm.ss.ff)
 * @returns {String} date of String - 文字列型の日付データ
 */
export function  getCurrentDate() {
  const date = new Date()
  const yyyy = date.getFullYear()
  const MM = leftPad(date.getMonth() + 1, 2, '0' )
  const dd = leftPad(date.getDate(), 2, '0' )
  const hh = leftPad(date.getHours(), 2, '0' )
  const mm = leftPad(date.getMinutes(), 2, '0' )
  const ss = rightPad( date.getSeconds(), 2, '0' )
  const ff = rightPad( date.getMilliseconds(), 3, '0' ) 
  return `${yyyy}-${MM}-${dd} ${hh}:${mm}:${ss}.${ff}`
}

/**
 * 指定の文字数に達していない場合、左部に指定の文字でパディング処理を行います。
 * @param {String} val - パディング処理対象の文字列
 * @param {Number} size - 最大桁数
 * @param {String} padChr - 埋める文字
 * @returns 
 */
function leftPad ( val, size, padChr ) {
  let res = val.toString()
  while ( res.length < size ) {
    res = padChr + res
  }
  return res  
}

/**
 * 指定の文字数に達していない場合、右部に指定の文字でパディング処理を行います。
 * @param {String} val - パディング処理対象の文字列
 * @param {Number} size - 最大桁数
 * @param {String} padChr - 埋める文字
 * @returns 
 */
function rightPad( val, size, padChr ) {
  let res = val.toString()
  while ( res.length < size ) {
    res = res + padChr
  }
  return res
}

/**
 * メッセージを分割します。(汎用性0のファンクションです)
 * @param {String} msg - メッセージ
 * @returns 
 */
export function separateMessage( msg ) {
  // '&!sapn-start!&' の Length
  const lenStart = 14
  // '&!sapn-end!&' の Length
  const lenEnd = 12　

  let res = []

  if ( msg == null　) {
    return res
  }

  if ( msg.match(/&!span-start!&/) && msg.match(/&!span-end!&/) ) {
    const posStart = msg.indexOf( '&!span-start!&' )
    const posEnd = msg.indexOf( '&!span-end!&' )
    
    let msg1 = msg.substr( 0, posStart)
    let msg2 = msg.substr( (posStart + lenStart), posEnd - (posStart + lenStart))
    let msg3 = msg.substr( (posEnd + lenEnd), msg.length)
    
    res.push( msg1, msg2, msg3 )
  } else {
    res.push( msg )
  }

  return res
}