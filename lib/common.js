export function  getCurrentDate() {
  const date = new Date()
  const yyyy = date.getFullYear()
  const MM = rightPad(date.getMonth() + 1, 2, '0' )
  const dd = rightPad(date.getDate(), 2, '0' )
  const hh = rightPad(date.getHours(), 2, '0' )
  const mm = rightPad(date.getMinutes(), 2, '0' )
  const ss = rightPad( date.getSeconds(), 2, '0' )
  const ff = rightPad( date.getMilliseconds(), 3, '0' ) 
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}.${ff}`
}

function rightPad( val, size, padChr ) {
  let res = val.toString()
  while ( res.length < size ) {
    res = res + padChr
  }
  return res
}

export function separateMessage( msg ) {
  // '&!sapn-start!&' の Length
  const lenStart = 14
  // '&!sapn-end!&' の Length
  const lenEnd = 12　

  let res = []

  if ( msg == null) {
    return res
  }

  if ( msg.match(/&!span-start!&/) && msg.match(/&!span-end!&/) ) {
    const posStart = msg.indexOf( '&!span-start!&' )
    const posEnd = msg.indexOf( '&!span-end!&' )

    let msg1 = msg.substr( 0, posStart)
    let msg2 = msg.substr( (posStart + lenStart), posEnd - (posStart + lenStart))
    let msg3 = msg.substr( (posEnd + lenEnd), msg.length)

    console.log( 'msg1 is ' + msg1 )
    console.log( 'msg2 is ' + msg2 )
    console.log( 'msg3 is ' + msg3 )
    res.push( msg1, msg2, msg3 )
  } else {
    res.push( msg )
  }

  return res
}