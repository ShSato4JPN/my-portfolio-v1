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