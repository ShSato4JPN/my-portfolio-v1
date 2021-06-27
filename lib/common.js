export function  getCurrentDate() {
  const date = new Date()
  const yyyy = date.getFullYear()
  const MM = date.getMonth() + 1
  const dd = date.getDate()
  const hh = date.getHours()
  const mm = date.getMinutes()
  const ss = date.getSeconds()
  const ff = date.getMilliseconds()
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}.${ff}`
}